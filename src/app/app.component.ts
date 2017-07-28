import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav: string = 'Recipes';

  onChangeNav(nav){
    this.nav = nav;
  }
}
