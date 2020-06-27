import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-note2',
  templateUrl: './note2.component.html',
  styleUrls: ['./note2.component.css']
})
export class Note2Component implements OnInit {

  AppComponent:Component;
  todaydate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
