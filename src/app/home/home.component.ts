import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
tipoUserario = environment.tipoUserario
nome = environment.nome
foto = environment.foto

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {



    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    console.log(this.tipoUserario)
    console.log(this.nome)
    console.log(this.foto)
  }



}
