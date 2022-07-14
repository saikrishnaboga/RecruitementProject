import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OrderPipe } from 'ngx-order-pipe';
// import { userInterface } from '../userList';
import { ApiService } from 'src/app/apis.service';
import { Users } from 'src/app/users';
import Swal from 'sweetalert2';
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
  term: any;
  // order: String = "";
  isDescOrder: boolean = true;
  // reverse: any;
  order: String = "";
  reverse: boolean =true;
  caseInsensitive: boolean = false;
  display!: 'none';


  usersById: any = new Users();
  candidateId: any;
  // users = new Users();
  // candidateId:any

  // users: userInterface[] = [];
  users :any =[];
  // userData = {};
  // candidateId: any;
  // withDrawnUsers: any = new Users();

  tab : any = 'tab3';
  tab1 : any;
  tab2 : any;
  tab3 : any;
  tab4: any;
  tab5: any;
  tab6: any;
  tab7: any;

    onClick(check: any){
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else if(check==3){
          this.tab = 'tab3';
        }else if(check==4){
          this.tab = 'tab4';
        }else if(check==5){
          this.tab = 'tab5';
        }else if(check==6){
          this.tab='tab6';
        }else if(check==7){
          this.tab='tab7'
        }
    }
    // sortedCollection: any[];

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private orderPipe: OrderPipe
  ) {

    // this.sortedCollection = orderPipe.transform(this.users, 'info.name');
  }

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
    this.route.queryParams.subscribe((queryParams: any) => {
      this.editCustomerById(queryParams.candidateId);
      this.candidateId = queryParams.candidateId;
    });
  }

  editCustomerById(candidateId: any) {
    console.log(candidateId);
    this.service.fetchCustomersById(candidateId).subscribe((data) => {
      this.usersById = data;
      console.log('data added ', data);
    });
  }

  onLogOut(){
    console.log("Clicked logout Button");
    // localStorage.removeItem('isLogin');
    localStorage.clear();
    this.router.navigate(['home']);
  }

  getData() {
    this.service.getDetailsByStatus('New Candidates').subscribe((data) => {
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
    this.router.navigate([], {
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
    this.service.getDetailsByStatus('New Candidates').subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
  getFirstLevel() {
    this.service.getDetailsByStatus('Technical Round').subscribe((data) => {
      this.users = data;
      // this.users.push(data);
    });
  }
  getSecondLevel() {
    this.service.getDetailsByStatus('Hr Round').subscribe((data) => {
      this.users = data;
      // this.users.push(data);
      console.log(data);
    });
  }
  offerLetter() {
    this.service.getDetailsByStatus('Selected Candidates').subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
  Withdraw() {
    this.service.getDetailsByStatus('withDrawn').subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }


  close(){
    console.log("close modal")
    this.display = 'none';
  }

  updateCustomerById(candidateId: any) {
    console.log(candidateId);
    this.service
      .updateCandidateById(this.usersById, this.candidateId)
      .subscribe((data) => {
        this.usersById = data;
        console.log('candidate added', data);
        this.close()
        // Swal.fire("success","Updated Status Successfully","success")
        Swal.fire('Successs',"Updated Successfully","success").then(
          (value) => {
            if(value){
              window.location.reload();
            }
          })
        //  this.getData();
        // this.getResponse();

        // this.router.navigate(['recruiter']);
      },(err) => {
        Swal.fire(
          'Error',
          'something went wrong please try after some time',
          'error'
        );
      })
  }

  gotolist() {
    console.log('go back');
    this.router.navigate(['recruiter']);
    // Swal.fire('Back to Main Page');
  }


setOrder(value: String){
  this.isDescOrder = !this.isDescOrder;
  if(this.order === value){
    this.reverse = !this.reverse;
  }
  this.order = value;
}


}
