import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-listadealunos',
  templateUrl: './listadealunos.component.html',
  styleUrls: ['./listadealunos.component.css']
})
export class ListadealunosComponent implements OnInit {

  user: User = new User()
  listaUser: User[] = []
  ok = false
  id = environment.id

  constructor(

   public authService: AuthService
  ) { }

  ngOnInit() {

    this.findAllUser()
  }

  findAllUser(){
    this.authService.getAllAluno().subscribe((resp: User[]) => {
         resp.forEach(item => {
        if (!item.foto){
            item.foto = "https://img.freepik.com/vetores-gratis/icone-de-perfil-de-avatar_188544-4755.jpg?size=338&ext=jpg"
        }
        this.listaUser.push(item)

      });
    })
  }

  getFaixa(faixa: string): string {
    if(faixa == "PRETA")
        return "faixa-preta"

  }

}
