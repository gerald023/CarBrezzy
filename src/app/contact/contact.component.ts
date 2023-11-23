import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormModule } from '../contact-form/contact-form.module';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FaqComponent } from './faq/faq.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    ContactFormModule,
    ContactFormComponent,
    FaqComponent,
    FontAwesomeModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css', 
    './rescontact.component.css',
     './rescon.css', './respon.css'
    ]
})

export class ContactComponent {
phone = faPhone;
mail = faEnvelope;
location = faLocationDot;

  data =[
    {
      title: "How can CarBrezzy help me find my next car?",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum recusandae hic nobis, maiores cupiditate minus harum aspernatur assumenda culpa explicabo nemo officia molestiae, vitae est laborum enim necessitatibus unde fugit."
    },
    {
      title: "Does CarBrezzy offer and discount?",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum recusandae hic nobis, maiores cupiditate minus harum aspernatur assumenda culpa explicabo nemo officia molestiae, vitae est laborum enim necessitatibus unde fugit."
    },
    {
      title: "Can I search cars by photos?",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum recusandae hic nobis, maiores cupiditate minus harum aspernatur assumenda culpa explicabo nemo officia molestiae, vitae est laborum enim necessitatibus unde fugit."
    },
    {
      title: "How do I reset my password?",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum recusandae hic nobis, maiores cupiditate minus harum aspernatur assumenda culpa explicabo nemo officia molestiae, vitae est laborum enim necessitatibus unde fugit."
    },
    {
      title: "How to adjust my search result?",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum recusandae hic nobis, maiores cupiditate minus harum aspernatur assumenda culpa explicabo nemo officia molestiae, vitae est laborum enim necessitatibus unde fugit."
    },
  ]
 isOpen: boolean = false;

 toggleOpen(){
  this.isOpen = !this.isOpen;
 }

}
