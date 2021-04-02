import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  name = "mahesh gaikwad"
  count = 0
  add(){
    this.count ++
  }
  sub(){
    this.count --
    if(this.count == -10){
      alert('limit reached')
      this.count = 0
    }
  }
}
