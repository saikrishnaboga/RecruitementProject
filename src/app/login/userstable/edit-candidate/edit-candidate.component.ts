import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/apis.service';
import Swal from 'sweetalert2';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css'],
})
export class EditCandidateComponent implements OnInit {
  candidateId: any;
  users: any = new Users();

  constructor(
    private router: Router,
    private service: ApiService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((queryParams: any) => {
      this.editCustomerById(queryParams.candidateId);
      this.candidateId = queryParams.candidateId;
    });
  }

  editCustomerById(candidateId: any) {
    console.log(candidateId);
    this.service.fetchCustomersById(candidateId).subscribe((data) => {
      this.users = data;
      console.log('data added ', data);
    });
  }

  updateCustomerById(candidateId: any) {
    console.log(candidateId);
    this.service
      .updateCandidateById(this.users, this.candidateId)
      .subscribe((data) => {
        this.users = data;
        console.log('candidate added', data);
      });
  }

  gotolist() {
    console.log('go back');
    this.router.navigate(['recruiter']);
    // Swal.fire('Back to Main Page');
  }
}
