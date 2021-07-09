import { Configuration } from './../../types/configucration';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-configurations',
  templateUrl: './list-configurations.component.html',
  styleUrls: ['./list-configurations.component.css']
})
export class ListConfigurationsComponent implements OnInit {

  @Input()
  configurations: Configuration[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
