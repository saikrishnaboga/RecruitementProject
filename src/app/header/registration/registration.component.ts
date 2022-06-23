import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { ApiService } from 'src/app/apis.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public registerForm: any;
  constructor(
    private service: ApiService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  public status: String = "AppliedCandidates"

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required , Validators.email]),
      mobileNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      qualification: new FormControl('', [Validators.required]),
      yearsOfExperience: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      expectedCtc: new FormControl('', [Validators.required]),
      skillSet: new FormControl('', [Validators.required]),
    });

    console.log(this.registerForm.value);
  }

  // getFormValidationErrors() {
  //   Object.keys(this.registerForm.controls).forEach(key => {
  //     const controlErrors: any = this.registerForm.get(key).errors;
  //     if (controlErrors != null) {
  //       Object.keys(controlErrors).forEach(keyError => {
  //        console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
  //       });
  //     }
  //   });
  // }

  register() {
    console.log(this.registerForm.value);

    let value = this.registerForm.value;
    value.status = "AppliedCandidates"

    this.service.registerDetails(value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res));
        if (res) {
          Swal.fire('Success', 'Registered Succefully', 'success');
          this.registerForm.reset();
          this.router.navigate(['home'])
          // this.registerForm.get('yearsOfExeperience').setValue('');
        } else {
          Swal.fire('Error', 'Invalid User Details', 'error');
        }
      },
      (err) => {
        Swal.fire(
          'Error',
          'Something Went Wrong PLease try after some time',
          'error'
        );
      }
    );
  }
}
