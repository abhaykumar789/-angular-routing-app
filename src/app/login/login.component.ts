import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username:string="";
   password:string="";
   msg:string="";
   flag:boolean=false;
   @ViewChild('myform') public myformref:NgForm

  constructor(private router:Router) { 
    
  }

  ngOnInit() {
    
  }
   
  loginApp(ref){
    alert('working....')
    console.log(this.username);
    console.log(this.password);
    if(ref.value.username=="admin1" && ref.value.password=="admin")
    {
         this.router.navigateByUrl('dashboard');
    }else{
      this.msg = "Invalid Username And Password";
      this.flag=true;
    }
    //console.log(ref.value.username);
    //console.log(ref.value.password);

  }
}
