import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/apis.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css'],
})
export class RecruiterComponent implements OnInit {
  constructor(private service: ApiService, private route: Router) {}

  public status: String = '';

  ngOnInit(): void {
    // this.get()
  }

  // getResponse() {
  //   // this.service.getDetails().subscribe((data) => {
  //   //   this.route.navigate(['/userstable']);
  //   // });
  //   this.status = 'Responded';
  //   this.service.getValue(this.status);
  // }
  // getFirstLevel() {
  //   this.status = 'firstLevel';
  //   this.service.getValue(this.status);
  // }
}
