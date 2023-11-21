import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormModule } from '../contact-form/contact-form.module';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    ContactFormModule,
    ContactFormComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
