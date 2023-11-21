import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './home.css',
    './home2.css',
    './home3.css',
    './home4.css',
    './home5.css',
    './home6.css'
  ]
})
export class HomeComponent {
  
}
