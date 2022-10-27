import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { data } from '../pharm';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  medicine:any

  delivery = 1

  strip = 1

  box = 1

  increase(what:any){

    if(what == "box"){
      this.box++
    }

    if(what == "strip"){
      this.strip++
    }

  }

  decrease(what:any){
    
    if(what == "box"){
      this.box !==1 && this.box--
    }

    if(what == "strip"){
      this.strip!==1 && this.strip--
    }

  }

  firstName:any
  lastName:any
  region:any
  location:any
  contact:any
  email:any

  regions = (["Western North Region","Western Region","Volta Region","Greater Accra Region","Eastern Region","Ashanti Region","Central Region","Northern Region","Upper East Region","Upper West Region","Oti Region","Bono East Region","Ahafo Region","Bono Region","North East Region","Savannah Region"]).sort()

  submitted = false

  successMsg = false

  submitOrder(){

    this.submitted = true

    if(!(this.firstName && this.lastName && this.region && this.location && this.contact && this.email)){
      return
    }

    let data = {
      firstName : this.firstName,
      lastName : this.lastName,
      region : this.region,
      location : this.location,
      contact : this.contact,
      email : this.email
    }

    console.log(data)

    this.successMsg = true

  }

  constructor( private route : ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

    console.log(params.get('id'))

    if(params.get('id')){
      let id = Number(params.get('id'))
      this.medicine = data[id]
      console.log(this.medicine)
    }


    })

  }

}
