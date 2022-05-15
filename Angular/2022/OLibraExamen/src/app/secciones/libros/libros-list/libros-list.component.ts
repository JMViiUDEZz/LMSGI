import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LibrosService } from 'src/app/services/libros.service';
import { ILibro } from '../../../interfaces/ILibros';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {
  codCat: number = 0;
  nombre: string = '';
  libros: ILibro[] = [];
  constructor( private ruta: ActivatedRoute,
               private librosService: LibrosService) { }

  async ngOnInit() {
    this.ruta.params
      .subscribe ( async (params: Params )  => {
        this.codCat = params['codCat'];
        this.nombre = params['nombre'];
        this.libros = await this.librosService.getLibrosCatgoria(this.codCat);
        console.log(this.libros);
      })
  }

}
