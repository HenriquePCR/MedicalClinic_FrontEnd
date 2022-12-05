import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class MenuService {
  menuChanges: Subject<{ id: number; title: string; link: string }[]> =
    new Subject<{ id: number; title: string; link: string }[]>();

  menu = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "Agendamento", link: "/agendamento" },
    { id: 3, title: "Novo Endereço", link: "/novoEndereco" },
    { id: 4, title: "Gallery", link: "/gallery" },
    { id: 5, title: "Log in", link: "/logIn" },
  ];

  getMenu() {
    return this.menu;
  }

  constructor(private http: HttpClient, private httpClient: HttpClient) {
    this.menuChanges.subscribe((value) => {
      this.menu = value;
    });
  }

  setMenu() {
    this.menuChanges.next([
      { id: 1, title: "Novo Funcionario", link: "/novoFuncionario" },
      { id: 2, title: "Novo Paciente", link: "/novoPaciente" },
      { id: 3, title: "Funcionários", link: "/listarFuncionarios" },
      { id: 4, title: "Pacientes", link: "/gallery" },
      { id: 5, title: "Endereços", link: "/logIn" },
      { id: 6, title: "Todos Agendamentos", link: "/home" },
      { id: 7, title: "Meus Agendamentos", link: "/gallery" }
    ]);
  }

  cadastrarEndereco(endereco: any): Observable<any> {
    return this.http.post("http://localhost:8080/endereco", endereco);
  }
}
