import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Day } from './../types/day';

@Injectable({
  providedIn: 'root'
})
export class DayService {

    CONF_URL = environment.api + "/days/"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Day[]>(this.CONF_URL)
  }

  add(conf: Day) {
    return this.http.post<Day>(this.CONF_URL, conf)
  }

  update(id: number, conf: Day) {
    return this.http.patch<Day>(this.CONF_URL + id, conf)
  }

  delete(id: number) {
    return this.http.delete(this.CONF_URL + id)
  }

  getById(id: number) {
    return this.http.get<Day>(this.CONF_URL + id)
  }
}
