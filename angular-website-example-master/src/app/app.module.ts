import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { NavmenuComponent2 } from "./navmenu2/navmenu.component";
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationComponent2 } from './navigation2/navigation.component';
import { SocialComponent } from './social/social.component';
import { WebsiteBlockComponent } from "./website-block/website-block.component";

// Modules
import { AppRoutingModule } from "./app-routing.module";
import { AboutModule } from "./agendamento/about.module";
import { GalleryModule } from "./gallery/gallery.module";
import { HomeModule } from "./home/home.module";
import { NotfoundModule } from "./notfound/notfound.module";
import { ServicesModule } from "./services/services.module";
import { NovoFuncionarioModule } from "./restrito/novo-funcionario/novo-funcionario.module"

// Services
import { ConfigService } from "./shared/services/config.service";
import { InMemoryDataService } from "./shared/services/in-memory-data.service";
import { Header2Component } from './header2/header2.component';

import { NovoPacienteComponent } from './restrito/novo-paciente/novo-paciente.component';
import { ListarFuncionariosComponent } from './restrito/listar-funcionarios/listar-funcionarios.component';
import { ListarEnderecosComponent } from './restrito/listar-enderecos/listar-enderecos.component';
import { ListarMeusAgendamentosComponent } from './restrito/listar-meus-agendamentos/listar-meus-agendamentos.component';
import { ListarTodosAgendamentosComponent } from './restrito/listar-todos-agendamentos/listar-todos-agendamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    NavigationComponent2,
    NavmenuComponent,
    NavmenuComponent2,
    SocialComponent,
    WebsiteBlockComponent,
    Header2Component,
    NovoPacienteComponent,
    ListarFuncionariosComponent,
    ListarEnderecosComponent,
    ListarMeusAgendamentosComponent,
    ListarTodosAgendamentosComponent,
  ],
  imports: [
    AboutModule,
    AppRoutingModule,
    BrowserModule,
    GalleryModule,
    HomeModule,
    HttpClientModule,
    NovoFuncionarioModule,
    NotfoundModule,
    ReactiveFormsModule,
    ServicesModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule { }
