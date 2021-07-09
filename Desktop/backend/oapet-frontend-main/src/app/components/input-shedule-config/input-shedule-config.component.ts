import { Configuration } from './../../types/configucration';
import { ConfigurationService } from './../../services/configuration.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import inits from 'src/app/services/inits';

@Component({
  selector: 'app-input-shedule-config',
  templateUrl: './input-shedule-config.component.html',
  styleUrls: ['./input-shedule-config.component.css']
})
export class InputSheduleConfigComponent implements OnInit {

  @Output()
  public emitConfigurationEvent: EventEmitter<Configuration> = new EventEmitter

  @Input()
  config: Configuration = inits.iniConf()

  @Input()
  id = 0

  @Input()
  title = ""

  @Input()
  errors: any = { name: '' }
  constructor(private http: HttpClient, private configurationService: ConfigurationService) { }
  ngOnInit(): void {
    if (this.id > 0)
      this.configurationService.getById(this.id)
        .subscribe(response => {
          this.config = response
        })

  }

  emitEditedConfig() {
    this.emitConfigurationEvent.emit(this.config)

    console.log(this.errors)
  }
}
