import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        //variable mensaje error vacía
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          // mensaje error del lado del cliente
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // mensaje error del lado del servidor
          errorMessage = `Error Code: ${error.status}\nMessage: ${
            error.message
          }`;
        }
        //devuelve mensaje error
        return throwError(errorMessage);
      })
    );
  }
}
