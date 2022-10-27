import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { data } from '../pharm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  medicines:any = []

  search:any

  searched = false

  searchClue : any = []

  searchMedicine(){
    this.changeRoute.navigate(['/home/search',this.search])
  }

  constructor( private route : ActivatedRoute, private changeRoute : Router ) { }

  ngOnInit(): void {
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

data.forEach((each:any)=>{
  this.searchClue.push(each.name)
  this.searchClue.push(each.category)
})

this.route.paramMap.subscribe(params => {
  console.log(params.get('medicine'))

  if(params.get('medicine')){

    this.medicines = []
    
    this.searched = true

    let medicine = params.get('medicine')?.toLowerCase()

    console.log(medicine)

  data.forEach((each:any)=>{
    if(each.name == medicine ){
      this.medicines.push(each)
    }
  })

}

// else{
  // data.forEach((each:any)=>{
  //   this.medicines.push(each)
  // })
// }
  
})

  }

}
