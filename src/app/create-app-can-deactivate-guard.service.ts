import { CanDeactivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { logging } from 'protractor';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateAddGuardService implements CanDeactivate<LoginComponent>{

    canDeactivate(component:LoginComponent):boolean{
        if(component.myformref.dirty)
           return confirm('Are you sure to redirect to the  other  component or not?')
        
        }
}