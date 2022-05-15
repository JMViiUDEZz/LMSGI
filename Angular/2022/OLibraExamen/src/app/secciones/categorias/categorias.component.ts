import { Component, OnInit } from '@angular/core';
import { ICategoria } from 'src/app/interfaces/ILibros';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: ICategoria[] = [];
  constructor(private librosService: LibrosService) { }

  async ngOnInit() {
    this.categorias = await this.librosService.getCategorias();
  }

}
