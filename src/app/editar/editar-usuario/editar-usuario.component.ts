import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  user: User = new User()
  tipoUsuario: string
  tipoPcd: boolean
  idUser: number
  tipoFaixas: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
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

  atualizar(){
    this.user.tipoUserario = this.tipoUsuario
    this.user.pcd = this.tipoPcd
    this.user.tipoFaixa = this.tipoFaixas
       this.authService.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp
        alert('Usuário atualizado com sucesso!')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0

        this.router.navigate(['/home'])
      })
    }

    findByIdUser(id: number) {
      this.authService.getByIdUser(id).subscribe((resp: User) => {
        this.user = resp
      })
    }

}
