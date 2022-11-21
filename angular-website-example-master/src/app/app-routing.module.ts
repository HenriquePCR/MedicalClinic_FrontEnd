import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((mod) => mod.HomeModule),
  },
  {
    path: "agendamento",
    loadChildren: () =>
      import("./agendamento/about.module").then((mod) => mod.AboutModule),
  },
  {
    path: "novoEndereco",
    loadChildren: () =>
      import("./services/services.module").then((mod) => mod.ServicesModule),
  },
  {
    path: "logIn",
    loadChildren: () =>
      import("./testimonial/testimonial.module").then(
        (mod) => mod.TestimonialModule
      ),
  },
  {
    path: "gallery",
    loadChildren: () =>
      import("./gallery/gallery.module").then((mod) => mod.GalleryModule),
  },
  {
    path: "novoFuncionario",
    loadChildren: () =>
      import("./restrito/novo-funcionario/novo-funcionario.module").then((mod) => mod.NovoFuncionarioModule),
  },
  {
    path: "gallery",
    loadChildren: () =>
      import("./gallery/gallery.module").then((mod) => mod.GalleryModule),
  },

  {
    path: "404",
    loadChildren: () =>
      import("./notfound/notfound.module").then((mod) => mod.NotfoundModule),
  },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
