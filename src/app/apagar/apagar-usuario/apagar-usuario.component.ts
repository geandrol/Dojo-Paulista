import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-apagar-usuario',
  templateUrl: './apagar-usuario.component.html',
  styleUrls: ['./apagar-usuario.component.css']
})
export class ApagarUsuarioComponent implements OnInit {

user: User = new User()
idUser: number

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(environment.token == ''){
        this.router.navigate(['/login'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)

  }

  findByIdUser(id: number){
        this.authService.getByIdUser(id).subscribe((resp: User)=>{
          this.user = resp
        })
  }

}
