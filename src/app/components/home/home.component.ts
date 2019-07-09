import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

import { PeliculaModel } from '../../models/pelicula.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // peliculas: PeliculaModel[] = [];
  peliculas = [];
  constructor(public ps: PeliculasService) {
    console.log('Constructor home');
   this.ps.getPopulares().subscribe( res => {
      this.peliculas = this.crearArreglo(res);
      console.log(res);
     });
   this.ps.getPupularesKids().subscribe( res => {
     console.log(res);
   });
   this.ps.getCartelera().subscribe( res => {
     console.log(res);
   });
  }

  ngOnInit() {
  }

  verMas(id: number) {
    console.log(id);
  }

  opcion(opc: string) {
    switch (opc) {
      case 'cartelera':
          console.log('cartelera');
        break;
      case 'populares':
          console.log('popu');
        break;
      case 'niños':
          console.log('niños');
        break;
      default:
        break;
    }
  }
  /**
   * Transforma objeto a arreglo de objetos.
   * @ param heroesObj
   */
  private crearArreglo(resp: object) {
    const peliculasObj: PeliculaModel[] = [];

    if ( resp === null) { return []; }

    Object.keys( resp ).forEach( key => {
      const peli: PeliculaModel = resp[key];
      // peli.id = key;
      peliculasObj.push(peli);
    });

    return peliculasObj;
  }
}
