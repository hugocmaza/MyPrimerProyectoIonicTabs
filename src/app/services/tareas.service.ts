import { Injectable } from '@angular/core';
import { Tarea } from '../model/tarea';
import {HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import {retry, catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas!: Tarea[];
  nuevaTarea = new Tarea(0,new Date(),'');
  url = 'http://localhost:3000/tareas';
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public http: HttpClient) { }

  getAllTareas( ): Observable<Tarea[]>{

    return this.http.get<Tarea[]>(`${this.url}/`).pipe(
      tap((Student) => console.log('Listado de Tareas')),
      catchError(this.handleError<Tarea[]>('Get student', []))
    );


  }

  getTareabyId(id: number): Observable<Tarea>{
    return this.http.get<Tarea>(this.url+ '/' +id); //"http://localhost:3000/tareas/+3"
  }

  addTarea(tarea: Tarea): Observable<any>{
    return this.http.post(this.url,tarea);
  }

  updateTarea(id: number,tarea: Tarea): Observable<any>{
    console.log('SERVICIO');
    console.log('-------'+id+'-----'+tarea.titulo);
    return this.http.put(this.url + '/' + tarea.id, tarea);
  }

  deleteTarea(id: number): Observable<any>{
    return this.http.delete(this.url + '/'  + id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
