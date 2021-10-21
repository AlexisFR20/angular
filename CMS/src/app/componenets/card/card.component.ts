import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalformComponent } from '../modalform/modalform.component';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() User: any;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  openDialog(bandera: String): void {
    
    const dialogRef = this.dialog.open(ModalformComponent, {
      width: '250px',
      data: {}
      
    });
    dialogRef.componentInstance.title = 'Editar Usuario';
    dialogRef.componentInstance.User2Edit = this.User;  
    dialogRef.componentInstance.botton = 'Guardar Usuario';
  }

}


