import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public showMobile: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.breakpointObserver
    .observe(['(min-width: 850px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showMobile = true;
      } else {
        this.showMobile = false;
      }
    });

  }

}