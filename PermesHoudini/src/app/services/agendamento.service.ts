import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AgendamentoService {
  usuarioLogado: any;

  constructor(private http: HttpClient, private httpClient: HttpClient) {}

  addUsuarioLogado(usuario: any) {
    console.log("colocando", usuario);
    this.usuarioLogado = usuario;
  }

  getUsuarioLogado() {
    return this.usuarioLogado;
  }

  findAll = () => this.http.get<any>(`http://localhost:8080/agenda`);

  cadastrarAgendamento(agenda: any): Observable<any> {
    return this.http.post("http://localhost:8080/agenda", agenda);
  }
}
