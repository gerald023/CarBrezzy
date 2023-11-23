import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs/internal/observable/timer';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-date-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.css'
})
export class DateTimeComponent implements OnInit {

  dateTime: Observable<Date> | undefined;
  ngOnInit(){
   this.dateTime = timer(0, 1000).pipe(
    map(()=>{
      return new Date();
    })
   )
  }
}
