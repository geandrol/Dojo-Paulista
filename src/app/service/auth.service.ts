import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://dojopaulista.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://dojopaulista.herokuapp.com/usuarios/cadastrar', user)
  }

  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>('https://dojopaulista.herokuapp.com/usuarios/all', this.token)
  }

  getAllAluno(): Observable<User[]>{
    return this.http.get<User[]>('https://dojopaulista.herokuapp.com/usuarios/all-by-tipo/ALUNO', this.token)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://dojopaulista.herokuapp.com/usuarios/${id}`)
  }
    apagar(id: number){
       return this.http.delete(`https://dojopaulista.herokuapp.com/usuarios/${id}`, this.token)
}

}
