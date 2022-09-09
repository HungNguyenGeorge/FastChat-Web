import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, Observable, of, Subject } from 'rxjs';


interface Event {
  id?: number,
  title?: string,
  url?: string,
  start?: string,
  end?: string
}

@Injectable()
export class EventService {
  public eventsChange: any = new Subject();
  events: any;

  constructor(private http: HttpClient) {
    this.getEvents().then(res => {
      console.log("🚀 ~ file: event.service.ts ~ line 11 ~ EventService ~ this.getEvents ~ res", res)
      this.eventsChange.next(res);
      this.events = res;
    })
  }

  getEvents() {
    return this.http.get<any>('assets/files/scheduleevents.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }
  addEvent(event: any) {
    event.id = this.events[0].id++
    this.events = [...this.events, event];
    this.eventsChange.next(this.events);
  }
}
