import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styles: []
})
export class InformacionComponent implements OnInit {
  id = '';
  constructor(private ar: ActivatedRoute) {
    this.ar.params.subscribe( params => {
      this.id = params['movie'];
      console.log(this.id);
    });
  }

  ngOnInit() {

  }

}
