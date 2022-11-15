import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PacienteService {

  constructor(private http: HttpClient, private httpClient: HttpClient) {}

  findAll = () =>
  this.http.get<any>(
      `http://localhost:8080/paciente`
  );
}
