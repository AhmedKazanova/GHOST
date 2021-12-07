// <!-- تم بفضل الله --> 
//  <!-- اللهم صل وسلم وبارك علي سيدنا محمد -->
//  <!-- Ahmed Adel -->


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css']
})
export class PersondetailsComponent implements OnInit {
  id: any = ''
  CallingApi: any = ''
  ImgSrc: string = 'https://image.tmdb.org/t/p/w500';
  PersonDetail: any = {}
  PersonPage: any = ''
  Error: boolean = false
  Gender: number = 1
  MaleOrFemale: string = ''
  constructor(private _ActivatedRoute: ActivatedRoute, private _ApiService: ApiService , private _wowservice:NgwWowService) {

  }

  ngOnInit(): void {
    this._wowservice.init()
    
    this.id = this._ActivatedRoute.snapshot.params.id

    this.CallingApi = this._ApiService.GetPersonDetails(this.id).subscribe((Data) => {

      this.PersonDetail = Data
      this.PersonPage = this.PersonDetail.homepage
      this.Gender = this.PersonDetail.gender

      if (this.Gender == 1) {
        this.MaleOrFemale = 'Female'
      } else {
        this.MaleOrFemale = 'Male'
      }
    })
  }

}
