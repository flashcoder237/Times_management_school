import { Component, Input, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Day } from './../../types/day';
import { Period } from './../../types/period'
import { DayService } from '../../services/day.service';
import { PeriodeService } from '../../services/periode.service';
import * as moment from 'moment';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit{
  periods: Array <Period> = []
  @Input() date?: Date
  @Input() begin_at?: number
  @Input() end_at? : number
  @Input() week: number = 0;
  constructor(public dayService: DayService, public PeriodeService : PeriodeService) {

    /* date = dayService.getById(this.week)._subscribe; */
  }

  public getDay(day?: Date): String{
    return moment(day).format('dddd');
  }


  ngOnInit(): void {
     this.PeriodeService.getPeriodById(this.week).subscribe(
      data => {
        this.periods  = data;
        console.log(data)
      }
     )
  }

}
