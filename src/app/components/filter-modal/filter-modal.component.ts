import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Options } from 'ng5-slider';

export interface RangeValue {
  minValue: number;
  maxValue: number;
}
@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {

  minValue = 0;
  maxValue = 0;
  minFilterPrice = 0;
  maxFilterPrice = 0;
  options: Options = {
    floor: 0,
    ceil: 0,
    step: 10,
    showTicks: false,
    hideLimitLabels: true,
    translate: (value: number): string => {
      return '$' + value;
    }
  };
  constructor(
    public dialogRef: MatDialogRef<FilterModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any) {
    this.options.ceil = this.data.maxPrice;
    this.maxValue = this.data.maxPrice;
    this.minValue = this.data.minPrice;
    this.minFilterPrice = this.data.minFilterPrice;
    this.maxFilterPrice = this.data.maxFilterPrice;

  }

  ngOnInit() {
  }
  closeModal() {
    this.dialogRef.close({ minValue: this.minValue, maxValue: this.maxValue, isFilterActive: true, closed: true });
  }
  noApplyFilter() {
    this.maxValue = 0;
    this.minValue = 0;
    this.dialogRef.close({ minValue: this.minValue, maxValue: this.maxValue, isFilterActive: false, closed: false });
  }
  applyFilter() {
    this.dialogRef.close({ minValue: this.minValue, maxValue: this.maxValue, isFilterActive: true, closed: false });
  }
}
