// <!-- تم بفضل الله -->
// <!-- اللهم صل وسلم وبارك علي سيدنا محمد -->
// <!-- Ahmed Adel -->


import { Component, OnInit , OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';

declare var $:any;


@Component({
  selector: 'app-trendintv',
  templateUrl: './trendintv.component.html',
  styleUrls: ['./trendintv.component.css']
})
export class TrendintvComponent implements OnInit , OnDestroy {
  Error:boolean= true ;
  CallingApi:any=''
  totalItems:number = 0;
  page:number = 0
  AllTv:any[] = []
  ImgSrc:string = 'https://image.tmdb.org/t/p/w500'  ;

  constructor(private _ApiService:ApiService , private _wowservice:NgwWowService ) {

    

   }
   ngOnInit(): void {
    this._wowservice.init()
    this.Jquery()
    this.ReturnTv(1)
  }

   ReturnTv(number:number){
      this.CallingApi = this._ApiService.GetTrendingTv(number,'tv').subscribe(
        (Data)=>{
      this.totalItems = Data.total_results
      this.AllTv=Data.results
      this.page = Data.page
    },(error)=>{
      this.Error = error.ok
    })

   }


  pageChanged(){

    this.ReturnTv(this.page)

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
  $(window).scroll(function(){
    if($(window).scrollTop() > $('#Setion1').offset().top - 100 ) {
      $('#Btn').fadeIn(600)
    } else {
      $('#Btn').hide()
    }
})
setInterval(()=>{

  $('#Adress').fadeToggle(2500)
},2500)


  }

}
