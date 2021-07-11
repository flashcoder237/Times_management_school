import { Day } from './../../types/day';
import { Week } from './../../types/week';
import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { WeekService } from './../../services/week.service';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import * as $ from 'jquery'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnInit {

  $var = document.getElementById("pdfTable")?.innerHTML

 /*  title = 'htmltopdf';
  @ViewChild('pdfTable') pdfTable! : ElementRef; */
  /*   @ViewChild('nameInput', { static: false, read: ElementRef }) elref : ElementRef; */


  id = 1
  days : Array<Day> = []
  week: Week = {
     id: 1,
   first_day : new Date(''),
    last_day : new Date(''),
    is_ok : false,
    configurations : 1
  }

  public downloadAsPDF() {
    const doc = new jsPDF();
    console.log(this.$var)
    if(this.$var != null){
    var html = htmlToPdfmake((this.$var));
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
    }

  }
  constructor(public WeekService: WeekService) { }

  ngOnInit(): void {


      this.WeekService.getDaysById(this.id).subscribe(
        data => {
          this.days = data;
          console.log(data)
        }
      )
    this.days = this.days.sort(function compare(a, b) {
      if (a.date && b.date) {
        if (a.date < b.date)
          return 1
        if (a.date > b.date)
          return -1
      }
      return 0
    }
    )
  }
  }


