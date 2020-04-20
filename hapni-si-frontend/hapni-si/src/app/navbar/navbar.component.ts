import { Component, OnInit } from '@angular/core';
import { StorageManagerService } from '../storage-manager.service';
import { CommonModule } from '@angular/common';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:string;
  loggedIn:boolean;
  messages = [];

  constructor(private storageManager:StorageManagerService, private messagingService : MessagingService) { 
    storageManager.event.subscribe(r => {
      this.token = r;
      if(r){
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
    messagingService.event.subscribe(r => {
      this.messages.push(r);
      setTimeout(() => {
        this.messages.filter(x => x !== r);
      }, 5000);
    })
  }

  ngOnInit() {
  }



}
