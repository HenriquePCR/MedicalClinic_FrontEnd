import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AgendamentoConsultaService {

  constructor(private http: HttpClient, private httpClient: HttpClient) {}

  buscarMedicos(){
    return this.http.get('http://localhost:8080/agenda/medicos');
  }

  buscarAgenda(){
    return this.http.get('http://localhost:8080/agenda');
  }
}
