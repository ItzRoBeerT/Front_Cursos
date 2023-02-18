import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 

  }

  loginUsuario(email:string, password:string): Observable<TokenUsuario>{
    return this.http.post<TokenUsuario>('http://127.0.0.1:3000/usuario/login',{email:email, password:password});
  }

  signUpUsuario(nombre:string, email:string, password:string): Observable<Usuario>{
    return this.http.post<Usuario>('http://127.0.0.1:3000/crearUsuario',{nombre:nombre, email:email, password:password});
  }

  getAllCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>('http://127.0.0.1:3000/cursos');
  }
}
