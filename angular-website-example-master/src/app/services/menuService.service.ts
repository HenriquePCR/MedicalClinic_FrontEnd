import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class MenuService {
    // list1Event: EventEmitter<any> = new EventEmitter();

    menuType: { id: number; title: string; link: string }[];
    menu = [
        { id: 1, title: "Home", link: "/home" },
        { id: 2, title: "Agendamento", link: "/agendamento" },
        { id: 3, title: "Novo Endereço", link: "/novoEndereco" },
        { id: 4, title: "Gallery", link: "/gallery" },
        { id: 5, title: "Log in", link: "/logIn" },
    ];
    getMenu(): Observable<{ id: number; title: string; link: string }[]> {
        const menu2 = of(this.menu);
        return menu2;
    }
    // const menu2 = of(this.menu);
    // return menu2.subscribe(
    //     (data) => {
    //         this.list1Event.emit(data.list1);
    //     })

    setMenu() {
        this.menu = [
            { id: 1, title: "Novo Funcionario", link: "/novoFuncionario" },
            { id: 2, title: "Agendamento", link: "/agendamento" },
            { id: 3, title: "Novo Endereço", link: "/novoEndereco" },
            { id: 4, title: "Gallery", link: "/gallery" },
            { id: 5, title: "Log in", link: "/logIn" },
        ];
    }
    constructor(private http: HttpClient, private httpClient: HttpClient) { }

    cadastrarEndereco(endereco: any): Observable<any> {
        return this.http.post('http://localhost:8080/endereco', endereco);
    }
}
