import { Component, OnInit } from '@angular/core';

import { data } from '../pharm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  medicines:any = []

  constructor() { }

  ngOnInit(): void {
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

data.forEach((each:any)=>{
  this.medicines.push(each)
})

  }

}
