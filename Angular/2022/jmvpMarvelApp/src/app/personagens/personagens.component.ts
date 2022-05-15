import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { MarvelService } from '../servicios/marvel.service';
import { Personajes } from "../interfaces/IPersonajes";


@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  public personagens:Personajes[]

  constructor(
    private marvelService:MarvelService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show(); //loading
    this.getPersonagen();//carrega os cards de personagens iniciais
}
  getPersonagen(){
    return this.marvelService.getPersonagens().subscribe(
      (response => {
        this.personagens = response;
        this.spinner.hide();
        console.log(response)
      })
    )
  }
}
