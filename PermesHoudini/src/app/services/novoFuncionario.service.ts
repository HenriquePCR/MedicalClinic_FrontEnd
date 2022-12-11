import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class NovoFuncionarioService {

    constructor(private http: HttpClient, private httpClient: HttpClient) { }

    cadastrarFuncionario(funcionario: any): Observable<any> {
        console.log(funcionario)
        return this.http.post('http://localhost:8080/funcionario', funcionario);
    }
}
