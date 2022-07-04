import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username:string="";
   password:string="";
   @ViewChild('myform') public myformref:NgForm

  constructor() { 
    
  }

  ngOnInit() {
    
  }
   
  loginApp(ref){
    alert('working....')
    console.log(this.username);
    console.log(this.password);
    console.log(ref.value.username);
    console.log(ref.value.password);
  }
}
