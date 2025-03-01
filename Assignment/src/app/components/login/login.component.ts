import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    // Prevent form refresh
    event?.preventDefault();

    // Display values (You can replace this with actual authentication logic)
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    alert('Login successful!');

    // ✅ Clear input fields after login
    this.username = '';
    this.password = '';
  }
}
