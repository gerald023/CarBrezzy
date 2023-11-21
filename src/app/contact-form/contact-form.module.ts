import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactFormComponent

  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
