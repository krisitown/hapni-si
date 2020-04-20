import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagingService } from '../messaging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  post: any;
  constructor(private http: HttpClient, private messegingService: MessagingService, private router : Router) { 
    this.post = {};
  }

  ngOnInit() {
  }

  create(){
    console.log(this.post);
    this.post['active'] = true;
    this.http.post("http://localhost:8080/posts/new", this.post, {headers: {"Content-Type": "application/json", "userToken": localStorage.getItem('userToken')}}).subscribe(
      data => {
        this.messegingService.sendMessage({status: "success", message: "Успешно създадохте обява!"});
        this.router.navigate(['/offers/' + data['id']]);
      },
      error => {
        this.messegingService.sendMessage({status: "danger", message: "Възникна проблем при създаването на вашата обява. Моля променете полетата и опитайте пак!"});
      }
    )
  }

}
