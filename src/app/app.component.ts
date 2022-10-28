import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('desktop') desRef: ElementRef | undefined;
  // des: HTMLElement;
  title = 'pharmacy-k';

  constructor(){
    let router = document.getElementById('app') as HTMLElement
    let desktop = document.getElementById('desktop') as HTMLElement
    
    // alert(window.innerWidth)

    // if(window.innerWidth > 400){
    //   desktop.classList.remove('d-none')
    //   router.classList.add('d-none')
    // }
    // else{
    //   desktop.classList.add('d-none')
    //   router.classList.remove('d-none')
    // }
  }
}
