import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faFacebookF, faTwitter, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
faFacebook = faFacebookF;
faTwitter = faTwitter;
faInstagram = faInstagram;
faThreads = faThreads;
}
