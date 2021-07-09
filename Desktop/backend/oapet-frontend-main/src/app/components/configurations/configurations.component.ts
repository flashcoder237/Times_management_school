import { Configuration } from './../../types/configucration';
import { Router } from '@angular/router';
import { ConfigurationService } from './../../services/configuration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  allConfigurations: Configuration[] = []

  errors: Object = {}
  constructor(private configurationService: ConfigurationService, private router: Router) { }

  ngOnInit(): void {
    this.configurationService.getAll().subscribe(configs => this.allConfigurations = configs)
  }

  saveConfiguration(conf: Configuration) {
    this.configurationService.add(conf)
      .subscribe(conf => alert(conf.id), err => this.errors = err.error)
  }
}
