import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
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


}
