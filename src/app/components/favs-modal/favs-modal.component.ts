import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatTableDataSource } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from 'app/redux/reducers/reducers';
import { PolicyModel } from 'app/models/policy.model';

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
