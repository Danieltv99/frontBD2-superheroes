import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.loginError = true;
    }
  }
}
