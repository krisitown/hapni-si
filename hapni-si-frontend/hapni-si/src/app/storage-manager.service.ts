import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {
  public event: Subject<string> = new Subject<string>();

  constructor() { }

  setToken(token:string){
    localStorage.setItem('userToken', token);
    this.event.next(token);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
