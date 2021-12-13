// <!-- تم بفضل الله --> 
// <!-- اللهم صل وسلم وبارك علي سيدنا محمد -->
// <!-- Ahmed Adel -->



import { Component, OnInit , OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';
import { ActivatedRoute, Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-trendingmovies',
  templateUrl: './trendingmovies.component.html',
  styleUrls: ['./trendingmovies.component.css']
})
export class TrendingmoviesComponent implements OnInit , OnDestroy {
  id:any
  CallingApi:any='';
  Error:boolean=true
  ImgSrc:string = 'https://image.tmdb.org/t/p/w500'  ;
  totalItems:number =0;
  page:number = 1
  AllMovies:any[] = [];
  constructor( private _ApiService:ApiService , private _Router:Router , private _wowservice:NgwWowService , private _ActivatedRoute:ActivatedRoute )  { } 

  ngOnInit(): void {
    this._wowservice.init()
    this.Jquery()
    this.id = this._ActivatedRoute.snapshot.params.id
    this.ReturnMovies(this.id)

  }

  ReturnMovies(number:number){
      this.CallingApi = this._ApiService.GetTrendingMovies(number,'movie').subscribe((Data)=>{
      this.AllMovies = Data.results
      this.totalItems = Data.total_results - 19760
      this.page = Data.page
      console.log(this.AllMovies)

    },(error)=>{
      this.Error = error.ok
    })

  }

  pageChanged(event:any) {
    this._Router.navigate(['Movies' , event])
    this.ReturnMovies(event)
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
  }}
