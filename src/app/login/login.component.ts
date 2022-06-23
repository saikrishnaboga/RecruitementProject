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
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    this.myForm();
  }

  myForm(){
    this.loginForm = this.formBuilder.group(
      {
      userName: ['', Validators.required],
      password : ['', Validators.required]
    }
    )

    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })

  }

  url: String = "http://10.12.1.123:8080/"

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
      userName: ['', Validators.required],
      password : ['', Validators.required]
    }
    )
  }

  login(){
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    console.log(this.loginForm.value);

    if (userName != '' && password != '') {
      this.service.loginDetails(this.loginForm.value).subscribe((res: any) => {
        localStorage.setItem('user', JSON.stringify(res));
        if (res) {
          this.router.navigate(['recruiter']);
        } else {
          Swal.fire('Invalid User Details');
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


