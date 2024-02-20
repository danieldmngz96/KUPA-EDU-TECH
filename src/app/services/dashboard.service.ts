import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(private http: HttpClient) { }


getClass() {
  return this.http
    .get('http://localhost:5000/kuepa-20b18/us-central1/app/clases')
}

getClassId(id:any) {
  return this.http
    .get(`http://localhost:5000/kuepa-20b18/us-central1/app/clases/${id}`)

}
}
