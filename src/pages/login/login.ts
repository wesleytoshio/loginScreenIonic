import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [
    trigger('buttonCircledAnimated', [
      state('normal', style({
        width: '80%',
        borderRadius:'5px',
        transform:'scale(1)'
      })),
      state('ball', style({
          width: '47px',
          borderRadius:'47px'
      })),
      state('expand', style({
        width: '47px',
        borderRadius:'50%',
        transform:'scale(30)'
    })),
      transition('normal => ball', animate('300ms ease-in')),
      transition('ball => normal', animate('100ms ease-in')),
      transition('ball => expand', animate('200ms ease-in'))
  ]),
  ]
})
export class LoginPage {
  private form : FormGroup;
  public data:any = {};
  public inputType:string= 'password';
  state: string = 'normal';
  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,) {
      this.form = formBuilder.group({
        nickname: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, Validators.minLength(5)]]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login() {
  this.state = (this.state === 'normal' ? 'ball' : 'normal');
  setTimeout(() => {
    this.state = 'expand';
  }, 1500);
  }
  goForgot(){
    this.navCtrl.push('ForgotPage');
  }
  showHidePass(){
    this.inputType = this.inputType == 'password' ? 'text': 'password';
  }

  onAnimationEnd(event){
    if(event.toState == 'expand'){
      this.navCtrl.setRoot('HomePage');
    }
  }
}
