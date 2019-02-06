import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDividerModule,
  MatTooltipModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule

  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule

  ]
})
export class MaterialModule { }
