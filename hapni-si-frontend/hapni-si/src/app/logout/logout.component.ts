import { Component, OnInit } from '@angular/core';
import { StorageManagerService } from '../storage-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private storageManager: StorageManagerService, private router : Router) { 
    this.storageManager.setToken('');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
