import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  post:any;
  constructor(private http: HttpClient, private route : ActivatedRoute) {
    this.post = {};
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.http.get("http://localhost:8080/posts/get/" + id, {headers: {"Content-Type": "application/json"}}).subscribe(
      data => {
          this.post = data;
      },
      error => {

      }
    )
  }

}
