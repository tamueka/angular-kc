import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string;
  constructor() { }

  ngOnInit() {
    this.nombre="Pepe";
  }

  borrar(){
    this.nombre = '';
  }

}
