import { Component } from '@angular/core';
import { Router } from 'express';
import { CommonModule } from '@angular/common';
import {  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
 
  toggleItems(){
    console.log('clicked me');
    
  }
}
