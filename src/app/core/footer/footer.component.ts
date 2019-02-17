import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author: string;
  empresa: string;
  lugar: string;
  fecha: Date;
  constructor() { }

  ngOnInit() {
    this.author = 'Samuel Ruiz';
    this.empresa = 'KeepCoding';
    this.lugar = 'Cadiz';
    this.fecha = new Date();

  }

}
