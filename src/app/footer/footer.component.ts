import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faFacebookF, faTwitter, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateTimeComponent } from '../date-time/date-time.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, DateTimeComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', './resfo.css','./respon.css']
})
export class FooterComponent {
faFacebook = faFacebookF;
faTwitter = faTwitter;
faInstagram = faInstagram;
faThreads = faThreads;
}
