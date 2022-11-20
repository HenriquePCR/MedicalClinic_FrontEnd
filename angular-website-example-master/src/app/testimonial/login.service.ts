import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {


  constructor(private http: HttpClient, private httpClient: HttpClient) {}
//fazer sem params
  // cadastrarEndereco(endereco: any): Observable<any> {
  //   return this.http.post('http://localhost:8080/endereco', endereco);
  // }

  loginSistema(dado: any): Observable<any> {
    return this.http.post('http://localhost:8080/login', dado);
  }
}
