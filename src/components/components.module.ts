import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PasswordStrengthBar } from './password-strength-bar/password-strength-bar';
@NgModule({
	declarations: [PasswordStrengthBar],
	imports: [
	  IonicModule
	],
	exports: [PasswordStrengthBar]
})
export class ComponentsModule {}
