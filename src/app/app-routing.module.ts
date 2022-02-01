import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasComponent } from './aulas/aulas.component';
import { CadastraraulaComponent } from './cadastraraula/cadastraraula.component';
import { CadastrarplanoaulaComponent } from './cadastrarplanoaula/cadastrarplanoaula.component';
import { CadastrarusuarioComponent } from './cadastrarusuario/cadastrarusuario.component';
import { ChamadaComponent } from './chamada/chamada.component';
import { EditarUsuarioComponent } from './editar/editar-usuario/editar-usuario.component';
import { HomeComponent } from './home/home.component';
import { ListadealunosComponent } from './listadealunos/listadealunos.component';
import { LoginComponent } from './login/login.component';
import { PlanodeaulaComponent } from './planodeaula/planodeaula.component';
import { PresencaComponent } from './presenca/presenca.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'presenca', component: PresencaComponent},
  {path:'planodeaula', component: PlanodeaulaComponent},
  {path:'chamada', component: ChamadaComponent},
  {path:'aulas', component: AulasComponent},
  {path:'listadealunos', component: ListadealunosComponent},
  {path:'cadastraraula', component: CadastraraulaComponent},
  {path:'cadastrarplanoaula', component: CadastrarplanoaulaComponent},
  {path:'cadastrarusuario', component: CadastrarusuarioComponent},
  {path: 'editar-usuario/:id', component: EditarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
