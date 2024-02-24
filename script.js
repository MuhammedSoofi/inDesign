let logo_naveSec = document.getElementById('logo-naveSec')
let section = document.getElementById('section')

window.addEventListener('scroll',function(){
    let scrollyValue = this.scrollY
     if(scrollyValue<100){
        section.classList.remove('logoSecBg')
     }
     else{
        section.classList.add('logoSecBg')
     }
})