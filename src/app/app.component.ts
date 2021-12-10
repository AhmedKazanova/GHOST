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
    setInterval(()=>{
      $('#Adress').fadeToggle(2500)
    },2500)

 
  }

  Jquery():void {
    $(window).scroll(function(){
      if($(window).scrollTop() > $('#Setion1').offset().top - 100 ) {
        $('nav').animate().css({backgroundColor:'rgba(19, 23, 34, 0.9)'}) 
        $('#Btn').fadeIn(600)
      } else {
        $('nav').animate().css({backgroundColor:'rgba(19, 23, 34, 0.3)'}) 
        $('#Btn').hide()
      }
  })
  }
}
