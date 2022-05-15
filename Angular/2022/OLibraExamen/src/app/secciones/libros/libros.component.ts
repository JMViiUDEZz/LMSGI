import { Component, OnInit } from '@angular/core';
import { ICategoria, ILibro } from 'src/app/interfaces/ILibros';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  //DECLARACIÓN DE PROPIEDADES
  categorias: ICategoria[] = [];
  libros: ILibro[] = [];

  //DECLARACIÓN DE MÉTODOS
  constructor(private librosService: LibrosService) { }

  async ngOnInit(){
    console.log (this.librosService.getCategorias());
    this.categorias = await this.librosService.getCategorias();
  }

  async getLibrosCategory(codigo: number) {
    let libros: ILibro[] = [];
    console.log(codigo, 'desde el controlador/componente');
    // el servicio devuelve un PROMESA ---> sleep(tiempo)
    this.libros = await this.librosService.getLibrosCatgoria(codigo);
    console.log(this.libros);
  }


}
