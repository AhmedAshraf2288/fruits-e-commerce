// quick view deatiles

let rowViwe =document.getElementById("rowViwe")





function addCart() {
  setTimeout(() => {
    let quickViewData = JSON.parse(localStorage.getItem("quickView")); 

    let find = cartData.find((item) => item.id === quickViewData.id);
    if (find) {
      find.cont = quickViewData.cont;
    } else {
      cartData.push(quickViewData);
    }

    localStorage.setItem("cartData", JSON.stringify(cartData));

    cartCount.textContent = cartData.length;
    displayCart();
    toggleCart();
    displayCart2();
  }, 200);
}




let quickView = JSON.parse(localStorage.getItem("quickView")) 
function removeCounts() {
  if (quickView.cont > 0) {
    quickView.cont--;
    updateQuantities();
  }
}

function addCounts() {
  quickView.cont++;
  updateQuantities();
}

function updateQuantities() {
  localStorage.setItem("quickView", JSON.stringify(quickView));

  displayView();
}



displayView()
function displayView(){
  let quickView=JSON.parse(localStorage.getItem("quickView")) 
  viewList=""
  viewList = `
  
  <div class="col-lg-4 col-md-5 my-4">
  <section id="main-carousels" class="splide product_sec1" aria-label="My Awesome Gallery" >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <img src="${quickView.imgs[0]}" alt="">
        </li>
        <li class="splide__slide">
          <img src="${quickView.imgs[1]}" alt="">
        </li>
        <li class="splide__slide">
          <img src="${quickView.imgs[2]}" alt="">
        </li>
        <li class="splide__slide">
          <img src="${quickView.imgs[3]}" alt="">
        </li>
      </ul>
    </div>
  </section>
  
  
  <ul id="thumbnails" class="thumbnails">
    <li class="thumbnail">
      <img src="${quickView.imgs[0]}" alt="">
    </li>
    <li class="thumbnail">
      <img src="${quickView.imgs[1]}" alt="">
    </li>
    <li class="thumbnail">
      <img src="${quickView.imgs[2]}" alt="">
    </li>
    <li class="thumbnail">
      <img src="${quickView.imgs[3]}" alt="">
    </li>
  </ul>
</div>

<div class="col-lg-5 col-md-7 " >
<div class="box__item box-item__product">
<div class="box__item__text">
  <h3>${quickView.tittle}</h3>

  <ul class="d-flex pt-3">
      <li><i class="fa-solid fa-star"></i></li>
      <li><i class="fa-solid fa-star"></i></li>
      <li><i class="fa-solid fa-star"></i></li>
      <li><i class="fa-solid fa-star"></i></li>
      <li><i class="fa-solid fa-star"></i></li>
    </ul>
</div><!-- box__item__text -->
<div class="box__item__datiles">
  <h4>Availability:</h4>
  <svg width="15" height="15" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="7.5" fill="rgb(62,214,96, 0.3)"></circle>
    <circle cx="7.5" cy="7.5" r="5" stroke="rgb(255, 255, 255)" stroke-width="1" fill="rgb(62,214,96)"></circle>
  </svg>
  <span>20 in stock</span>
  <div class="box__item_onsale">
  <p class=" d-inline">€${quickView.price}</p>
  ${quickView.onsale ? `<span class="sec2__item__text--sale">€${quickView.sale}</span>` : ''}
  </div>


  <div class="box__item__choose">
    <h5>Material:</h5>
    <span>canada</span>
    <ul>
      <li><button >canada</button></li>
      <li><button>india</button></li>
      <li><button>germany</button></li>
    </ul>
  </div> <!-- box__item__choose -->

  <div class="box__item__choose">
    <h5>Size:</h5>
    <span>1kg</span>
    <ul>
      <li><button>1kg</button></li>
      <li><button>2kg</button></li>
      <li><button>5kg</button></li>
    </ul>
  </div> <!-- box__item__choose -->
      <div class="box__item__qua">
        <h5>Quantity:</h5>
        <div class="box__item__conut">
        <button onclick="removeCounts()" class="minus">-</button>
          <input class="quantity" min="0" name="quantity" value="${quickView.cont}" type="number">
          <button onclick="addCounts()" class="plus">+</button>
        </div> <!-- box__item__conut -->
      </div> <!--box__item__qua  -->


      <div class="box__item__buy">
        <button class="box__item__buy--btn"  onclick="addCart()" > Add to cart</button>
        <a ><button class="box__item__buy--btn btn2" onclick="addCart()" >Buy it now</button></a>

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

<div class="col-lg-3" >

  
  <div class="product__card">
      <div class="product__card__icon">
          <span><i><i class="fa-solid fa-truck-moving"></i></i></span>
      </div> <!-- product__card__icon -->
      <div class="product__card__text">
          <h5>DELIVERY INFO</h5>
          <p>From then, delivery is generally within 2-10 days, depending on your location.</p>
      </div> <!--  product__card__text-->
  </div> <!--product__card  -->




<div class="product__card">
  <div class="product__card__icon">
      <span><i><i class="fa-solid fa-dollar-sign"></i></i></span>
  </div> <!-- product__card__icon -->
  <div class="product__card__text">
      <h5>30 DAYS RETURNS</h5>
      <p>Not the right fit? No worries. We'll arrange pick up and a full refund within 7 days including the delivery fee.</p>
     </div> <!--  product__card__text-->
     </div> <!-- product__card -->



<div class="product__card">
  <div class="product__card__icon">
      <span><i><i class="fa-regular fa-address-card"></i></i></span>
  </div> <!-- product__card__icon -->
  <div class="product__card__text">
      <h5>10 YEAR WARRANTY</h5>
      <p>Quality comes first and our products are designed to last.</p>
  </div> <!--product__card__text  -->
</div> <!--product__card  -->


</div >
  
  `
  rowViwe.innerHTML=viewList

  var splide = new Splide( '#main-carousels', {
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
}

// *************************************************
// let closeIcon=document.getElementById( 'close-icon' );
// closeIcon.addEventListener( 'click', function () {
  
// }
// )
function toggleCart() {
  var cartContainer = document.getElementById("cartContainer");

  if (cartContainer.style.right === "0px") {
      cartContainer.style.right = "-360px";
  } else {
      cartContainer.style.right = "0px";
  }
  displayCart()      
  

}

// let getCart=document.getElementById("getCart");
// let closeCart=document.getElementById("closeCart");

// getCart.addEventListener("click",toggleCart)
// closeCart.addEventListener("click",toggleCart)


// *************************************************
let reviwe =document.getElementById("reviwe");

let hiddenReviwe =document.getElementById("hiddenReviwe")
let hiddenReviwe2 =document.getElementById("hiddenReviwe2")
let reviweNum= document.getElementById("reviweNum")
reviwe.addEventListener("click",function(){
  if (hiddenReviwe.classList.toggle("hidden") ) {
    reviweNum.textContent = `Based on 1 reviews`;
} else {
    reviweNum.textContent = `Based on 0 review`;
}
hiddenReviwe2.classList.toggle("hidden")

})
// *******************************************************
productArrayOne=[]
let seggProduct =document.getElementById("seggProduct")
async function getData14(kelma){
   const response= await fetch("./cars.json");
   const data =await response.json();
   productArrayOne=data[kelma]
 

   displayProduct14(productArrayOne)

}
getData14(`Fresh vegetable`);;

function displayProduct14(productArray){

   let porductlist1=""
   for(let i = 0; i < productArray.length; i++){
       porductlist1 +=`

       <li class="splide__slide" data-aos="fade-down"
       data-aos-anchor-placement="center-bottom"
       data-aos-duration="1000">
       <div class="sec2__items">
   
       <div class="sec2__item ">
   
       <div class="sec2__img">

        <div class="sec2__item__img__show">
       
          <div class="sec2__item__img__hide ">
            <div class="sec2__item__icon ">
     
              
             
                <div id="showing"   onclick="show(productArrayOne, ${i})"   > <i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
                <div onclick="wishlist(productArrayOne, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></div>
              
              </div> <!--sec2__item__icon  -->

              <div class="sec2__item__btn">
                <button class="btn1" id="btn__show" onclick="cartShow(productArrayOne, ${i})" ><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
              </div>
              <a href="./products.html" onclick="quicks(productArrayOne, ${i})" >
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
       
         <li id="showing" onclick="show(productArrayOne, ${i})"   > <i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
         <li onclick="wishlist(productArrayOne, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></li>
         <li onclick="cartShow(productArrayOne, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
         
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
 
   seggProduct.innerHTML=porductlist1;
   new Splide('.secproduct', {
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


function toggleProduct(){

  const showing = JSON.parse(localStorage.getItem("showing")) || {};
  toggleShoing=""
  toggleShoing =`
  
  <div class="col-lg-5 " >
  <section id="main-carousels" class="splide" aria-label="My Awesome Gallery" >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide" >
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
  <p >€${showing.price}</p>
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

  <div class="box__item__choose">
    <h5>Size:</h5>
    <span>1kg</span>
    <ul>
      <li><button>1kg</button></li>
      <li><button>2kg</button></li>
      <li><button>5kg</button></li>
    </ul>
  </div> <!-- box__item__choose -->
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
        
        <button class="box__item__buy--btn btn2"  onclick="addCart1()">Buy it now</button>
    
      
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

  var splide = new Splide( '#main-carousels', {
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


