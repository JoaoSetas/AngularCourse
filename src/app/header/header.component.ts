import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() nav= new EventEmitter<string>();

  onNavButton(nav){
    this.nav.emit(nav);
  }

  constructor() { }

  ngOnInit() {
  }

}
