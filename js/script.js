let data=[`  <div class="d-flex justify-content-between">
<h6>CS-Go</h6>
<span><i class="fa-solid fa-star text-warning"></i> 4.88</span>
</div>
<div class="d-flex justify-content-between">
<p class="fw-lighter text-secondary">294K Downloads</p>
<span><i class="fa-solid fa-download text-site"></i> 2.3M</span>
</div>`,
` <div class="d-flex justify-content-between">
<h6>Gamezer</h6>
<span><i class="fa-solid fa-star text-warning"></i> 4.88</span>
</div>
<div class="d-flex justify-content-between">
<p class="fw-lighter text-secondary">294K Downloads</p>
<span><i class="fa-solid fa-download text-site"></i> 2.3M</span>
</div>`,` <div class="d-flex justify-content-between">
<h6>Island Rusty</h6>
<span><i class="fa-solid fa-star text-warning"></i> 4.88</span>
</div>
<div class="d-flex justify-content-between">
<p class="fw-lighter text-secondary">294K Downloads</p>
<span><i class="fa-solid fa-download text-site"></i> 2.3M</span>
</div>`]

// Next/previous controls
function plusSlides(n) {
  showSlides(n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  for(let i=0 ; i < slides.length ; i++){
     let x =(((slides[i].children[0]).children[0].getAttribute('src').split('/'))[1].split('.'))[0]
     if(n==1){
    if(x !=3)
{    (slides[i].children[0]).children[0].setAttribute('src',`images/${parseInt(n)+parseInt(x)}.jpg`)
      slides[i].children[1].innerHTML=data[parseInt(x)]
}   else
    { (slides[i].children[0]).children[0].setAttribute('src',`images/1.jpg`);
    console.log((slides[i].children[0]).children[0]);
       slides[i].children[1].innerHTML=data[0]
 }
     }
     else{
        if(x == 1)
   {   (slides[i].children[0]).children[0].setAttribute('src',`images/3.jpg`);
         slides[i].children[1].innerHTML=data[2];

    }
       else{
        (slides[i].children[0]).children[0].setAttribute('src',`images/${parseInt(n)+parseInt(x)}.jpg`)
       slides[i].children[1].innerHTML=data[(parseInt(x))-2]}
     }
  }
}

// function showSlides(n) {
//   let slides = document.getElementsByClassName("mySlides");
//   for(let i=0 ; i < slides.length ; i++){
//      let x =(((slides[i].children)[0].getAttribute('src').split('/'))[1].split('.'))[0];
//      if(n==1){
//     if(x !=3)
// {     slides[i].children[0].setAttribute('src',`images/${parseInt(n)+parseInt(x)}.jpg`)
//       slides[i].children[1].innerHTML=data[parseInt(x)]
// }   else
//     { slides[i].children[0].setAttribute('src',`images/1.jpg`);
//        slides[i].children[1].innerHTML=data[0]
//  }
//      }
//      else{
//         if(x == 1)
//    {     slides[i].children[0].setAttribute('src',`images/3.jpg`);
//          slides[i].children[1].innerHTML=data[2];

//     }
//        else{
//        slides[i].children[0].setAttribute('src',`images/${parseInt(n)+parseInt(x)}.jpg`)
//        slides[i].children[1].innerHTML=data[(parseInt(x))-2]}
//      }
//   }
// }