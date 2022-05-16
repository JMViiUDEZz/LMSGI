import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personajes-lista',
  templateUrl: './personajes-lista.component.html',
  styleUrls: ['./personajes-lista.component.scss']
})
export class PersonajesListaComponent implements OnInit {

  @Input() personaje:any;

  constructor(
  ) { }

  ngOnInit() {

}

}
