import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Period } from './../types/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodeService {
  CONF_URL = environment.api + "/periods/"

  constructor(private http: HttpClient) { }
  getAllPeriods(): Observable<Array<Period>>{
    return this.http.get<Array<Period>>(this.CONF_URL)
  }

  addPeriod(conf: Period): Observable<Period>{
    return this.http.post<Period>(this.CONF_URL, conf);
  }

  updatePeriod(id: number, conf: Period): Observable<Period> {
  return this.http.patch<Period>(this.CONF_URL + id, conf)
  }

  deletePeriod(id: number): Observable<Period>{
    return this.http.delete<Period>(this.CONF_URL + id)
  }

  getPeriodById(id: number): Observable<Array<Period>>{
    return this.http.get<Array<Period>>(this.CONF_URL + id)
  }
}
