import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient ) { 

  }
 
  GetAll( PageNumber:number ):Observable<any>
  {
     return this._HttpClient.get(`http://api.themoviedb.org/3/trending/all/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=${PageNumber}`)
  }
  GetTrendingTv(PageNumber:number , Tv:string):Observable<any>
  {
     return this._HttpClient.get(`http://api.themoviedb.org/3/trending/${Tv}/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=${PageNumber}`)
  }
  GetTrendingMovies( PageNumber:number , movie:string ):Observable<any>
  {
     return this._HttpClient.get(`http://api.themoviedb.org/3/trending/${movie}/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=${PageNumber}`)
  }
  GetmoveDetails( Movie_id:string ):Observable<any>
  {
     return this._HttpClient.get(`http://api.themoviedb.org/3/movie/${Movie_id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
  GettvDetails( tv_id:string ):Observable<any>
  {
     return this._HttpClient.get(`http://api.themoviedb.org/3/tv/${tv_id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
  GetPerson( PageNumber:number , Person:string ):Observable<any>
  {
     return this._HttpClient.get(`http://api.themoviedb.org/3/trending/${Person}/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=${PageNumber}`)
  }
  GetPersonDetails( Person_id:any):Observable<any>
  {
     return this._HttpClient.get(`http://api.themoviedb.org/3/person/${Person_id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
  

}
