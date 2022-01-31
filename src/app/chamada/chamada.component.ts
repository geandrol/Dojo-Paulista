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
  listaUser: User[]
  img: string

  constructor(

   public authService: AuthService
  ) { }

  ngOnInit() {

    this.findAllUser()
  }

  findAllUser(){
    this.authService.getAllAluno ().subscribe((resp: User[]) => {
      this.listaUser = resp
   console.log(resp)
    })
  }

}
