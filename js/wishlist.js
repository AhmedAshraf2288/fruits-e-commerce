let whichListAll =document.getElementById("whichListAll")
let whichcount =document.getElementById("whichcount")
let whishlist = JSON.parse(localStorage.getItem("whishlist")) || [];
whichcount.textContent=whishlist.length

function wishlist(productArray, index) {
  let chosenItem = productArray[index];

  console.log(chosenItem);

  let find = whishlist.find(item => item.id === chosenItem.id);
  if (find) {

  } else {
      whishlist.push(chosenItem); 
  }

  whichcount.textContent = whishlist.length;
  localStorage.setItem('whishlist', JSON.stringify(whishlist));
}



function quicks3(index){
    let choose =whishlist[index];
    localStorage.setItem("quickView", JSON.stringify(choose))
  }

function displaywhichlist(){
    whichListList=''
    for(let i=0 ; i<whishlist.length ; i++){
        whichListList +=`
        
        <div class="col-12" >
        <div class="cart__item cart_view cart__list">
<div class="cart__item__list">
<div class="cart__item__img">
<a href="./products.html" onclick="quicks3(${i})" >
<img src="${whishlist[i].imgs[0]}"   class="img-fluid" alt="" >
</a>
</div> <!-- cart__item__img -->

<div class="cart__item__text align-items-center">
<h3>${whishlist[i].tittle}</h3>


</div> <!-- cart__item__text -->
</div> <!-- cart__item__list -->

          <div class="cart__item__price">
          <p>${whishlist[i].price}€</p>
            <i onclick="delWhichList(${i})" class="fa-solid fa-xmark cart__item__price__x" ></i>
          </div>              
          </div> <!--cart__item  -->
      </div> <!-- col -->

        
        
        `

    }
    whichListAll.innerHTML = whichListList
}

let whishCount =document.getElementById("whishCount")
 whishCount.textContent=whishlist.length+" item"

function delWhichList(index){
    whishlist.splice(index, 1)
    localStorage.setItem('whishlist', JSON.stringify(whishlist));
    displaywhichlist()
 whishCount.textContent=whishlist.length+" item"
 location.reload()

    
}
let whishClear = document.getElementById("whishClear")
whishClear.addEventListener("click",function(){
    whishlist.splice(0)
    localStorage.setItem('whishlist', JSON.stringify(whishlist));
    displaywhichlist()
 whishCount.textContent=whishlist.length+" item"
location.reload()

})




    let whish = document.getElementById("whish");
let whishListNone = document.getElementById("whishListNone")
let whishClearNone = document.getElementById("whishClearNone")


    if (whishlist === null || whishlist.length === 0) {
        whish.innerHTML = `
        <div class="whishnone" data-aos="zoom-in-down" data-aos-duration="1000">

            <h3>
              <p>Your</p>
              <span>wishlist</span>
              <p>is currently</p>
              <span>empty!</span>
            </h3>
            <h4>Continue browsing  <a href="shop.html">here.</a></h4>
          </div> <!-- whishnone -->
        
        `;
        whishListNone.classList.add("clear");
        whishClearNone.classList.add("clear2");

        
   
    } else {
        displaywhichlist()
        whishListNone.classList.remove("clear");
        whishClearNone.classList.remove("clear2");
    }

