import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: any;
  public error: string="";
  constructor( public routs: Router, public auth: AuthService) { }
  onSubmit(log:any) {
    console.log(log);

    // this.logservse.login(log).subscribe(
    //   a => {
    //     console.log(a);
    //     this.routs.navigate([
    //       '/home'
    //     ])
    //   },
    //   error => {
    //     this.errorMessage = error.message;
    //     console.error('There was an error!', error);
    //   }
    // )
    this.auth.login(log.username, log.password)
      .pipe(first())
      .subscribe(
        result =>
          this.routs.navigate(['/blog']),
        // console.log(result)
        err => this.error = 'Could not authenticate'
      );

  }

  ngOnInit(): void {
  }

}
