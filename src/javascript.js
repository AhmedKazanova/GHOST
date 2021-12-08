





/**** Just Page About Us****/
function Typeing() {
    sayHi(() => {
        sayMostafa((() => {
            sayName(() => {
                Fade(() => {
                    setTimeout(() => {
                        removed()
                    }, 1300);
                })
            })
        }))
    })
}
function sayHi(callBack) {
    
    let welcome = document.getElementById('welcome')
    let TextWelcome = "Thanks For God"
    let x = 0
    let interval = setInterval(() => {
        welcome.textContent += TextWelcome[x]
        x++
        if (x == TextWelcome.length) {
            clearInterval(interval)
            callBack()
        }
    }, 140);
}
function sayMostafa(callBack) {
    let alMostafa = document.getElementById("alMostafa")
    let TextMostafa = "لا تنسى الصلاة علي الحبيب المصطفي"
    let M = 0
    let interval2 = setInterval(() => {
        alMostafa.textContent += TextMostafa[M]
        M++
        if (M == TextMostafa.length) {
            clearInterval(interval2)
            callBack()
        }
    }, 140);
}
function sayName(callBack) {
    let created = document.getElementById("text")
    let TextCreated = "Designed By Ahmed Adel"
    let k = 0
    let interval2 = setInterval(() => {
        created.textContent += TextCreated[k]
        k++
        if (k == TextCreated.length) {
            clearInterval(interval2)
            callBack()
        }
    }, 140);
}
function Fade(callBack) {
    let AboutSection = document.getElementById('AboutSection')
    AboutSection.style.display = 'block'
    let overLay = document.getElementById('overLay')
    overLay.style.opacity = 0
    
    callBack()
}
function removed() {
    let overLay = document.getElementById('overLay')
    overLay.remove()

}
/** funtion sideBar in phone  **/
function MyFun() {

    let mySidenav = document.getElementById('mySidenav')
    let Trending = document.getElementById("Trending")
    let Home = document.getElementById("Home")
    let About = document.getElementById("About")
    let Login = document.getElementById("Login")
    let Register = document.getElementById("Register")
    let Name = document.getElementById("Name")
    let Logout = document.getElementById("Logout")

        mySidenav.style.width = '100%'
        Home.style.left = '0px'
        Name.style.left = '0px'
        Logout.style.left = '0px'
        About.style.left = '0px'
        Login.style.left = '0px'
        Trending.style.left = '0px'
        Register.style.left = '0px'

}
function ClickClosing() {
    


    let mySidenav = document.getElementById('mySidenav')
    let Trending = document.getElementById("Trending")
    let Home = document.getElementById("Home")
    let About = document.getElementById("About")
    let Login = document.getElementById("Login")
    let Register = document.getElementById("Register")
    let Name = document.getElementById("Name")
    let Logout = document.getElementById("Logout")
    
    mySidenav.style.width = '0%'
    Name.style.left = '300px'
    Logout.style.left = '300px'
    Home.style.left = '300px'
    Register.style.left = '300px'
    About.style.left = '300px'
    Login.style.left = '300px'
    Trending.style.left = '250px'
}
/******************************************/
function showPasword(){
    let btnShow = document.getElementById("showPassword")
    let inputPassword = document.getElementById("password")
    btnShow.addEventListener('click',function(){
        this.classList.toggle('toggle')
        if(btnShow.classList.contains('toggle')){
            inputPassword.type = 'type'
            btnShow.textContent = 'Hide'
        } else {
            inputPassword.type = 'password'
            btnShow.textContent = 'Show'
        }
    })
}
/********************************************/
function progress(){
    // When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };
function myFunction() {
  // let winScroll = window.scrollY OR let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = ( winScroll / height ) * 100 ;
  document.getElementById("myBar").style.width = scrolled + "%";
}
}
/**********************************************************************************/