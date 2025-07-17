import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username!: string;
  password!: string;
  constructor(private userService: UserService,private router:Router) {}
  
  gotohome(){
    this.userService.getUser().subscribe(users => {
      const user = users.find((u => u.username === this.username && u.password === this.password))
      if(user){
        localStorage.setItem('role', user.role);
        localStorage.setItem('username', user.username);
        this.router.navigate(['products']);
      }
      else{
        alert('Invalid username or password');
        this.username = '';
        this.password = '';
      }
    })
  }
}
