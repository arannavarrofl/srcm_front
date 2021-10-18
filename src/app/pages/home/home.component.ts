import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;  
  colG: any;


  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 4, rows: 1 },
         
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
      
      ];
    })
  );

  cardsG = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 4, rows: 1 },
         
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
      
      ];
    })
  );

 

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }

}
