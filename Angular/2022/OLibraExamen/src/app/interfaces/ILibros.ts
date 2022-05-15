export interface ICategoria {
  category_id: number;
  name: string;
  nicename: string;
}

export interface ILibro {
  ID?: number;
  title?: string;
  author?: string;
  publisher?: string;
  pages?: number;
  publisher_date?: string;
  url_details?: string;
  cover?: string;
  categories?: ICategoria;
}


