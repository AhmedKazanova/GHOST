import { Component, OnInit , OnDestroy, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
  page = 1;
  totalItems:number = 0; //عدد الصفحات =  2000
  ReturnAll:any[] = [];
  CallingApi:any = '';
  ImgSrc:string = 'https://image.tmdb.org/t/p/w500'  ;
  Error:boolean = true;

  
  constructor( private _ApiService:ApiService , private _wowservice:NgwWowService) { 


 

  }

  ngOnInit(): void {
    this._wowservice.init()
    this.Jquery()
    this.HomePages(1)
    
   
   


  }

    HomePages(PageNumber:number){
      
    
        this.CallingApi=  this._ApiService.GetAll(PageNumber).subscribe(
          (Data)=>{
          this.ReturnAll = Data.results
          this.totalItems= Data.total_results 
          this.page = Data.page
        },(error)=>{
          this.Error = error.ok
          
        }
        )
      
    }

    pageChanged() {
      this.HomePages(this.page)
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
