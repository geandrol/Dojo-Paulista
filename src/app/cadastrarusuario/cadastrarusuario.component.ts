import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrarusuario',
  templateUrl: './cadastrarusuario.component.html',
  styleUrls: ['./cadastrarusuario.component.css']
})
export class CadastrarusuarioComponent implements OnInit {

  user: User = new User
  tipoUsuario: string
  tipoPcd: boolean
  tipoFaixas: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  tipoFaixa(event: any){
    this.tipoFaixas = event.target.value
  }

  Pcd(event: any){
    this.tipoPcd = event.target.value
  }

  cadastrar(){
    this.user.tipoUserario = this.tipoUsuario
    this.user.pcd = this.tipoPcd
    this.user.tipoFaixa = this.tipoFaixas
       this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }

}
