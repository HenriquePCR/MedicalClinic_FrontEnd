import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class NovoPacienteService {

    constructor(private http: HttpClient, private httpClient: HttpClient) { }

    cadastrarPaciente(paciente: any): Observable<any> {
        return this.http.post('http://localhost:8080/paciente', paciente);
    }
}