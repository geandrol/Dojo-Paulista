import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PresencaComponent } from './presenca/presenca.component';
import { ChamadaComponent } from './chamada/chamada.component';
import { PlanodeaulaComponent } from './planodeaula/planodeaula.component';
import { AulasComponent } from './aulas/aulas.component';
import { CadastraraulaComponent } from './cadastraraula/cadastraraula.component';
import { CadastrarplanoaulaComponent } from './cadastrarplanoaula/cadastrarplanoaula.component';
import { ListadealunosComponent } from './listadealunos/listadealunos.component';
import { CadastrarusuarioComponent } from './cadastrarusuario/cadastrarusuario.component';
import { EditarUsuarioComponent } from './editar/editar-usuario/editar-usuario.component';
import { ApagarUsuarioComponent } from './apagar/apagar-usuario/apagar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PresencaComponent,
    ChamadaComponent,
    PlanodeaulaComponent,
    AulasComponent,
    CadastraraulaComponent,
    CadastrarplanoaulaComponent,
    ListadealunosComponent,
    CadastrarusuarioComponent,
    EditarUsuarioComponent,
    ApagarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
