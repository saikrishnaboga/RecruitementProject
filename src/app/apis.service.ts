import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Body } from 'node-fetch';
import { Observable } from 'rxjs';
// import { RecruiterComponent } from './recruiter/recruiter.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public method() {}

  public statusOfCandidate: String = '';

  public url = 'http://localhost:8080';

  loginDetails(Body: JSON): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, Body);
  }

  getDetails(): Observable<any> {
    return this.http.get<any>(`${this.url}/getcandidates`);
  }

  registerDetails(Body: JSON): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, Body);
  }

  getDetailsByStatus(status: any): Observable<any> {
    // console.log(this.recruiter.status);
    // this.getValue(status);

    // console.log(`${this.url}/freshers/status/Responded`);
    // console.log(`${this.url}/freshers/status/${this.statusOfCandidate}`);
    return this.http.get<any>(`${this.url}/freshers/status/${status}`);
  }
  // getValue(status: any) {
  //   console.log(status);
  //   console.log(this.statusOfCandidate);
  //   this.statusOfCandidate = status;
  //   console.log(`${this.url}/freshers/status/${this.statusOfCandidate}`);
  // }

  fetchCustomersById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/getCadidate/${id}`);
  }

  updateCandidateById(Body: any, id: any): Observable<any> {
    return this.http.put<any>(`${this.url}/freshers/update-status/` + id, Body);
  }

  // withDrawnCandidateById(Body: any, id: any): Observable<any> {
  //   return this.http.put<any>(`${this.url}/freshers/update-status/` + id, Body);
  // }

}
