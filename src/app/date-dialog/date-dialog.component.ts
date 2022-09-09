import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-date-dialog',
  templateUrl: './date-dialog.component.html',
  styleUrls: ['./date-dialog.component.scss']
})
export class DateDialogComponent implements OnInit, OnChanges {

  @Input() isDisplay: Boolean = false;
  @Input() dateData: any;

  @Output() isDisplayChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showDialog(data?: any) {

  }
  onHide(data?: any) {
    this.isDisplay = false;
    this.isDisplayChange.emit(false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("🚀 ~ file: date-dialog.component.ts ~ line 29 ~ DateDialogComponent ~ ngOnChanges ~ changes", changes)

  }

}
