import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../_models/register';
import { RegisterService } from '../_services/register.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  rigister: Register | any;
  errorMessage:any;
  constructor(public registService: RegisterService, public router:Router) { }

  onSubmit(rig:any) {
    // this.submitted=true;
    console.log(rig);
    return this.registService.regist(rig).subscribe(
      a => {
        this.router.navigate([
          '/login'
        ])
      },
      error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    )
  }

  ngOnInit(): void {
  }

}
