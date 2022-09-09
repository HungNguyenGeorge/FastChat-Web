import { Component, OnInit } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class FullCalendarComponent implements OnInit {

  events!: any[];

  options: any;


  header: any;

  public isShowingDialog: Boolean = false;

  currDateData: any;

  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.eventService.eventsChange.subscribe(
      (events: any) => {
        this.events = events;
        this.options = { ...this.options, ...{ events: this.events } };
      }
    )
    this.options = {
      initialDate: '2019-01-01',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      // select: (event: any) => { this.showDateDialog(event.startStr) },
      eventClick: (info: any) => this.showDateDialog(info.event.startStr)
    };
  }

  showDateDialog(date: string) {
    let date2Display = this.events.find(item => item.start === date);
    this.currDateData = date2Display;
    this.isShowingDialog = true;
  }

}
