import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageManagerService } from '../storage-manager.service';
import { MessagingService } from '../messaging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(private http:HttpClient, private storageManager:StorageManagerService, 
    private messageService:MessagingService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.http.post("http://localhost:8080/users/login", { email: this.email, password: this.password}, { headers: {"Content-Type": "application/json"}, responseType: "text" } )
      .subscribe(
        data => { 
          console.log(data);
          this.storageManager.setToken(data.toString());
          this.messageService.sendMessage({status: "success", message: "Успешно влязохте в профила си!"})
          this.router.navigate(['/']); 
        },
        error => {
          console.log("error");
          this.messageService.sendMessage({status: "danger", message: "Грешен email/парола! Моля опитайте пак."});
        }
      );
  }
}
