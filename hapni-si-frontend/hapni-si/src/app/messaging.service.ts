import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  event:Subject<{status: string, message: string}> = new Subject();
  constructor() { }

  sendMessage(message: { status: string, message: string}){
    this.event.next(message);
  }
}
