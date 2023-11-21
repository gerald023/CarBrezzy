import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent  implements OnInit{
  constructor(){}
  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  submitForm(){
    
  }
}
