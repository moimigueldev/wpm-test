import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideUpComponent } from './modals/slide-up/slide-up.component';



@NgModule({
  declarations: [SlideUpComponent],
  imports: [
    CommonModule
  ],
  exports: [SlideUpComponent]
})
export class UtilsModule { }
