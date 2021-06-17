import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpInterceptor, HttpEvent} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        this.snackBar.open(error.error.error, 'Cerrar', { duration: 3000 });
        return throwError(error);
      })
    );
  }
}
