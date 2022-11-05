import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  usuario:string;
  password:string;

  constructor(private router: Router) {}
  
  abrirLogin()
  {
    if(this.usuario == 'Admin' && this.password == "Admin")
    {
     this.router.navigate(['bienvenido']);
    } else {
      alert('No hay datos :(')
    }
  }
}
