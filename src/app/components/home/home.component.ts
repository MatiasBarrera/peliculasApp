import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

import { PeliculaModel } from '../../models/pelicula.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // peliculas: PeliculaModel[] = [];
  peliculas = [];
  peliculasKids = [];
  opcionFilter = '';
  constructor(public ps: PeliculasService, private route: Router) {

  }

  ngOnInit() {
     this.opcion('cartelera');
  }

  verMas(id: string) {
    this.route.navigateByUrl(`/informacion/${id}`);
  }

  opcion(opc: string) {
    switch (opc) {
      case 'cartelera': // 'cartelera'
          this.ps.getCartelera().subscribe( res => {
            this.peliculas = this.crearArreglo(res);
            this.opcionFilter = 'Cartelera';
            console.log(this.peliculas);
          });
        break;
      case 'populares':
          this.ps.getPopulares().subscribe( res => {
            this.peliculas = this.crearArreglo(res);
            this.opcionFilter = 'Populares';
           });
        break;
      case 'ninos': // 'niños'
          this.ps.getPupularesKids().subscribe( res => {
            this.peliculas = this.crearArreglo(res);
            this.peliculas.forEach(element => {
              if (!element.adult) {
                this.peliculasKids.push(element);
              }
            });
            this.peliculas = this.peliculasKids;
            this.opcionFilter = 'Niños';
            console.log(this.peliculas );
          });
        break;
      default:
        break;
    }
  }

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
