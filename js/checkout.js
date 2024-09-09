let checkoutButton = document.getElementById("checkoutButton");
let subTotal = 0;
// checkoutButton.addEventListener("click",displayCheckedItems)

let displayChecked = document.getElementById("displayChecked");






displayCheckedItems()


function displayCheckedItems() {
    let checkChcek = "";

    for (let i = 0; i < cartData.length; i++) {
        checkChcek += `
            <div class="check">
                <div class="cart__item cart_view ">
                    <div class="check__item__img">
                        <span>${cartData[i].cont}</span>
                        <a href="./products.html" onclick="quicks2(${i})">
                            <img src="${cartData[i].imgs[1]}" class="img-fluid" alt="">
                        </a>
                    </div>
                    <div class="cart__item__text  check__item__text">
                        <h3>${cartData[i].tittle}</h3>
                        <p>€${(cartData[i].price * cartData[i].cont)}</p>
                    </div>
                </div>
            </div>`;
        
     
        subTotal += cartData[i].price * cartData[i].cont;
    }

  
    displayChecked.innerHTML = checkChcek;
   

    let subTotalElement = document.getElementById("subTotal");

    subTotalElement.textContent = `€${subTotal}`; 

let totalCheck = document.getElementById("totalCheck");
let totalAmount = subTotal + 16.77; 
totalAmount = Math.round(totalAmount); 
totalCheck.textContent = `€${totalAmount}`;

 
}
// **********************************












// **********************************
// function toggleCheck(){

//     const showing = JSON.parse(localStorage.getItem("showing")) || {};
//     checkedList1=`
 
        
//     <div class="check">
//         <div class="cart__item cart_view d-flex justify-content-around">
//           <div class=" check__item__img">
//             <span>5</span>
//             <a href="./products.html" onclick="" >
//             <img src="${showing.imgs[0]}"   class="img-fluid" alt="" >
//         </a>
//           </div> <!-- check__item__img -->
  
//           <div class="cart__item__text d-flex flex-column justify-content-center align-items-center check__item__text">
//             <h3>Fresh mango</h3>
//             <p>€18.00</p>
//           </div> <!-- cart__item__text -->

//         </div> <!--cart__item  -->

 
// </div> <!-- check -->
//     `
    


// checkedd.innerHTML = checkedList1;

    
// }
    
    


// (function toggleQuick(){

//     const quickView = JSON.parse(localStorage.getItem("quickView")) || {};
//     checkedList2=`
 
        
//     <div class="check">
//         <div class="cart__item cart_view d-flex justify-content-around">
//           <div class=" check__item__img">
//             <span>5</span>
//             <a href="./products.html" onclick="" >
//             <img src="${quickView.imgs[0]}"   class="img-fluid" alt="" >
//         </a>
//           </div> <!-- check__item__img -->
  
//           <div class="cart__item__text d-flex flex-column justify-content-center align-items-center check__item__text">
//             <h3>Fresh mango</h3>
//             <p>€18.00</p>
//           </div> <!-- cart__item__text -->

//         </div> <!--cart__item  -->

 
// </div> <!-- check -->
//     `
    



// checkedd.innerHTML = checkedList2;

    
// })()
    