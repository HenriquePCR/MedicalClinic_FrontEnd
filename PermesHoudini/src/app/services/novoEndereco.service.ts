import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NovoEnderecoService {

  constructor(private http: HttpClient, private httpClient: HttpClient) {}

  cadastrarEndereco(endereco: any): Observable<any> {
    return this.http.post('http://localhost:8080/endereco', endereco);
  }
}
