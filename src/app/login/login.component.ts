import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbCarouselConfig]
})

export class LoginComponent implements OnInit  {
  title = 'ng-carousel-demo';
  fieldTextType: boolean = true;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
    console.log("password")
  }

  public loginForm !: FormGroup

  images = [
    {title: 'EPSoft', short: 'Integrated Process Management & Intelligent Automation',class: "image-carousel", src: "https://www.epsoftinc.com/wp-content/uploads/2022/03/MicrosoftTeams-image-242-scaled.jpg"},
    {title: 'RPA', short: "Let's Automate" ,class: "image-carousel", src: "https://www.nagarro.com/hubfs/shutterstock_1025409565%20(1)-new.jpg"},
    {title: 'BPMN', short: 'Design your own Process from Scratch',class: "image-carousel", src: "https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2021/05/iStock-1287248836-e1621605868669.jpg?av=a36b7d62765b763670cc008c374f192f"}
  ];

  constructor(private service: ApiService ,config: NgbCarouselConfig, private formBuilder : FormBuilder, private http: HttpClient, private router: Router )   {
    // constructor(config: NgbCarouselConfig,private router: Router, private formBuilder: FormBuilder )   {
    config.interval = 8000;
    config.keyboard = true;
    // config.pauseOnHover = true;
  }



  hide = true;

  ngOnInit(): void {

    let value: any = localStorage.getItem('isLogin');

    console.log(value);
    if(value != null){
      this.router.navigate(['recruiter'])
    }else {
      this.router.navigate(['login'])
    }

    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })


  }

  login(){
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    console.log(this.loginForm.value);

    if (userName != '' && password != '') {
      this.service.loginDetails(this.loginForm.value).subscribe((res: any) => {
        localStorage.setItem('user', JSON.stringify(res));
        if (res) {

          localStorage.setItem('isLogin', 'authorizedUser');
          this.router.navigate(['recruiter']);
        } else {
          Swal.fire("Error",'Invalid User Details',"error");
        }
      });
    } else if (userName == '' && password == '') {
      Swal.fire('username and password is required');
    } else if (userName == '') {
      Swal.fire('username is required');
    } else if (password == '') {
      Swal.fire('password is required');
    }
  }
}


