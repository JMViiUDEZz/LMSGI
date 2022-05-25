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
    this.getPersonajeById();//cargar detalles personaje por id
    this.getComicsID();//cargar comics personaje por id
  }
 //esta funcion llama a la funcion de personaje por id
  getPersonajeById(){
    this.spinner.show(); //cargando
    this.marvelService.getPersonajeID(this.router.snapshot.params[`id`]) //carga en la ruta, donde aparece el id del personaje seleccionado
    .subscribe(response => {
      this.detalles = response //recibir personajes al array detalles
      console.log(this.detalles) //muestra personajes en la consola
      this.spinner.hide(); //cargando
    });

  }

 //esta funcion llama a la funcion que obtiene el cómic por id de personaje
  getComicsID(){
    this.spinner.show(); //cargando
    this.marvelService.getComics(this.router.snapshot.params[`id`],'comics') //carga en la ruta, donde aparece el parámetro id del comic seleccionado
    .subscribe(response => {
      this.comics = response; //recibir comics al array comics
      this.comicsImage = `${this.comics[0].thumbnail.path}.${this.comics[0].thumbnail.extension}`; //recibir la imagen del comic
      console.log(this.comics); //muestra comics en la consola
      this.spinner.hide(); //cargando
    });

  }

  //lista comics, detalle y revistas
  getDadosComicsDetalles(url) {
    this.spinner.show(); //cargando
    this.marvelService.getPersonajeComic(url) //carga la ruta
    .subscribe( response  =>{
      this.dataInfo = response.data.results[0] //recibir la información del comic al array dataInfo
      this.dataDescription = `${response.data.results[0].description}`; //recibir la descripción del comic a dicha variable
      this.dataImage = `${response.data.results[0].thumbnail.path}.${response.data.results[0].thumbnail.extension}`; //recibir la imagen del comic a dicha variable
      console.log(this.dataInfo) //muestra comic en la consola
      this.spinner.hide(); //cargando
    })
  }
}
