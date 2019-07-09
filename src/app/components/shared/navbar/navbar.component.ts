import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../../services/peliculas.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(private ps: PeliculasService) { }

  ngOnInit() {
  }
  // TODO: revisar el buscar...
  buscar(texto: string) {
    console.log(texto);
  }
}
