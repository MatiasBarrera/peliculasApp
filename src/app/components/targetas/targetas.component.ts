import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styles: []
})
export class TargetasComponent implements OnInit {

  @Input() pelis: any[] = [];

  constructor(private ps: PeliculasService, private route: Router) { }

  ngOnInit() {
  }

  verMas(peli: any) {
    // console.log(peli);
    this.route.navigateByUrl(`/informacion/${ peli.id }`);
  }
}
