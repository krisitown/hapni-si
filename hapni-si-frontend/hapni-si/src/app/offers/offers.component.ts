import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/posts/").subscribe(r => this.offers = r);
  }

}
