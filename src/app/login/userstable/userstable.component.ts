import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { userInterface } from '../userList';
import { ApiService } from 'src/app/apis.service';
import { Users } from 'src/app/users';
// import { AdduserComponent } from '../adduser/adduser.component';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css'],
})
export class UserstableComponent implements OnInit {
  name: any;
  no: any;
  email: any;
  p: number = 1;

  // users = new Users();
  // candidateId:any

  // users: userInterface[] = [];
  users :any =[];
  // userData = {};
  candidateId: any;
  withDrawnUsers: any = new Users();

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      // this.users = JSON.parse(params.users);
    });
    this.getData();

    // this.rs.getUsers().subscribe(data => this.users = data);
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params);
    //   this.users=JSON.parse(params['users'])
    // })
    console.log(this.users);
  }
  getData() {
    this.service.getDetailsByStatus('AppliedCandidates').subscribe((data) => {
      this.users = data;
      // console.log(data);
      console.log(this.users)
    });
  }

  // getData() {
  //   throw new Error('Method not implemented.');
  // }

  Search() {
    // if (this.name == '' || this.no == '') {
    //   this.ngOnInit();
    // } else {
    //   this.users = this.users.filter((res: any) => {
    //     return res.name
    //       .toLocaleUpperCase()
    //       .match(this.name.toLocaleUpperCase());
    //   });
    // }
  }

  edit(candidateId: any) {
    console.log('candidate id' + candidateId, DataView);
    this.router.navigate(['/edit-details'], {
      queryParams: { candidateId: candidateId },
    });
  }

  // withDraw(candidateId:any){
  //   this.service.fetchCustomersById(candidateId).subscribe((data) => {
  //     this.withDrawnUsers = data;
  //     this.withDrawnUsers.status = "withDrwan";
  //     console.log('data added ', data);
  //   });


  //       this.service.withDrawnCandidateById(this.withDrawnUsers, this.candidateId)
  //       .subscribe((data) => {
  //         console.log(this.withDrawnUsers)
  //         this.withDrawnUsers = data;
  //         console.log('candidate added', data);
  //       });
  // }


  getResponse() {
    this.service.getDetailsByStatus('AppliedCandidates').subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
  getFirstLevel() {
    this.service.getDetailsByStatus('firstLevel').subscribe((data) => {
      this.users = data;
      // this.users.push(data);
    });
  }
  getSecondLevel() {
    this.service.getDetailsByStatus('secondLevel').subscribe((data) => {
      this.users = data;
      // this.users.push(data);

      console.log(data);
    });
  }
  offerLetter() {
    this.service.getDetailsByStatus('offerLetter').subscribe((data) => {
      this.users = data;


      console.log(data);
    });
  }
  Withdraw() {
    this.service.getDetailsByStatus('withDraw').subscribe((data) => {
      this.users = data;


      console.log(data);
    });
  }
}
