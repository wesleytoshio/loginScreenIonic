import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';
import {PasswordMatchProvider} from '../../providers/password-match/password-match';
@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
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
export class ForgotPage {
  private form : FormGroup;
  public data:any = {};
  public passwordOptions:boolean = false;
  public inputType:string= 'password';
  public currentStage:string = 'email';
  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public password: PasswordMatchProvider) {
        this.form = formBuilder.group({
          email: ['', [Validators.required, Validators.minLength(3)]],
          code: ['',  Validators.required],
          pass: ['', [Validators.required, Validators.minLength(4)]],
          password: ['', [Validators.required, Validators.minLength(4)]]
        }, {validator: this.password.matchingPasswords('pass', 'password')});
  }

  state: string = 'normal';
  
  request = {
    email:()=>{
      this.state = 'ball';
      setTimeout(() => {
        this.currentStage = 'code';
        this.state = 'normal';
      }, 1500);
    },
    code:()=>{
      this.state = 'ball';
      setTimeout(() => {
        this.currentStage = 'password';
        this.state = 'normal';
      }, 1500);
    },
    password:()=>{
      this.state = (this.state === 'normal' ? 'ball' : 'normal');
      setTimeout(() => {
        this.state = 'expand';
      }, 1500);
    }
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
