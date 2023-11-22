import { Component } from '@angular/core';
import { Router } from 'express';
import { CommonModule } from '@angular/common';
import {  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faHome, faUser,faWarehouse, faHeadset,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrls: [
    './nav.component.css',
    './menu.css'
  ]
})
export class NavComponent {

  faBar = faBars;
  fahome = faHome;
  fauser = faUser;
  fashop = faWarehouse;
  facontact = faHeadset;
  faclose = faXmark;

  isMenuOpen:boolean = false;
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  clickedOutside(){
    this.isMenuOpen = false;
  }
  clickedInside(){
    this.isMenuOpen = true;
  }
}
