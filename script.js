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


 

$(document).ready(
   
   $('#contact_form').validate({
      rules:{
         name:{
            required:true
         },
         email:{
            required:true,
            email:true
         },
         message:{
            required:true,
            minlength:20
         }
      },
      messages:{
         message:{
            required:'let us know about your requirements'
         }
      }

   }),

   $('#submitBtn').click(function(){
   
      var mobileNumber = $('#mobileNumber').val()
      var mobileNumberPattern = /^[1-9]\d{9}$/

      if(mobileNumber.match(mobileNumberPattern)){
         $('#numberError').hide()
       
      }
      else{
           
          $('#numberError').text('enter a valid mobile number').css({'color':'red'})
      }
      
   })

   

   
)