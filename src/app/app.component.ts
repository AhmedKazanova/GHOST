import { Component } from '@angular/core';
declare var $:any;
declare var progress:any

@Component({
  selector: 'Movie-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(){}

  ngOnInit() {
    progress()
    this.Jquery()


 
  }

  Jquery():void {
    $(window).scroll(function(){
      if($(window).scrollTop() > $('#Setion1').offset().top - 100 ) {
        $('nav').animate().css({backgroundColor:'rgba(0, 0, 0, 1)'}) 
        $('#Btn').fadeIn(600)
      } else {
        $('nav').animate().css({backgroundColor:'rgba(19, 23, 34, 0.1)'}) 
        $('#Btn').hide()
      }
  })
  }
}
