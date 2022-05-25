import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "ts-md5/dist/md5";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Personajes } from "../interfaces/IPersonajes";

@Injectable({
  providedIn: "root"
})
export class MarvelService {

  constructor(private http: HttpClient) {
    //console.log("verificación de hash de acceso", this.hash);
  }

  //crear la marca de tiempo
  private timeStamp = new Date().getTime();
  //crear el hash: Las funciones hash son funciones o técnicas que se utilizan para codificar contraseñas y otro texto sin formato en texto ilegible para almacenar y transmitir. Hay muchos tipos de Hash basadas en la forma en que se codifica el texto sin formato.
  //https://protecciondatos-lopd.com/empresas/hash/#:~:text=Las%20funciones%20hash%20son%20funciones,codifica%20el%20texto%20sin%20formato.
  //https://code.tutsplus.com/es/tutorials/how-to-hash-and-decrypt-with-md5-in-javascript--cms-38297
  //crear el hash
  private hash = Md5.hashStr(
    this.timeStamp + environment.PrivateKey + environment.PublicKey
  );

 // PublicKey: '********************************', -> environment.ts
 // PrivateKey: '*******************************', -> environment.ts
 // MarvelEndpoint: 'https://gateway.marvel.com/v1/public' -> ruta inicial consulta

  //getPersonajes
  getPersonajes(): Observable<Personajes[]> {
    return this.http
    //array personajes
    //consulta para sacar a los personajes en mayéscula
      .get<Personajes[]>(
        `${environment.MarvelEndpoint}/characters?&ts=${this.timeStamp}&apikey=${
          environment.PublicKey
        }&hash=${this.hash}`
      )
      .pipe(
        map(response => {
          return (response as any).data.results;
        })
      );
  }

  //método de búsqueda, creo otro método, porque el punto final cambia
  // https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spid&apikey=399252e317d7557e0a22b326084ab614
  buscaPersonajes(term?:string): Observable<any> {
    return this.http
        //saca a los personajes respecto al parametro nameStartsWith, que nos permite listarlos dependiendo de los caracteres por los que empiezen sus nombres, a su vez, en mayúscula
      .get<any>(
        `${environment.MarvelEndpoint}/characters?nameStartsWith=${term}&orderBy=name&ts=${this.timeStamp}&apikey=${environment.PublicKey}&hash=${this.hash}`)
      .pipe(
        map(response => {
          return (response as any).data.results;
        })
      );
  }

  //https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=399252e317d7557e0a22b326084ab614
  // saca al personaje por id
  getPersonajeID(id: number): Observable<Personajes[]> {
    return this.http
      .get<Personajes[]>(
        `${environment.MarvelEndpoint}/characters/${id}?&ts=${this.timeStamp}&apikey=${
          environment.PublicKey
        }&hash=${this.hash}`
      )
      .pipe(
        map(response => {
          return (response as any).data.results;
        })
      );
  }

  //obtener el cómic por id de personaje
  //https://gateway.marvel.com:443/v1/public/characters/1011114/comics?format=comic&apikey=399252e317d7557e0a22b326084ab614
  getComics(id: number, comics:string): Observable<Personajes[]> {
    return this.http
      .get<Personajes[]>(
        `${environment.MarvelEndpoint}/characters/${id}/${comics}?&ts=${this.timeStamp}&apikey=${
          environment.PublicKey
        }&hash=${this.hash}`
      )
      .pipe(
        map(response => {
          return (response as any).data.results;
        })
      );
  }

  getPersonajeComic(url) {
    return this.http.get(`${url}?&ts=${this.timeStamp}&apikey=${environment.PublicKey}&hash=${this.hash}`)
    .pipe(
      map(
        response => { return (response as any); }
        )
    )
  }
 }

