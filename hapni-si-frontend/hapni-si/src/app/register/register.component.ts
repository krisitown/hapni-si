import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagingService } from '../messaging.service';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;
  constructor(private http: HttpClient, private router: Router, private messagingService : MessagingService, private storageManager:StorageManagerService) { 
    this.user = {};
  }

  ngOnInit() {
  }

  register(){
    this.http.post("http://localhost:8080/users/new", this.user, { headers: {"Content-Type": "application/json"}, responseType: "text"}).subscribe( 
      data => {
        this.messagingService.sendMessage({status: "success", message: "Успешно създадохте вашия профил!"});
        this.storageManager.setToken(data);
        this.router.navigate(['/']);
      },
      err => {
        this.messagingService.sendMessage({status: "danger", message: "Имаше грешка при създаването на вашия профил! Моля попълнете всички полета правилно и опитайте пак!"});
      }
    );
  }

}
