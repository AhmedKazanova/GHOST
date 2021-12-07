import { Component, OnInit  } from '@angular/core';
declare const Typeing:any ;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {

  constructor() {

    

   }

  ngOnInit(): void {
    Typeing()
  }

 

}
