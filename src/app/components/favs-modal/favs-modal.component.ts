import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-favs-modal',
  templateUrl: './favs-modal.component.html',
  styleUrls: ['./favs-modal.component.scss']
})
export class FavsModalComponent implements OnInit {
  resultsFound: boolean;
  constructor(
    public dialogRef: MatDialogRef<FavsModalComponent>
  ) { }

  ngOnInit() {
  }
  closeModal() {
    this.dialogRef.close();
  }
}
