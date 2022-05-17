import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personajes } from "../../interfaces/IPersonajes";

import { MarvelService } from '../../servicios/marvel.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-personajes-detalle',
  templateUrl: './personajes-detalle.component.html',
  styleUrls: ['./personajes-detalle.component.scss']
})
export class PersonajesDetalleComponent implements OnInit {

  public detalles: Personajes[];
  public comics:any[] = [];
  public comicsImage:string;

  public dataInfo:any[]=[]; // quitar prueba
  public dataImage:any;
  public dataDescription: any;
  public notDescription: string = 'No description was found for this character';

  constructor(
    private marvelService: MarvelService,
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.spinner.show(); //cargando
    this.getPersonajeById();
    this.getComicsID();
  }

  getPersonajeById(){
    this.spinner.show(); //cargando
    this.marvelService.getPersonajeID(this.router.snapshot.params[`id`])
    .subscribe(response => {
      this.detalles = response //recibir personajes
      console.log(this.detalles)
      this.spinner.hide(); //cargando
    });

  }


  getComicsID(){
    this.spinner.show(); //cargando
    this.marvelService.getComics(this.router.snapshot.params[`id`],'comics')
    .subscribe(response => {
      this.comics = response;
      this.comicsImage = `${this.comics[0].thumbnail.path}.${this.comics[0].thumbnail.extension}`;
      console.log(this.comics);
      this.spinner.hide(); //cargando
    });

  }

  //lista comics, detalle y revistas
  getDadosComicsDetalles(url) {
    this.spinner.show(); //cargando
    this.marvelService.getPersonajeComic(url).subscribe( response  =>{
      this.dataInfo = response.data.results[0]
      this.dataDescription = `${response.data.results[0].description}`;
      this.dataImage = `${response.data.results[0].thumbnail.path}.${response.data.results[0].thumbnail.extension}`;
      console.log(this.dataInfo)
      this.spinner.hide(); //cargando
    })
  }
}
