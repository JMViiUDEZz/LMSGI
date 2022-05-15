import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ICategoria, ILibro } from '../interfaces/ILibros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  autores: string[] = [];
  private api = 'http://www.etnassoft.com/api/v1/get';
  private  httpOptions = {
    headers: new HttpHeaders({
      'Cookie': 'PHPSESSID=emc4eikhr5ffl2gro4li264266',
      'Accept' : '*/*',
      'Connection': 'keep-alive'
    }),
    params: new HttpParams()
  };
  constructor( private http: HttpClient) { }

  getCategorias(): Promise<ICategoria[]>{
    const url = `${this.api}`;
    const params = new HttpParams()
      .set ('get_categories', 'all'); // /?get_categories=all
    this.httpOptions.params = params;

    return new Promise(resolve => {
      this.http.get<ICategoria[]>(url, this.httpOptions)
      .subscribe (data => {
        resolve(data)
      })
    })
  }

  getLibros(): Promise<string[]>{
    // headers y parámetros de la REQUEST
    const url = `${this.api}`;
    const params =new HttpParams()
      .set ('book_author', 'all')
      .set ('num_items', '143');
    this.httpOptions.params = params;
    // PROGRAMAR el SEND DE LA PETICIÓN

    return new Promise(resolve => {
      this.http.get<ILibro[]>(url, this.httpOptions)
      .subscribe (libros => { //recibo la RESPONSE
        for (let libro of libros){
          if (this.autores.indexOf(libro.author as string) < 0 ){
            this.autores.push(libro.author as string);
          }
        console.log(libro.author);
        // resolve(data)}
        }
        resolve(this.autores);
      })
    })

  }

  getLibrosCatgoria(idCat: number): Promise<ILibro[]>{
    // headers y parámetros de la REQUEST
    const url = `${this.api}`;
    const params =new HttpParams()
      .set ('category_id', idCat);
    this.httpOptions.params = params;
    // PROGRAMAR el SEND DE LA PETICIÓN

    return new Promise(resolve => {
      this.http.get<ILibro[]>(url, this.httpOptions)
      .subscribe (data => { //recibo la RESPONSE
        console.log(data);
        resolve(data)
      })
    })

  }

  getLibrosAutor(nameAutor: string): Promise<ILibro[]>{
    // headers y parámetros de la REQUEST
    const url = `${this.api}`;
    const params =new HttpParams()
      .set ('book_author', nameAutor);
    this.httpOptions.params = params;
    // PROGRAMAR el SEND DE LA PETICIÓN

    return new Promise(resolve => {
      this.http.get<ILibro[]>(url, this.httpOptions)
      .subscribe (data => { //recibo la RESPONSE
        console.log(data);
        resolve(data)
      })
    })

  }
}
