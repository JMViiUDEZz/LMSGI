import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenero, IGeneros, IPelicula, IPeliculas } from '../Interfaces/Peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private api = 'https://www.etnassoft.com/api/v1/get/?'; //parte fija de la URL a la API

  private params =
    new HttpParams()
      .set('page', 1)

  private  httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
    }),
    params: this.params
  };
  constructor(private http: HttpClient) { }

  async getMovie(id: string): Promise<IPelicula>{ //libro
    const prefix = 'id=589';
    const url = `${this.api}${prefix}${id}`;
    console.log(url);
    return new Promise ( resolve => {
      this.http.get<IPelicula>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve(data)
        })
    })

  }
  async getPagina(pagina: number):Promise<IPeliculas>{ //pagina
    const prefix = 'results_range=0,10';
    const url = `${this.api}${prefix}`;
    let params1 = new HttpParams()
                  .set("page", pagina)
    this.httpOptions.params = params1;
    return new Promise (resolve => {
      this.http.get<IPeliculas>(url, this.httpOptions)
        .subscribe( data => {
          console.log(data);
          resolve(data);
        })
    })
  }
  async getFilter(genero: string):Promise<IPeliculas>{ //filtro categoria
    const prefix = 'category_id=201';
    const url = `${this.api}${prefix}`;
    let params1 = new HttpParams()
                  .set("with_genres", genero)
    this.httpOptions.params = params1;
    return new Promise (resolve => {
      this.http.get<IPeliculas>(url, this.httpOptions)
        .subscribe( data => {
          console.log(data);
          resolve(data);
        })
    })
  }
  async getGeneros(): Promise<IGeneros> { //Categorias
    const prefix = 'get_categories=all';
    const url = `${this.api}${prefix}`;
    return new Promise ( resolve => {
      this.http.get<IGeneros>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve (data)
        })
    })
  }
  async getAll(page: number):Promise<IPeliculas>{ //Todos Libros
    const prefix = "book_author=all";
    const url = `${this.api}${prefix}`;
    return new Promise ( resolve => {
      this.http.get<IPeliculas>(url, this.httpOptions)
      .subscribe (data => {
        resolve( data )
      })
    })
  }




}
