import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform:FormGroup;
  constructor(private router:Router) {
    this.myform=new FormGroup({
      uname:new FormControl("",[Validators.required,Validators.minLength(5)]),
      pwd:new  FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]*')])
    });
    console.log(this.myform)
   }

  ngOnInit() {
  }

  registerEmployee(){
    console.log('successfully');
    console.log(this.myform.value.uname);
    this.router.navigateByUrl('home');
  }

}
