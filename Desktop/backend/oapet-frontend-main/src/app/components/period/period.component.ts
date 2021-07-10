import { Component, Input, OnInit } from '@angular/core';
import { Period } from './../../types/period'

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit{

  @Input() periode: Period = {
    id : 0,
    hour_begin: 0,
    hour_end: 0,
    is_pause: false,
    is_occupied: false,
    was_occupied: false,
    day: new Date(''),
  }
  constructor() { }

  ngOnInit(): void {
  }

}
