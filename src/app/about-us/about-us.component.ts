import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  students = [
    {
      img: "../../assets/images/gerald.jpg",
      name: "Gerald Lekara",
      pos: "CEO",
      stdId: "student1433313"
    },
    {
      img: "../../assets/images/benson.jpg",
      name: "Benson Kiene",
      pos: "HR",
      stdId: "student1446383"
    },
    {
      img: "../../assets/images/kini.jpg",
      name: "Andrew Kini",
      pos: "Game Boy",
      stdId: "student1451790"
    }
  ]

}
