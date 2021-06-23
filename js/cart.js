

$(document).ready(function(){

  
    // product quantity up and down
    let qtyInput = $('.qty-input');
    qtyInput.click(function(){

      let qt = $(this).val();
      if(qt < 1){
        $(this).val('1');
        console.log("QTY Down");
      }
      if(qt >10){
        $(this).val('1');
        console.log("QTY Down");
      }

    });

    qtyInput.blur(function(){
      let qt = $(this).val();
      if(qt < 1){
        $(this).val('1');
        console.log("QTY Down");
      }
      if(qt >10){
        $(this).val('1');
        console.log("QTY Down");
      }
    });


    // checkout different shipping address
    $('.different-shipping').slideUp();
    $('#useDifferentAddress').click(function(){   
        if ($('#useDifferentAddress').is(":checked")){
          // it is checked
          $('.different-shipping').slideDown(500);
          console.log($('#useDifferentAddress').val()+' input theke');
        }else{
          console.log("cannot detected input theke");
          $('.different-shipping').slideUp(700);
        }
    }); 
      
    let placeOrder = $('#place-order');
    placeOrder.click(function(){
      window.location = "./thanks.html";
    });



    // about page counter
    $('.counter').each(function(){
      $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
      },
      {
        duration: 3500,
        easing: 'swing',
        step: function(now){
          $(this).text(Math.ceil(now)+'+')
        }
      }
      )
    });
    
  $(window).scroll(function(){
    let CounterPosition = $(document).scrollTop();
    console.log(CounterPosition);

    if(CounterPosition > 1990){

    

    }
  })

    // about page client say carousel

    $('#client-say .owl-carousel').owlCarousel({
      dots:true,
      nav: false,
      loop:true,
      margin:10,
      responsive:{
        0:{
          items: 1
        },
        768:{
          items: 2
        },
        1024:{
          items:3
        }
      }
    });



    // login varify

    let errbx = $('.error-box span');

    let loginEmail= $('#login-username');
    let loginPass = $('#login-password');
    let LogIn = $('#LogIn');

    var sms = '';

    LogIn.click(function(zz){
      zz.preventDefault();

      if(loginEmail.val() == ''){
        loginEmail.addClass('err');
        loginEmail.removeClass('ok');
        sms = 'Username Cannot be empty!';
        // console.log(sms);
      }
      else if(loginEmail.val().length <6){
        loginEmail.addClass('err');
        loginEmail.removeClass('ok');
        sms = 'Username is incurrect!';
      }else{
        loginEmail.addClass('ok');
        loginEmail.removeClass('err');
        sms='';
      }
      if(loginPass.val() == ''){
        loginPass.addClass('err');
        loginPass.removeClass('ok');
        sms = 'Password Cannot be empty!';
      }
      else if(loginPass.val().length < 8){
        sms = 'Set Minimun 8 Chatacters !';
        loginPass.addClass('err');
        loginPass.removeClass('ok');
      }
      else{
        loginPass.addClass('ok');
        loginPass.removeClass('err');
      }

      if((loginEmail.val() == '') && (loginPass.val() == '')){
        sms = "Enter Your Username and Password"
      }
      if((loginEmail.val() != '') && (loginPass.val().length >= 8)){
        sms = 'Your Username or Password is incurrect!';
        loginPass.addClass('err');
        loginPass.removeClass('ok');
        loginEmail.addClass('err');
        loginEmail.removeClass('ok');
      }

      console.log(sms + " print sms");
      errbx.text(sms);

      // loginPass.addClass('ok');

    });



    // sign up verify

    let signErrBox = $('.signErr-box span');

    let signFname = $('#newFName');
    let signLname = $('#newLName');
    let signUsername = $('#newUsername');
    let signEmail = $('#newEmail');
    let signPass = $('#newPassword');
    let signRePass = $('#confirmPassword');

    let SignUp = $('#SignUp');


    SignUp.click(function(zzz){
      zzz.preventDefault();

      var signSMS = '';
      // var signSMSp = '';
      
      if(
        (signFname.val() == '') || (signLname.val() == '') ||
        (signUsername.val() == '') || (signEmail.val() == '') ||
        (signPass.val() == '')){

        signSMS = 'A or some fields are empty!'
      }

      var pasErr = $('#pasErr');
      pasErr.text('');

      if(signPass.val() != signRePass.val()){

        pasErr.text("Password didn't match")
      }
      if((signPass.val().length < 8) && (signPass.val() != '')){

        pasErr.text("Set minimun 8 characters!")
      }

      if((
        (signFname.val() != '') || (signLname.val() != '') ||
        (signUsername.val() != '') || (signEmail.val() != '')) && ((signPass.val().length >= 8) && (signPass.val() === signRePass.val()))){
          console.log("sign up faild");
          signSMS = 'An unexpected error occurred while signing up!';
      }

      

      

      signErrBox.text(signSMS)
    });






  

});
