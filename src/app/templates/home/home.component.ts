import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bgColor1: boolean = true;
  bgColor2: boolean = true;
  bgColor3: boolean = true;

  constructor() {
  }

  @HostListener("window:scroll", [])
  doSomethingOnInternalScroll($event:Event){
    let scrollOffset = window.scrollY;
  }

  ngOnInit(): void {

  }

}
