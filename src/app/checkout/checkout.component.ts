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
