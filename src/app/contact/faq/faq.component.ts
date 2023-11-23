import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  @Input() data:any;


  isFaqOpen: boolean = false;
  toggleFaq(){
    this.isFaqOpen = !this.isFaqOpen;
  }
  
  constructor(){}

  angleUp = faAngleUp;
  angleDown = faAngleDown;

}
