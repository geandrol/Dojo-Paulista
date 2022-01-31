import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-listadealunos',
  templateUrl: './listadealunos.component.html',
  styleUrls: ['./listadealunos.component.css']
})
export class ListadealunosComponent implements OnInit {

  user: User = new User()
  listaUser: User[]

  constructor(

   public authService: AuthService
  ) { }

  ngOnInit() {

    this.findAllUser()
  }

  findAllUser(){
    this.authService.getAllUser().subscribe((resp: User[]) => {
      this.listaUser = resp
   console.log(resp)
    })
  }

}
