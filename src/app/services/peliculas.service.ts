import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '91cda4b554a323baa39dc3c3ac0814c7';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient) { }

  getPopulares() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }`;
    return this.http.get(url)
       .pipe(
        map( resp => resp['results'])
      );
  }

  getPupularesKids() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }`;
    return this.http.get(url)
      .pipe(
        map( resp => resp['results'])
      );
    // https://api.themoviedb.org/3/discover/movie?certification.lte=G&sort_by=popularity.desc&api_key=91cda4b554a323baa39dc3c3ac0814c7
  }

  // Debe recibir como parametro fecha desde (?)
  getCartelera() {
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2019-07-01&primary_release_date.lte=2019-08-01&api_key=${ this.apiKey }`;
    return this.http.get(url)
      .pipe(
        map(res => res['results'])
      );
  }

  buscar( texto: string ) {
    console.log(texto);
  }

}
