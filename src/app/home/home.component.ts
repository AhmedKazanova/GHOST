import { Component, OnInit , OnDestroy, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
  id:number = 1
  page:number = 1
  totalItems:number = 0; //عدد الصفحات =  2000
  ReturnAll:any[] = [];
  CallingApi:any = '';
  ImgSrc:string = 'https://image.tmdb.org/t/p/w500'  ;
  Error:boolean = true;

  
  constructor( private _ApiService:ApiService ,private _Router:Router , private _wowservice:NgwWowService , private _ActivatedRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this._wowservice.init()
    this.Jquery()
    this.id = this._ActivatedRoute.snapshot.params.id
    this.HomePages(this.id)
  }

    HomePages(PageNumber:number){
        this.CallingApi=  this._ApiService.GetAll(PageNumber).subscribe(
          (Data)=>{
          this.ReturnAll = Data.results 
          this.totalItems= Data.total_results - 15000
          this.page = Data.page
        },(error)=>{
          this.Error = error.ok
          
        }
        )
      
    }

    pageChanged(event:any) {
        this._Router.navigate(['Home' , event])
        this.HomePages(event)
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
