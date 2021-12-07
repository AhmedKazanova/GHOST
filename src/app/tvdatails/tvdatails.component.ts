// <!-- تم بفضل الله --> 
//  <!-- اللهم صل وسلم وبارك علي سيدنا محمد -->
//  <!-- Ahmed Adel -->


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-tvdatails',
  templateUrl: './tvdatails.component.html',
  styleUrls: ['./tvdatails.component.css']
})
export class TvdatailsComponent implements OnInit {
  id:any = ''
  CallingApi:any = ''
  ImgSrc:string = 'https://image.tmdb.org/t/p/w500'  ;
  TvDetail:any = {}
  TvPageMovie:any = ''
  Error:boolean = false
  constructor(private _ActivatedRoute:ActivatedRoute , private _ApiService:ApiService , private _wowservice:NgwWowService) { 
  }

  ngOnInit(): void {
    this._wowservice.init()
    
    this.id = this._ActivatedRoute.snapshot.params.id

    this.CallingApi = this._ApiService.GettvDetails(this.id).subscribe((Data)=>{

      this.TvDetail = Data
      this.TvPageMovie = this.TvDetail.homepage
    })
  }

}
