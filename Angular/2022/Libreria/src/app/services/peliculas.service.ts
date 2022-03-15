import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url = 'https://api.themoviedb.org/3/discover/movie'
  params = new HttpParams()
  .set('api_key','2900fecd7f74a94976c23225b269f765')
  .set('page',6)
  .set('language','es-ES')
  private httpOptions = {
    Headers: new HttpHeaders({
      'Accept' : 'application/json'
    }),
    params: this.params
  };

  constructor(private http:HttpClient) { }

  async getAll(): Promise<any>{ //funcion asincrona (esperar tiempo)
    console.log('pelis');
    return new Promise ( resolve => {
      this.http.get(this.url, this.httpOptions)
      .subscribe (data => {  //En data recibimos la RESPONSE de mi API 9
        console.log(data);
        resolve (data);
    })
  })
}

  getAll1(){  //Equivale al boton de SEND de POSTMAN
    this.http.get(this.url, this.httpOptions) //instruccion 4
    .subscribe (data => {  //En data recibimos la RESPONSE de mi API 9
      console.log(data) // de 4 a 9 se hace una peticion ASINCRONA (pasan muchos segundos) que debe de ir por INTERNET hasta el SERVIDOR y vuelva al cliente ==> la ruleta de cargando(loading)
    })
  }

  getEdad (edad: number) {
    let fnac = 2022 - edad;
    return fnac;
  }
}
