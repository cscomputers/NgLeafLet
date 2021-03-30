import { Component, ElementRef, Input, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import 'fullcalendar';
import * as $ from 'jquery';


@Component({
  selector: 'lk-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: [
    './schedule-calendar.component.scss'
  ]
})
export class ScheduleCalendarComponent implements OnChanges, OnDestroy, AfterViewInit {

  @Input() options: any;
  @Input() eventsList: any;

  private nativeElement: any;
  private jqueryElement: JQuery;
  private calendar: any;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.jqueryElement = $(this.nativeElement);
  }

  ngOnDestroy() {
    this.calendar = null;
    this.nativeElement.remove();
  }

  ngOnChanges() {
    this.buildCalendar();
  }

  ngAfterViewInit() {
    this.buildCalendar();

  }

  private buildCalendar() {
    this.jqueryElement.find('.schedule-calendar-container').fullCalendar(this.options);
  }

  public setCalendar(event, options?:any, flag?:boolean) {
    this.jqueryElement.find('.schedule-calendar-container').fullCalendar(event, options, flag);
  }

  public setDraggable() {
    this.jqueryElement.find('.draggable').each(function(){
      $(this)['draggable']({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
    });
  }

  public tojson(obj): string {
    return JSON.stringify({
      	title: obj.title,
      	stick: obj.stick,
        duration: obj.duration,
        overlap: obj.overlap,
        durationEditable: obj.durationEditable
    });
  }

}
