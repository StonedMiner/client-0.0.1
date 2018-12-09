import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
      .then(res => {
        console.log('Registriert');
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('Registrieren fehlgeschlagen');
      });
  }

}
