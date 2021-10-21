import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../users.service';
import { UserI } from 'src/app/models/user.interface';

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})



export class ModalformComponent implements OnInit {
  public title: string;
  public User2Edit: any;
  public botton: string;
  sex: boolean;
  users: UserI[];


  @Input()
  Nombre: string;
  Apellido: string;
  Ubicacion: string;
  Telefono: string;

  constructor(private servicio: UsersService, public dialogRef: MatDialogRef<ModalformComponent>) {
    this.title = "";
    this.User2Edit = "";
    this.botton = "";
    this.sex = false;
    this.users = [];


    //Usuario
    this.Nombre = "";
    this.Apellido = "";
    this.Ubicacion = "";
    this.Telefono = ""

  }

  // firstName <- nombre, máx 45 caracteres, obligatorio*
  // lastName <- apellido, máx 45 caracteres, obligatorio*
  // location <- ubicación, máx 90 caracteres
  // phone <- teléfono, máx 10 caracteres
  // gender <- género, máx 1 caracter (m = hombre   O   f = mujer), obligatorio*


  ngOnInit(): void {
    console.log(this.User2Edit);
    this.Nombre = this.User2Edit.firstName;
    this.Apellido = this.User2Edit.lastName;
    this.Ubicacion = this.User2Edit.location;
    this.Telefono = this.User2Edit.phone;
    this.sex = this.User2Edit.gender;
  }


  cerrar(): void {
    this.dialogRef.close();
  }


  habiliatarBoton(): boolean {
    if (this.Nombre && this.Apellido && this.Telefono && this.Ubicacion && this.sex) {
      return false;
    } else {
      return true;
    }

  }

  save() {
    if (this.title === "Editar Usuario") {
      console.log(this.User2Edit.id);
      this.User2Edit.firstName = this.Nombre;
      this.User2Edit.lastName =this.Apellido;
      this.User2Edit.location = this.Ubicacion;
      this.User2Edit.phone = this.Telefono;
      this.User2Edit.gender = this.sex;
      this.servicio.putUser(this.User2Edit).subscribe(data => console.log(this.User2Edit));
    } else {
      const user = {
        firstName: this.Nombre,
        lastName: this.Apellido,
        location: this.Ubicacion,
        phone: this.Telefono,
        gender: this.sex
      }      
      this.servicio.postUser(user).subscribe(data => console.log(user));
    }
  }
}
