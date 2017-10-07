import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';

/*
  Generated class for the PasswordMatchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PasswordMatchProvider {

  constructor() {
    console.log('Hello PasswordMatchProvider Provider');
  }
  //Password Matching Validation
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
  
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
}
