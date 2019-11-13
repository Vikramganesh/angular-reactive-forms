import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myreactforms';
  signUpForm: FormGroup;
  firstname = '';
  lastname = '';
  password = '';

  constructor(private frmBuilder: FormBuilder) {
    this.signUpForm = frmBuilder.group({
      fname: new FormControl(),
      lname: new FormControl(),
      passwd: new FormControl()
    });

  }
  PostData(signUpForm) {
      // display all data
     // console.log(signUpForm.controls);
       // display all data
       console.log(signUpForm.controls.fname.value);

       this.firstname = signUpForm.controls.fname.value
  }
}
