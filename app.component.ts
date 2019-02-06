
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  sampleData:any;
  textInput = '';
  displayValue: string;

  constructor () {}

  ngOnInit() {

  }

  onClick() {
    this.displayValue = this.textInput;
  }
}

export default AppComponent;