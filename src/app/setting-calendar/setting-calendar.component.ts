import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-setting-calendar',
  templateUrl: './setting-calendar.component.html',
  styleUrls: ['./setting-calendar.component.scss']
})
export class SettingCalendarComponent implements OnInit, OnChanges {

  @Input() dateData: any;

  profileForm = new FormGroup({
    // firstName: new FormControl(''),
    title: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
  });


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateData'] && changes['dateData']['currentValue']) {
      // this.profileForm.setValue(changes['dateData'] ||null)  ;
      this.setData(changes['dateData']['currentValue'])
      // this.profileForm.controls["title"].setValue(changes['dateData']['currentValue'] ? changes['dateData']['currentValue']['title'] || "" : "")
      // console.log("🚀 ~ file: setting-calendar.component.ts ~ line 31 ~ SettingCalendarComponent ~ ngOnChanges ~ this.profileForm.controls.title", this.profileForm.controls)
    }
  }

  setData(data: any) {
    console.log("🚀 ~ file: setting-calendar.component.ts ~ line 37 ~ SettingCalendarComponent ~ setData ~ data", data)
    let fields = Object.keys(this.profileForm.controls)

    fields.forEach(element => {
      this.profileForm.get(element)?.setValue(data[element] || '');
    });
  }

  onSubmit(event: Event): void {
    this.eventService.addEvent(this.profileForm.value)
  }


}
