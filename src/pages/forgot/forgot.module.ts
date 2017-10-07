import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPage } from './forgot';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ForgotPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPage),
    ComponentsModule
  ],
})
export class ForgotPageModule {}
