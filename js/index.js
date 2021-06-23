

$(document).ready(function(){

  // Owl carousel Initialize
 
  $('#new-collection-carousel .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:true
      },
      567:{
        items: 2,
      },
      768:{
        items: 2,
      },
      1024:{
        items: 4,
      }
    }
  });




  // countdown

  let day = $("#day");
  let hour = $("#hour");
  let minute = $("#minute");
  let second = $("#second");

  function countDown(){
    let nextYear = new Date('jan 1, 2022 00:00:00').getTime();
    let today = new Date().getTime();
    let distence = nextYear - today;

    let s = 1000;
    let m = s * 60;
    let h = m * 60;
    let d = h * 24;

    let DD = Math.floor(distence / d);
    let HH = Math.floor((distence % d) / h);
    let MM = Math.floor((distence % h) / m);
    let SS = Math.floor((distence % m) / s);

    if(DD <10){
      DD = '0'+ DD;
    }
    if(HH <10){
      HH = '0'+ HH;
    }
    if(MM < 10){
      MM = "0"+ MM;
    }
    if(SS < 10){
      SS = "0" + SS;
    }

    day.text(DD);
    hour.text(HH);
    minute.text(MM);
    second.text(SS);
  }
 setInterval(countDown, 1000);



  // current year
  let currentYear = $('#current-year');
  currentYear.text(new Date().getFullYear())




    // product quantity up and down
    let qtyUp = $(".qty-up");
    let qtyDown = $(".qty-down");
    // let qtyInput = $('.qty-input');

    qtyUp.click(function(){
      let qtyInput = $(`.qty-input[data-id='${$(this).data("id")}']`);
      let qt = qtyInput.val();
      if(qt >=1 && qt <15){
        ++qt;
        qtyInput.val(qt);
        console.log("QTY Up")
      }
    });
    qtyDown.click(function(){
      let qtyInput = $(`.qty-input[data-id='${$(this).data("id")}']`);
      let qt = qtyInput.val();
      if(qt >1){
        --qt;
        qtyInput.val(qt);
        console.log("QTY Down")

      }
    });
  


  // veno bos
  $('.singleProductGellay').venobox(); 


  // Review Post

  let submitReview = $("#submitReview");
  let getUserName = $("#review-U-name");
  let getUserEmail = $("#review-U-email");
  let getReviewTitle = $("#review-title");
  let getReviewDesc = $("#review-desc");
  let anyEmpty = $("#anyEmpty span");

  anyEmpty.text('');

  let ShowPostHere = $("#reviewed-shows");

  submitReview.click(function(e){
    e.preventDefault();

    if(getUserName.val() != ""){
      console.log("hmmm");
      getUserName.removeClass('errors');
    }else{
      getUserName.addClass('errors');
      anyEmpty.text("Some or any filed may empty!")
    }
    if(getUserEmail.val() != ""){
      getUserEmail.removeClass('errors');
      console.log("hmmm");
    }else{
      getUserEmail.addClass('errors');
      anyEmpty.text("Some or any filed may empty!")

    }
    if(getReviewTitle.val() != ""){
      getReviewTitle.removeClass('errors');
      console.log("hmmm");
    }else{
      getReviewTitle.addClass('errors');
      anyEmpty.text("Some or any filed may empty!")

    }
    if(getReviewDesc.val() != ""){
      getReviewDesc.removeClass('errors');
      console.log("hmmm");
    }else{
      getReviewDesc.addClass('errors');
      anyEmpty.text("Some or any filed may empty!")

    }

    if((getUserEmail.val() != '') && (getUserName.val() != '') && (getReviewTitle.val() != '') && (getReviewDesc.val() != '')){
      let reviewPost = document.createElement('div');
      reviewPost.className = "border-bottom py-3 d-flex";
      // user pic area
      let userPic = document.createElement('div');
      let userPicImg = document.createElement('img');
      userPic.className = "user-pic";
      userPicImg.className = "x";

      // review detail area
      let reviewedDetail = document.createElement('div');
      let uName = document.createElement('h6'); 
      let reviewedRating = document.createElement('div');
      reviewedRating.className = "rating my-3";

      let reviewComment = document.createElement('p');
      let SpanX1 = document.createElement('i');
      let SpanX2 = document.createElement('i');
      let SpanX3 = document.createElement('i');
      let SpanX4= document.createElement('i');
      let SpanX5 = document.createElement('i');
      let revDate = document.createElement('span');
      revDate.className = "reviewed-date fw-normal fs-13 clr-2";

      // post date
      let mon = ["Jan", 'Feb','Mar', 'Apr', 'May',"Jun",'Jul','Aug','Sep','Oct','Nov','Dec']
      var RPD = new Date();
      revDate.textContent = RPD.getDate() + " " + mon[RPD.getMonth()] + ', ' + RPD.getFullYear();

      SpanX1.className= ("bx bxs-star clr-rat me-1");
      SpanX2.className = ("bx bxs-star clr-rat me-1");
      SpanX3.className = ("bx bxs-star clr-rat me-1");
      SpanX4.className = ("bx bxs-star clr-rat me-1");
      SpanX5.className = ("bx bxs-star-half clr-rat me-1");

      reviewComment.className = "reviewed-comment fs-15 clr-2 fw-normal";
      reviewComment.textContent= getReviewDesc.val();
      uName.textContent = getUserName.val();
      uName.className = ("reviewer-name fw-md clr-3");

      
       
      reviewedRating.append(SpanX1, SpanX2, SpanX3, SpanX4, SpanX5, revDate);
      reviewedDetail.append(uName, reviewedRating, reviewComment);

      // add user pic
      userPicImg.src = './img/user-100.png';
      userPic.prepend(userPicImg);

      reviewPost.append(userPic, reviewedDetail);

      // showing post
      ShowPostHere.prepend(reviewPost);
      anyEmpty.text('Your Review Add Successfully!');
      
      // c.append(reviewedDetail);
      console.log(reviewedRating);

      submitReview.attr("type","reset")
      
    }

  });

  



});








