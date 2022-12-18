import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  public message: string = "Vous êtes déconnecté [admin, admin]";
  public username!: string;
  public password!: string;

  constructor(private fb: FormBuilder, public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({ //Crée une instance de FormGroup
      username : [null, Validators.required],
      password : [null, Validators.required],
    });
  }

  setMessage() : void {
    if(this.auth.isLoggedIn){
      this.message = "Vous êtes connecté";
    }else{
      this.message = "Erreur de connexion";
    }
  }

  login(): void {
    this.message = 'Tentative de connexion en cours ...';
    this.auth.login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn) {
          this.router.navigate(['voitures']);
        }else{
          this.password = '';
          this.router.navigate(['login']);
        }
      });
  }

  logout() {
    this.auth.logout();
    this.message = "Vous êtes déconnecté";
  }


}
