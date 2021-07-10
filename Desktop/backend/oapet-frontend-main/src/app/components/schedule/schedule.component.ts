import { Day } from './../../types/day';
import { Week } from './../../types/week';
import { Component, Input, OnInit } from '@angular/core';
import { WeekService } from './../../services/week.service'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  id = 1
  days : Array<Day> = []
  week: Week = {
     id: 1,
   first_day : new Date(''),
    last_day : new Date(''),
    is_ok : false,
    configurations : 1
  }
  constructor(public WeekService: WeekService) { }

  ngOnInit(): void {
    /* this.WeekService.getWeekById(1).subscribe(
      data => {
        this.week = data;
        console.log(data)
      }
    ) */

      this.WeekService.getDaysById(this.id).subscribe(
        data => {
          this.days = data;
          console.log(data)
        }
      )
  }
  }


