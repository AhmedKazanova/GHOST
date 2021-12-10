// <!-- تم بفضل الله -->
// <!-- اللهم صل وسلم وبارك علي سيدنا محمد -->
// <!-- Ahmed Adel -->

import { Component, OnInit , OnDestroy} from '@angular/core';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit , OnDestroy {
  Error:boolean=true
  id:number = 1
  CallingApi:any=""
  totalItems:number=1
  page:number=1
  ImgSrc:string = 'https://image.tmdb.org/t/p/w500'  ;
  AllPerson:any[]=[]
  constructor(private _ApiService:ApiService , private _ActivatedRoute:ActivatedRoute , private _wowservice:NgwWowService , private _Router:Router) {
   }

   ngOnInit(): void {
    this._wowservice.init()
    this.id = this._ActivatedRoute.snapshot.params.id
    this.Jquery()
    this.ReturnPerson(this.id)
  }

   ReturnPerson(number:number){
    this.CallingApi = this._ApiService.GetPerson( number , "person" ).subscribe(
      (Data)=>{
      this.totalItems = Data.total_results - 15000
      this.AllPerson = Data.results 
      this.page = Data.page
    },(error)=>{
        this.Error = error.ok
    })}

    pageChanged(event:any) {
      this._Router.navigate(['Actors' , event])
      this.ReturnPerson(event)
  }
  ngOnDestroy(){
    if( this.CallingApi ) {
      this.CallingApi.unsubscribe()
    }
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  Jquery():any{
    $(document).ready(()=>{
      $(window).scrollTop();
      $('#Btn').click(()=>{
        $('html,body').animate({'scrollTop':'0'} , 600)
    });
  }); 
  }
}
