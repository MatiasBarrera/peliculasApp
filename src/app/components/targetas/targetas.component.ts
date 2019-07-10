import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';
import { PeliculaModel } from '../../models/pelicula.model';


@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styles: []
})
export class TargetasComponent implements OnInit {

  peliculas = [];
  opcionFilter = '';

  constructor(private ps: PeliculasService, private route: Router) { }

  ngOnInit() {
    this.opcion('cartelera');
  }

  verMas(id: string) {
    this.route.navigateByUrl(`/informacion/${id}`);
  }

  opcion(opc: string) {
    switch (opc) {
      case 'cartelera':
          this.ps.getCartelera().subscribe( res => {
            this.peliculas = this.crearArreglo(res);
            this.opcionFilter = 'Cartelera';
          });
        break;
      case 'populares':
          this.ps.getPopulares().subscribe( res => {
            this.peliculas = this.crearArreglo(res);
            this.opcionFilter = 'Populares';
           });
        break;
      case 'niños':
          this.ps.getPupularesKids().subscribe( res => {
            this.peliculas = this.crearArreglo(res);
            this.opcionFilter = 'Niños';
          });
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
