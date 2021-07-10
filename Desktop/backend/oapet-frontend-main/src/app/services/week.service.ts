import { Day } from './../types/day';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Week } from './../types/week';

@Injectable({
  providedIn: 'root'
})
export class WeekService {
CONF_URL = environment.api + "/weeks/"

  constructor(private http: HttpClient) { }
  getAllWeeks(): Observable<Array<Week>>{
    return this.http.get<Array<Week>>(this.CONF_URL)
  }

  addWeek(conf: Week): Observable<Week>{
    return this.http.post<Week>(this.CONF_URL, conf);
  }

  updateWeek(id: number, conf: Week): Observable<Week> {
  return this.http.patch<Week>(this.CONF_URL + id, conf)
  }

  deleteWeek(id: number): Observable<Week>{
    return this.http.delete<Week>(this.CONF_URL + id)
  }

  getWeekById(id: number): Observable<Week>{
    return this.http.get<Week>(this.CONF_URL + id)
  }

  getDaysById(id: number): Observable<Array<Day>>{
    return this.http.get<Array<Day>>( environment.api + "/days/weeks/" + id + "/")
  }

}
