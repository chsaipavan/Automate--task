import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import Character from './character';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  fullName:string = 'boostrap';
   todaydate = new Date();
   todayString : string = new Date().toDateString();
  
   constructor() { 

  }

  filter(query:string){
    query=query.toLowerCase().trim();

    let terms :string[] = query.split('');
  }

  ngOnInit(){

  }
}
