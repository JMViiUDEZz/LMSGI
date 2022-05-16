import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Personajes } from "../interfaces/IPersonajes";

@Injectable({
  providedIn: "root"
})
export class PersonajesService {
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

}

