import { Component, OnInit } from '@angular/core';
import { ModalformComponent } from '../modalform/modalform.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(bandera: String): void {

    const dialogRef = this.dialog.open(ModalformComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.componentInstance.title = 'Agregar Usuario';
    dialogRef.componentInstance.botton = 'Agregar Usuario';

  }

}
