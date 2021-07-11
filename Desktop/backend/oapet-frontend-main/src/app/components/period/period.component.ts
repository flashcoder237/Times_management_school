import { PeriodeService } from './../../services/periode.service';
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


  getStyle(): String{
    if (this.periode.is_occupied)
      return 'occuper'
    if (!this.periode.is_occupied)
      return 'libre'
    if (this.periode.was_occupied)
      return 'attente'
    return 'bloquer'
  }

  change() {
    this.PeriodeService.updatePeriod(this.periode.id, this.periode).subscribe()
    if (this.periode.is_occupied)
      this.periode.is_occupied = false
     this.periode.is_occupied = true
  }

  constructor(public PeriodeService : PeriodeService){}
  ngOnInit(): void {
  }

}
