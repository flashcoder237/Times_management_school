import { Configuration } from './../types/configucration';

import { HttpClient } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  CONF_URL = environment.api + "/configurations/"

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Configuration[]>(this.CONF_URL)
  }

  add(conf: Configuration) {
    return this.http.post<Configuration>(this.CONF_URL, conf)
  }

  update(id: number, conf: Configuration) {
    return this.http.patch<Configuration>(this.CONF_URL + id, conf)
  }

  delete(id: number) {
    return this.http.delete(this.CONF_URL + id)
  }

  getById(id: number) {
    return this.http.get<Configuration>(this.CONF_URL + id)
  }

}
