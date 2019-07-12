import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component ({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: []
})

export class BusquedaComponent implements OnInit {

  peliculas: any[] = [];
  constructor(private ps: PeliculasService) { }

  ngOnInit() {
  }

  searchPelicula(termino: string) {
    if (termino !== '' || termino.length !== 0) {
      this.ps.search(termino)
      .subscribe((resp: any) => {
        this.peliculas = resp;
      });
    } else {
      this.peliculas = [];
    }

  }

}
