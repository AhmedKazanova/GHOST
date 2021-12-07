
// <!-- تم بفضل الله --> 
// <!-- اللهم صل وسلم وبارك علي سيدنا محمد -->
// <!-- Ahmed Adel -->


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  id:any = ''
  CallingApi:any = ''
  ImgSrc:string = 'https://image.tmdb.org/t/p/w500'  ;
  MovieDetail:any = {}
  HomePageMovie:any = ''
  Error:boolean = false
  constructor(private _ApiService:ApiService , private _ActivatedRoute:ActivatedRoute , private _wowservice:NgwWowService) { 

      
  }




  ngOnInit(): void {
    this._wowservice.init()

    this.id = this._ActivatedRoute.snapshot.params.id

    this.CallingApi = this._ApiService.GetmoveDetails(this.id).subscribe((Data)=>{

      this.MovieDetail = Data
      this.HomePageMovie = this.MovieDetail.homepage
      

      
      
    })

  }

}
