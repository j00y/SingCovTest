import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FavsModalComponent } from '../favs-modal/favs-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openFavsModal() {
    this.dialog.open(FavsModalComponent, {
      backdropClass: 'backdrop-modal-class',
      panelClass: 'panel-modal-class'
    });
  }
}
