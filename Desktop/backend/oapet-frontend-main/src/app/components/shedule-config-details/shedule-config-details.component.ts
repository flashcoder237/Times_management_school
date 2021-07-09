import { ConfigurationService } from './../../services/configuration.service';
import { Configuration } from './../../types/configucration';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import inits from 'src/app/services/inits';

@Component({
  selector: 'app-shedule-config-details',
  templateUrl: './shedule-config-details.component.html',
  styleUrls: ['./shedule-config-details.component.css']
})
export class SheduleConfigDetailsComponent implements OnInit {

  id = 0

  configuration: Configuration = inits.iniConf()

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private configurationService: ConfigurationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params.id)
    this.configurationService.getById(this.id)
      .subscribe(response => this.configuration = response, err => console.log(err))
  }


  saveConfiguration(conf: Configuration): void {

    this.configuration = conf
    alert(this.configuration.period_duration)
    this.configurationService.update(this.id, this.configuration)
      .subscribe(response => console.log(response), err => console.log(err))
  }

  deleteConfiguration() {
    this.configurationService.delete(this.id)
      .subscribe(response => this.router.navigate(['configurations']), err => console.log(err))
  }

}
