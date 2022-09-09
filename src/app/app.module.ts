import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';

import { EventService } from './services/event.service';
import { SettingCalendarComponent } from './setting-calendar/setting-calendar.component';
import { DateDialogComponent } from './date-dialog/date-dialog.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    FullCalendarComponent,
    SettingCalendarComponent,
    DateDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
