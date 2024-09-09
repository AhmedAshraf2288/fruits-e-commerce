// document.addEventListener('DOMContentLoaded', function () {
//     var splide = new Splide('.splide2', {
//         type: 'loop',
//         perPage: 6,
//         drag: 'free',
//         span: true,
//         autoplay: true,
//         interval: 3000,
//         wheel: true,
//         breakpoints: {
//             640: { perPage: 2 },
//             992: { perPage: 3 },
//             1200: { perPage: 5 }
//         }
//     }).mount();
// });


// Splide all
var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}

// home time
jQuery(document).ready(function($){
    $('.countdown').dsCountDown({
    endDate: new Date("December 24, 2024 23:59:00")
    });
    });


// scroll 
var toHome = document.getElementById("toHome")
let header = document.getElementById("header");
window.onscroll=function(){
    if(window.scrollY > 100){
        header.classList.add("headerScroll");
        toHome.classList.add("btnScroll")
    }
  else  {
        header.classList.remove("headerScroll");
        toHome.classList.remove("btnScroll")
    }
}
toHome.addEventListener("click" , function(){
  window.scroll({
      top:0,
      behavior:"smooth"
  })
})




// document.addEventListener('DOMContentLoaded', function(){
//     const listnaves=document.querySelectorAll(".header .navbar-nav li .nav-link")
//     listnaves.forEach((element) => {
//         element.addEventListener("click",function(){
//         listnaves.forEach((link)=>{
//             link.classList.remove("active")
//         })


//             element.classList.add("active")
//         })
        
//     });
// })




// active home page

document.addEventListener("DOMContentLoaded" ,function(){
  const listitem=document.querySelectorAll('.sec2__list ul li');


  listitem.forEach((item)=>{
  item.addEventListener("click",function(){
  listitem.forEach((li)=>{
  li.classList.remove("active")
})

  item.classList.add("active")
})
  })
})


  





// *******************************
function removeItem() {
  let showing = JSON.parse(localStorage.getItem("showing")) || { cont: 1 };

  if (showing.cont > 0) {
    showing.cont--;
    localStorage.setItem("showing", JSON.stringify(showing));
  toggleProduct()
  
  }
}

function addItem() {
  let showing = JSON.parse(localStorage.getItem("showing")) || { cont: 1 };
  showing.cont++;
  console.log("New quantity:", showing.cont);
  localStorage.setItem("showing", JSON.stringify(showing));
  toggleProduct()

}




function addCart1() {
  let showing = JSON.parse(localStorage.getItem("showing")) || { cont: 1 };


  let find = cartData.find((item) => item.id === showing.id);

  if (find) {
 
    find.cont = showing.cont;

  } else {
    cartData.push(showing);
    what.classList.remove("clear");
  }

  localStorage.setItem("cartData", JSON.stringify(cartData));
  console.log("Updated cartData:", cartData);

  cartCount.textContent = cartData.length;
  displayCart();
  toggleProduct();
  displayCart2();




}







// ***********************


 

let close = document.getElementById("ex");
let lightBoxContainer = document.getElementById("lightBoxContainer");
let shoow = document.querySelectorAll(".btn__show");

close.addEventListener("click", function(){
    hideLightBox();
});

const toggle = document.getElementById("toggle");
function show(productArray, index) {
    let chooseProduct = productArray[index];
    localStorage.setItem("showing", JSON.stringify(chooseProduct));
    toggleProduct();
    lightBoxContainer.style.display = "flex"; 
    setTimeout(() => {
        lightBoxContainer.style.opacity = 1; 
    }, 500); 
}

function hideLightBox() {
    lightBoxContainer.style.opacity = 0; 
    setTimeout(() => {
        lightBoxContainer.style.display = "none"; 
    }, 300); 
}





function toggleProduct(){

  const showing = JSON.parse(localStorage.getItem("showing")) || {};
  toggleShoing=""
  toggleShoing =`
  
  <div class="col-lg-5 " >
  <section id="main-carousel" class="splide none" aria-label="My Awesome Gallery">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img src="${showing.imgs[0]}" alt="">
        </li>
        <li class="splide__slide">
          <img src="${showing.imgs[1]}" alt="">
        </li>
        <li class="splide__slide">
          <img src="${showing.imgs[2]}"" alt="">
        </li>
        <li class="splide__slide">
          <img src="${showing.imgs[3]}"" alt="">
        </li>
      </ul>
    </div>
  </section>
  
  
  <ul id="thumbnails" class="thumbnails">
    <li class="thumbnail">
      <img src="${showing.imgs[0]}"" alt="">
    </li>
    <li class="thumbnail">
      <img src="${showing.imgs[1]}" alt="">
    </li>
    <li class="thumbnail">
      <img src="${showing.imgs[2]}"" alt="">
    </li>
    <li class="thumbnail">
      <img src="${showing.imgs[3]}"" alt="">
    </li>
  </ul>
</div>

<div class="col-lg-7 position-relative">
<div class="box__item">
<div class="box__item__text">
  <h3>${showing.tittle}</h3>
</div><!-- box__item__text -->
<div class="box__item__datiles">
  <h4>Availability:</h4>
  <svg width="15" height="15" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="7.5" fill="rgb(62,214,96, 0.3)"></circle>
    <circle cx="7.5" cy="7.5" r="5" stroke="rgb(255, 255, 255)" stroke-width="1" fill="rgb(62,214,96)"></circle>
  </svg>
  <span>20 in stock</span>
<div class="box__item_onsale">
<p>€${showing.price}</p>
${showing.onsale ? `<span class="sec2__item__text--sale">€${showing.sale}</span>` : ''}
</div>



  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

  <div class="box__item__choose">
    <h5>Material:</h5>
    <span>canada</span>
    <ul>
      <li><button >canada</button></li>
      <li><button>india</button></li>
      <li><button>germany</button></li>
    </ul>
  </div> <!-- box__item__choose -->
  ${showing.units ?
    `<div class="box__item__choose">
      <h5>Size:</h5>
      <span>1lt</span>
      <ul>
        <li><button>1lt</button></li>
        <li><button>2lt</button></li>
        <li><button>5lt</button></li>
      </ul>
    </div> <!-- box__item__choose -->`
    : 
    `<div class="box__item__choose">
    <h5>Size:</h5>
    <span>1kg</span>
    <ul>
      <li><button>1kg</button></li>
      <li><button>2kg</button></li>
      <li><button>5kg</button></li>
    </ul>
  </div> <!-- box__item__choose -->`}
    
  <div class="box__item__choose">
   
      <div class="box__item__qua">
        <h5>Quantity:</h5>
      
        <div class="box__item__conut">
        <button onclick="removeItem()" class="minus">-</button>
          <input class="quantity" min="0" name="quantity" value="${showing.cont}" type="number">
          <button onclick="addItem()" class="plus">+</button>
        </div> <!-- box__item__conut -->
        
      </div> <!--box__item__qua  -->


      <div class="box__item__buy">
        <button class="box__item__buy--btn" onclick="addCart1()"> Add to cart</button>
        
        <button class="box__item__buy--btn btn2" onclick="addCart1()">Buy it now</button>
    
      
      </div> <!--box__item__buy  -->

      <div class="box__item__number">
        <h5>SKU:</h5>
        <span>7856-2-6-10</span>
      </div> <!--box__item__number  -->

      <div class="box__item__social">
  
        <ul class="d-flex g-3">
          <h5>Share:</h5>
          <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
        </ul>
       <ul>
        
       </ul>
      </div> <!-- box__item__social -->

      <div class="box__item__end">
<img src="images/trust_image.webp" alt="">
      </div> <!-- box__item__end -->

</div> <!--box__item__datiles  -->
</div> <!-- box__item -->
</div>
  
  
  `;


  toggle.innerHTML=toggleShoing

  var splide = new Splide( '#main-carousel', {
    pagination: false,
  } );
  
  
  var thumbnails = document.getElementsByClassName( 'thumbnail' );
  var current;
  
  
  for ( var i = 0; i < thumbnails.length; i++ ) {
    initThumbnail( thumbnails[ i ], i );
  }
  
  
  function initThumbnail( thumbnail, index ) {
    thumbnail.addEventListener( 'click', function () {
      splide.go( index );
    } );
  }
  
  
  splide.on( 'mounted move', function () {
    var thumbnail = thumbnails[ splide.index ];
  
  
    if ( thumbnail ) {
      if ( current ) {
        current.classList.remove( 'is-active' );
      }
  
  
      thumbnail.classList.add( 'is-active' );
      current = thumbnail;
    }
  } );
  
  
  splide.mount();
  

// gallery slider
}










function quicks(productArray, index) {
  let choose = productArray[index];
  localStorage.setItem("quickView", JSON.stringify(choose));
  console.log(choose);
}



 
// two proudct home
let proudctHome =document.querySelectorAll(".sec2 .sec2__list ul li")
 productArray=[]
let prodectHome = document.getElementById("prodectHome")
async function getData(kelma){
    const response= await fetch("./cars.json");
    const data =await response.json();
    productArray=data[kelma]
  

    displayProduct1(productArray)

}
getData(`Fresh fruits`);
proudctHome.forEach((element) => {
  element.addEventListener("click",function(select){
    getData(select.target.textContent);
    console.log(getData(select.target.textContent));
  })
  
});

function displayProduct1(productArray){

    let porductlist1=""
    for(let i = 0; i < productArray.length; i++){
        porductlist1 +=`

        <li class="splide__slide" <li class="splide__slide" data-aos="fade-up"
        data-aos-duration="600">
        
        <div class="sec2__items">
    
        <div class="sec2__item ">
    
        <div class="sec2__img">

         <div class="sec2__item__img__show">
        
           <div class="sec2__item__img__hide ">
             <div class="sec2__item__icon ">
      
          
             <div id="showing"   onclick="show(productArray, ${i})"   > <i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
             <div onclick="wishlist(productArray, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></div>
               </div> <!--sec2__item__icon  -->

               <div class="sec2__item__btn">
                 <button class="btn1" id="btn__show" onclick="cartShow(productArray, ${i})" ><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
               </div>
               <a href="./products.html"  onclick="quicks(productArray, ${i})">
               <img src="${productArray[i].imgs[1]}"   class="img-fluid" alt="" >
           </a>

           </div> <!-- sec2__item__img__hide-->

           <a href="./products.html" >
           <img src="${productArray[i].imgs[0]}"  class="img-fluid" alt="" >
       </a>

         </div> <!-- sec2__item__img__show-->
        </div> <!-- sec2__img -->

        <div class="sec2__item__icon d-xl-none d-flex">
      
        <ul>
        
          <li id="showing"   onclick="show(productArray, ${i})"  > <i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
          <li onclick="wishlist(productArray, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></li>
          <li onclick="cartShow(productArray, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
          
        </ul>

        </div> <!--sec2__item__icon  -->

<div class="sec2__item__text text-center">
 <h3>${productArray[i].tittle}</h3>
 <ul class="d-flex justify-content-center">
   <li><i class="fa-solid fa-star"></i></li>
   <li><i class="fa-solid fa-star"></i></li>
   <li><i class="fa-solid fa-star"></i></li>
   <li><i class="fa-solid fa-star"></i></li>
   <li><i class="fa-solid fa-star"></i></li>
 </ul>
 <span>€${productArray[i].price}</span>
 ${productArray[i].onsale ? `<span class="sec2__item__text--sale">€${productArray[i].sale}</span>` : ''}

</div>
   

        </div> <!-- sec2__item -->
     </div> <!--sec2__items  -->




      
      </li>
      
      
        
        `

    }
  
    prodectHome.innerHTML=porductlist1;
    new Splide('.sec2', {
      type: 'loop',
      perPage: 5,
      span: true,
      autoplay: true,
      interval: 3000,
      perMove: 1,
      breakpoints: {
        400: { perPage: 1 },
          640: { perPage: 2 },
          992: { perPage: 3 },
          1200: { perPage: 4 }
      }
  }).mount();


}






// *****************************
let lightBoxHtml = document.getElementById('lightBoxHtml');
let lightBoxH = document.getElementById('lightBoxH');
let exHtml = document.getElementById("exHtml");

exHtml.addEventListener("click", function(){
    hideLightBox3();
});


setTimeout(showSeb, 2000); 

function showSeb() {
    lightBoxHtml.style.display = "flex";
    setTimeout(() => {
        lightBoxHtml.style.opacity = 1; 
    }, 300); 
}

function hideLightBox3() {
    lightBoxHtml.style.opacity = 0; 
    setTimeout(() => {
        lightBoxHtml.style.display = "none"; 
    }, 500);
}

// *****************************
let playMusic = document.getElementById('playMusic');
let lightBoxShop = document.getElementById('lightBoxShop');
let exx = document.getElementById("exx");

exx.addEventListener("click", function(){
    hideLightBox2();
});

playMusic.addEventListener("click", showPlay);

function showPlay(){
    lightBoxShop.style.display = "flex";
    setTimeout(() => {
        lightBoxShop.style.opacity = 1; 
    }, 300); 
}

function hideLightBox2() {
    lightBoxShop.style.opacity = 0; 
    setTimeout(() => {
        lightBoxShop.style.display = "none"; 
    }, 500);
}

 productArray2=[]
 let prodectStpn =document.getElementById("prodectStpn")
async function getData74(kelma){
    const response= await fetch("./cars.json");
    const data =await response.json();
    productArray2=data[kelma]
  

    displayProduct74(productArray2)

}
getData74(`Sea & fish`);;

function displayProduct74(productArray){
 
    let porductlist1=""
    for(let i = 0; i < productArray.length; i++){
        porductlist1 +=`

        <li class="splide__slide" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="700" >
        <div class="sec2__items" >
    
        <div class="sec2__item">
    
        <div class="sec2__img">

         <div class="sec2__item__img__show" >
        
           <div class="sec2__item__img__hide ">
             <div class="sec2__item__icon ">
      
               
              
                 <div id="showing"   onclick="show(productArray2, ${i})"   > <i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
                 <div onclick="wishlist(productArray2, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></div>
               
               </div> <!--sec2__item__icon  -->

               <div class="sec2__item__btn">
                 <button class="btn1" id="btn__show" onclick="cartShow(productArray2, ${i})" ><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
               </div>
               <a href="./products.html" onclick="quicks(productArray2, ${i})" >
               <img src="${productArray[i].imgs[1]}"   class="img-fluid" alt="" >
           </a>

           </div> <!-- sec2__item__img__hide-->

           <a href="./products.html" >
           <img src="${productArray[i].imgs[0]}"  class="img-fluid" alt="" >
       </a>

         </div> <!-- sec2__item__img__show-->
        </div> <!-- sec2__img -->

        <div class="sec2__item__icon d-xl-none d-flex">
      
        <ul>
        
          <li id="showing"   onclick="show(productArray2, ${i})"   > <i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
          <li onclick="wishlist(productArray2, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></li>
          <li onclick="cartShow(productArray2, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
          
        </ul>

        </div> <!--sec2__item__icon  -->

<div class="sec2__item__text text-center">
 <h3>${productArray[i].tittle}</h3>
 <ul class="d-flex justify-content-center">
   <li><i class="fa-solid fa-star"></i></li>
   <li><i class="fa-solid fa-star"></i></li>
   <li><i class="fa-solid fa-star"></i></li>
   <li><i class="fa-solid fa-star"></i></li>
   <li><i class="fa-solid fa-star"></i></li>
 </ul>
 <span>€${productArray[i].price}</span>
 ${productArray[i].onsale ? `<span class="sec2__item__text--sale">€${productArray[i].sale}</span>` : ''}

</div>
   

        </div> <!-- sec2__item -->
     </div> <!--sec2__items  -->



      
      </li>
      
      
        
        `

    }
  
    prodectStpn.innerHTML=porductlist1;
    new Splide('.sec4', {
      type: 'loop',
      perPage: 5,
      span: true,
      autoplay: true,
      interval: 2000,
      perMove: 1,
      breakpoints: {
        400: { perPage: 1 },
          640: { perPage: 2 },
          992: { perPage: 3 },
          1200: { perPage: 4 }
      }
  }).mount();


}


