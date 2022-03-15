import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //propiedades
  public pelis: any;
  title = 'Libreria';
  public anioNac: number; //variable de CLASE son comunes a todas las clases

  //metodos
  //inyectar el servicio PeliculasService en el componente/class AppComponent
 constructor(private peliculasService: PeliculasService) {
    const edad = 49;
    //const anioNac: number = 49;
    this.anioNac = this.peliculasService.getEdad(edad);
    console.log("usted nacio en",this.anioNac);

  }
  async ngOnInit() {
    this.pelis = await this.peliculasService.getAll();
  }

  public getPagina (npagina: number){
  console.log (npagina);
  return false;
  }
}
