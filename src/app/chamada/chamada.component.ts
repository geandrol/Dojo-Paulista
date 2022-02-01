import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.css']
})
export class ChamadaComponent implements OnInit {

  user: User = new User()
  listaUser: User[] = []
  img: string
  // 'https://img.freepik.com/vetores-gratis/icone-de-perfil-de-avatar_188544-4755.jpg?size=338&ext=jpg'

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

}
