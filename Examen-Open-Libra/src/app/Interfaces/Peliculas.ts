
export interface IPelicula{
  id?: string;
  title?: string;
  author?: string;
  content?: string;
  content_short?: string;
  publisher?: string;
  publisher_date?: string;
  pages?: string;
  url_details?: string;
  url_download?: string;
  cover?: string;
  language?: string;
  categories?: string[];

}
export interface IPeliculas{
  page: number;
  results?: IPelicula[];
}

export interface IGenero {
  category_id: string;
  name: string;
}
export interface IGeneros {
  genres?: IGenero[]
}
