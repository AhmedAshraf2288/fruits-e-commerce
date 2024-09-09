let cartCount=document.getElementById("cartCount")
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
cartCount.textContent=cartData.length



let cartShowing = document.getElementById("cartShowing");

function cartShow(productArray, index) {
  setTimeout(() => {
    let chosenCart = productArray[index];

    console.log(cartData);

    let find = cartData.find(item => item.id === chosenCart.id);
    if (find) {
      find.cont++;
    } else {
      cartData.push(chosenCart);
    }
    cartCount.textContent = cartData.length;

    localStorage.setItem('cartData', JSON.stringify(cartData));
    toggleCart();
    displayCart();
    displayCart2();

   

  }, 200); 
}







function quicks2(index){
  let choose =cartData[index];
  localStorage.setItem("quickView", JSON.stringify(choose))
}




function displayCart() {
  let cartss = document.getElementById("cartss");
  let whishnone = document.querySelector("#whishnone");
  let what = document.getElementById("what");
  let cartList = "";

  if (!cartData || cartData.length === 0) {
    cartss.innerHTML = `
      <div class="whishnone" id="whishnone" data-aos="zoom-in-up" data-aos-duration="1000">
        <h3>
          <p>Your</p>
          <span>cart </span>
          <p>is currently</p>
          <span>empty!</span>
        </h3>
        <h4>Continue browsing  <a href="shop.html">here.</a></h4>
      </div> <!-- whishnone -->
    `;
    what.classList.add("whot");
    cartss.classList.add("clear2");
  } else {
    what.classList.remove("whot");
    cartss.classList.remove("clear2");
    // whishnone.classList.add("clear2");
    cartss.innerHTML = ``;
    for (let i = 0; i < cartData.length; i++) {
      cartList += `
        <div class="" >
          <div class="cart__item">
            <i onclick="deleteProduct(${i})" class="fa-solid fa-trash  px-3"></i></td>
            <div class="cart__item__img">
              <a href="./products.html" onclick="quicks2(${i})" >
                <img src="${cartData[i].imgs[1]}" class="img-fluid" alt="">
              </a>
            </div> <!-- cart__item__img -->
            <div class="cart__item__text">
            <h3>${cartData[i].tittle.slice(0,13)}..</h3>
              <p>€${cartData[i].price}</p>
              <div class="box__item__qua">
                <div class="box__item__conut">
                  <button onclick="removeCount(${i})" class="minus">-</button>
                  <input class="quantity" min="0" name="quantity" value="${cartData[i].cont}" type="number">
                  <button onclick="addCount(${i})" class="plus">+</button>
                </div> <!-- box__item__conut -->
              </div> <!--box__item__qua  -->
            </div> <!-- cart__item__text -->
          </div> <!--cart__item  -->
        </div> <!-- col -->
      `;
    }
  }

  cartShowing.innerHTML = cartList;
  totalPrice();
}



function deleteProduct(index){

  // if(cartData[index].cont>0){
  //   cartData[index].cont--
  // }
  // else{
    cartData.splice(index, 1)
  // }
  localStorage.setItem("cartData",JSON.stringify(cartData))
  cartCount.textContent=cartData.length
  displayCart()
  displayCart2()
  location.reload()
}


function removeCount(index){
cartData[index].cont > 0 ? cartData[index].cont-- :    cartData.splice(index, 1);
  localStorage.setItem("cartData",JSON.stringify(cartData))
  cartCount.textContent=cartData.length
  displayCart()
  displayCart2()

}

function addCount(index){
  cartData[index].cont >= 0 ? cartData[index].cont++ : ``;
    localStorage.setItem("cartData",JSON.stringify(cartData))
    displayCart()
    displayCart2()
  }
  
let price = document.getElementById("price")

function totalPrice(){
  total=0
  for(var i=0; i<cartData.length; i++){
    total += cartData[i].price*cartData[i].cont
  }
price.innerHTML=total+`$`


}
let prices = document.getElementById("prices")


totalPrices() 
function totalPrices(){
  total=0
  for(var i=0; i<cartData.length; i++){
    total += cartData[i].price*cartData[i].cont
  }
  // prices2.textContent=total+`$`
prices.innerHTML=total+`$`


}







let cartView = document.getElementById("cartView");
let cartViewEnb = document.getElementById("cartViewEnb");
displayCart2()
function displayCart2(){

    let cartViewList = "";
    let cartViewListEnd ="";
    for (let i=0; i<cartData.length; i++){


        cartViewList+=`


            
            <tr class="cart-item">
                <td>
                    <div class="row">
                        <div class="col">
                            <div class="cart__item cart_view">
                              <div class="cart__item__img">
                              <a href="./products.html" onclick="quicks2(${i})" >
                              <img src="${cartData[i].imgs[1]}"   class="img-fluid" alt="" >
                          </a>
                              </div> <!-- cart__item__img -->
                      
                              <div class="cart__item__text align-items-center">
                              <h3>${cartData[i].tittle.slice(0,13)}..</h3>
                              <p>€${cartData[i].price}</p>            
                              </div> <!-- cart__item__text -->
                            </div> <!--cart__item  -->
                          </div> <!-- col -->
                        
                    </div>
                </td>
                <td>
                <div class="box__item__qua">
                <div class="box__item__conut">
                  <button onclick="removeCount(${i})" class="minus">-</button>
                  <input class="quantity" min="0" name="quantity" value="${cartData[i].cont}" type="number">
                  <button onclick="addCount(${i})" class="plus">+</button>
                </div> <!-- box__item__conut -->
                <i onclick="deleteProduct(${i})" class="fa-solid fa-trash  px-3"></i></td>
                
              </div> <!--box__item__qua  -->
                </td>
                <td>  
                    
                <h5 id="priceone">$${(cartData[i].price * cartData[i].cont)}</h5>
                    </td>
            
            </tr>
      
  
        
        `
        cartViewListEnd +=`

        <div class="cartend" >
        <div class="container">
          <div class="row flex-column">
          <div class="col">
          <div class="cart__item cart_view">
            <div class="cart__item__img">
            <a href="./products.html" onclick="quicks2(${i})" >
            <img src="${cartData[i].imgs[1]}"   class="img-fluid" alt="" >
        </a>
            </div> <!-- cart__item__img -->
    
            <div class="cart__item__text align-items-center">
            <h3>${cartData[i].tittle.slice(0,13)}..</h3>
            <p>€${cartData[i].price}</p>  
            </div> <!-- cart__item__text -->
          </div> <!--cart__item  -->
        </div> <!-- col -->
  
  
        <div class="col">
          <div class="box__item__qua">
          <div class="box__item__conut">
            <button onclick="removeCount(${i})" class="minus">-</button>
            <input class="quantity" min="0" name="quantity" value="${cartData[i].cont}" type="number">
            <button onclick="addCount(${i})" class="plus">+</button>
          </div> <!-- box__item__conut -->
          <i onclick="deleteProduct(${i})" class="fa-solid fa-trash  px-3"></i></td>
          
        </div> <!--box__item__qua  -->
        </div> <!-- col -->
  
        <div class="col">
          <h5 id="priceone">$${(cartData[i].price * cartData[i].cont)}</h5>
        </div>
          </div>
        </div>
       </div>

     

        
        
        `




    }
    prices.innerHTML=total+`$`
    cartView.innerHTML = cartViewList;
    cartViewEnb.innerHTML = cartViewListEnd;


}


  let cartViewAll = document.getElementById("cartViewAll")
  let endCheck =document.getElementById("endCheck")
  let carts = document.getElementById("carts");
  
  if (cartData === null || cartData.length === 0) {
    carts.innerHTML = `
      <div class="whishnone" data-aos="zoom-in-up" data-aos-duration="1000">
          <h3>
            <p>Your</p>
            <span>cart </span>
            <p>is currently</p>
            <span>empty!</span>
          </h3>
          <h4>Continue browsing  <a href="shop.html">here.</a></h4>
        </div> <!-- whishnone -->
      `;
  
    cartViewAll.classList.add("clear");
    endCheck.classList.add("clear");
    
  
  } else {
    displayCart2();
    endCheck.classList.remove("clear");
    cartViewAll.classList.add("clear");
  
  
  }








let coluction = document.getElementById("coluction");
let tab1 = document.getElementById("tab1");

coluction.addEventListener("click", function() {
  tab1.classList.add("show");
});


