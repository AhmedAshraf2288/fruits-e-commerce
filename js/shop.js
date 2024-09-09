function setupPriceFilter(priceFilter) {
    let priceInputs = priceFilter.querySelectorAll(".price-input input");
    let rangeInputs = priceFilter.querySelectorAll(".range-input input");
    let range = priceFilter.querySelector(".slider .progress");

    function updateRange() {
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal = parseInt(rangeInputs[1].value);

        range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
        range.style.width = ((maxVal - minVal) / rangeInputs[1].max) * 100 + "%";

        priceInputs[0].value = minVal;
        priceInputs[1].value = maxVal;
    }

    priceInputs.forEach((input) => {
        input.addEventListener("input", () => {
            let minPrice = parseInt(priceInputs[0].value);
            let maxPrice = parseInt(priceInputs[1].value);

            if (maxPrice >= minPrice && maxPrice <= rangeInputs[1].max) {
                rangeInputs[0].value = minPrice;
                rangeInputs[1].value = maxPrice;

                updateRange();
            }
        });
    });

    rangeInputs.forEach((input) => {
        input.addEventListener("input", () => {
            updateRange();
        });
    });
    
    updateRange();
}

// Select and setup both price filter sections
let priceFilters = document.querySelectorAll('.shop__filter__list3');
priceFilters.forEach(priceFilter => {
    setupPriceFilter(priceFilter);
});







// ***************************************
document.addEventListener("DOMContentLoaded",function(){
    const listshop=document.querySelectorAll(".shop__all ul li")
    
              listshop.forEach((element) => {
              element.addEventListener("click",function(){
              listshop.forEach((remove)=>{
              remove.classList.remove("active")
            })
            element.classList.add("active")

        })
 
    });
    })

    let getFitler=document.getElementById("getFitler")
    let colseIcon=document.getElementById("colseIcon")
    getFitler.addEventListener("click",toggleCart2)
    colseIcon.addEventListener("click",toggleCart2)


    function toggleCart2() {
        var cartContainer = document.getElementById("cartContainer2");
      
        if (cartContainer.style.left === "0px") {
            cartContainer.style.left = "-360px";
        } else {
            cartContainer.style.left = "0px";
        }
    
        
      
      }



// *************************************




document.addEventListener("DOMContentLoaded",function(){
    const listshop=document.querySelectorAll(".shop .shop__filter__list1 ul li")
    
              listshop.forEach((element) => {
              element.addEventListener("click",function(){
              listshop.forEach((remove)=>{
              remove.classList.remove("active")
            })
            element.classList.add("active")

        })
 
    });
    })
    document.addEventListener("DOMContentLoaded",function(){
        const listshop=document.querySelectorAll(".shop__filter__list--up ul li")
        
                  listshop.forEach((element) => {
                  element.addEventListener("click",function(){
                  listshop.forEach((remove)=>{
                  remove.classList.remove("active")
                })
                element.classList.add("active")
         
            })
        
        });
        })
      
        document.addEventListener("DOMContentLoaded", function() {
            const listshop1 = document.querySelectorAll(".shop__filter__list--up ul li");
        
            listshop1.forEach((element) => {
                element.addEventListener("click", function() {
                    listshop1.forEach((remove) => {
                        remove.classList.remove("active");
                    });
                    element.classList.add("active");
                });
            });
        
            const listshop2 = document.querySelectorAll(".shop__filter__list--up ul li");
        
            listshop2.forEach((element) => {
                element.addEventListener("click", function() {
                    listshop2.forEach((remove) => {
                        remove.classList.remove("active");
                    });
                    element.classList.add("active");
                });
            });
        
            const listshop3 = document.querySelectorAll(".shop__filter__list--up ul li");
        
            listshop2.forEach((element) => {
                element.addEventListener("click", function() {
                    listshop2.forEach((remove) => {
                        remove.classList.remove("active");
                    });
                    element.classList.add("active");
                });
            });
        
            const listshop4 = document.querySelectorAll(".shop__filter__list--up ul li");
        
            listshop2.forEach((element) => {
                element.addEventListener("click", function() {
                    listshop2.forEach((remove) => {
                        remove.classList.remove("active");
                    });
                    element.classList.add("active");
                });
            });
            const listshop5 = document.querySelectorAll(".shop__filter__list--up .wrapper");
        
            listshop2.forEach((element) => {
                element.addEventListener("click", function() {
                    listshop2.forEach((remove) => {
                        remove.classList.remove("active");
                    });
                    element.classList.add("active");
                });
            });
        
        
            // Add event listener to the reset span for .shop__filter__list2
            const delFilter1 = document.getElementById('delFilter1');
            delFilter1.addEventListener("click", delF1);
        
            // Add event listener to the reset span for .shop__filter__list4
            const delFilter2 = document.getElementById('delFilter2');
            delFilter2.addEventListener("click", delF2);
            const delFilter3 = document.getElementById('delFilter3');
            delFilter3.addEventListener("click", delF3);
            const delFilter4 = document.getElementById('delFilter4');
            delFilter4.addEventListener("click", delF4);
        
        });
        
        function delF1() {
            const activeItems = document.querySelectorAll(".shop__filter__list--up ul li.active");
            activeItems.forEach((remove) => {
                remove.classList.remove("active");
               
        
            });
        }
        
        function delF2() {
            const activeItems = document.querySelectorAll(".shop__filter__list--up li.active");
            activeItems.forEach((remove) => {
                remove.classList.remove("active");
           
            });
        }
        
        function delF3() {
            const activeItems = document.querySelectorAll(".shop__filter__list--up li.active");
            activeItems.forEach((remove) => {
                remove.classList.remove("active");
             
            });
        }
        
        function delF4() {
            const activeItems = document.querySelectorAll(".shop__filter__list--up li.active");
            activeItems.forEach((remove) => {
                remove.classList.remove("active");
             
            });
        }
      
        //restert all 
document.addEventListener("DOMContentLoaded", function() {
    const listshopItems = document.querySelectorAll(".shop__filter__list--up ul li");

    listshopItems.forEach((element) => {
        element.addEventListener("click", function() {
            listshopItems.forEach((remove) => {
                remove.classList.remove("active");
            });
            element.classList.add("active");
        });
    });

    
    const resetButtons = document.querySelectorAll('.shop__filter__list--up span[id^="delFilter"]');
    resetButtons.forEach(button => {
        button.addEventListener("click", function() {
            resetFilters();
        });
    });
});


function resetFilters() {
    const activeItems = document.querySelectorAll(".shop__filter__list--up ul li.active");
    activeItems.forEach((remove) => {
        remove.classList.remove("active");
    });
    location.reload();
}


// restert ranges
document.addEventListener("DOMContentLoaded", function() {

    const resetButton = document.getElementById("delFilter5");
  
 
    const minRangeInput = document.querySelector(".min-range");
    const maxRangeInput = document.querySelector(".max-range");
    const minNumberInput = document.querySelector(".min-input");
    const maxNumberInput = document.querySelector(".max-input");
  

    function resetPriceFilters() {
     
      minRangeInput.value = 0;
      maxRangeInput.value = 60;
  

      minNumberInput.value = 0;
      maxNumberInput.value = 60;
      location.reload()

      minRangeInput.dispatchEvent(new Event('change'));
      maxRangeInput.dispatchEvent(new Event('change'));
    }
  

    resetButton.addEventListener("click", resetPriceFilters);
  });
            



                

          
  let shopProductText = document.getElementById("shopProductText");
  let productItem = document.getElementById("productItem");
  let productArray3 = [];
  let currentDisplayMode = 'grid'; 
  
  function getDataWithDelay(kelma) {
      getData1(kelma);
  }
  
  async function getData1(kelma) {
      const response = await fetch("./cars.json");
      const data = await response.json();
      productArray3 = data[kelma];
      displayShop(productArray3, currentDisplayMode); 
  }
  
  getDataWithDelay('Fresh fruits');
  
  let proudctShop = document.querySelectorAll(".shop__filter__list1 li input[type='checkbox']");
  proudctShop.forEach((checkbox) => {
      checkbox.addEventListener("change", function(event) {
          if (event.target.checked) {
              let labelText = event.target.nextElementSibling.textContent;
              shopProductText.innerHTML = labelText;
              delF1();
              delF2();
              delF3();
              delF1();
              getDataWithDelay(labelText);
          }
  
          var cartContainer = document.getElementById("cartContainer2");
          if (cartContainer.style.left === "0px") {
              toggleCart2();
          }
      });
  });
  
  let labels = document.querySelectorAll(".shop__filter__list1 li label");
  labels.forEach((label) => {
      label.addEventListener("click", function(event) {
          let checkboxId = event.target.getAttribute("for");
          let checkbox = document.getElementById(checkboxId);
          checkbox.click();
      });
  });
  
  let gridViewButton = document.getElementById("gridView");
  let listViewButton = document.getElementById("listView");
  
  gridViewButton.addEventListener("click", function() {
      currentDisplayMode = 'grid'; 
      displayShop(productArray3, currentDisplayMode);
  });
  
  listViewButton.addEventListener("click", function() {
      currentDisplayMode = 'list'; 
      displayShop(productArray3, currentDisplayMode);
  });
  

// *************************************
// checkboxes choose one only
                    let checkboxes = document.querySelectorAll(".shop__filter input[type='checkbox']");

function handleCheckboxSelection(event) {
    checkboxes.forEach((checkbox) => {
        if (checkbox !== event.target) {
            checkbox.checked = false;
        }
    });
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxSelection);
});
// *************************************
const citysSelect = document.getElementById("citys");

citysSelect.addEventListener("change", function() {
    const selectedOption = citysSelect.value;
     productArray30= [];
    switch(selectedOption) {
        case "Alphabetically, A-Z":
            productArray30 = productArray3.slice().sort((a, b) => a.tittle.localeCompare(b.tittle));
            break;
        case "Alphabetically, Z-A":
            productArray30 = productArray3.slice().sort((a, b) => b.tittle.localeCompare(a.tittle));
            break;
        case "giza":
            productArray30 = productArray3.slice().sort((a, b) => a.price - b.price);
            break;
        case "port_said":
            productArray30 = productArray3.slice().sort((a, b) => b.price - a.price);
            break;
        default:
            productArray30 = productArray3; 
            break;
    }

    function displayShop(productArray) {
        let shopList = "";

  
     
          for (let i = 0; i < productArray.length; i++){
              shopList +=`
                            
              <div class="col-xl-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
              <div class="sec2__items">
  
              <div class="sec2__item ">
          
              <div class="sec2__img">
      
               <div class="sec2__item__img__show">
              
                 <div class="sec2__item__img__hide ">
                   <div class="sec2__item__icon sec2__item__icon2 ">
            
                   
   <div id="showing"   onclick="show(productArray30, ${i})"   > <i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
   <div onclick="wishlist(productArray30, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></div>
           
                     </div> <!--sec2__item__icon sec2__item__icon2  -->
      
                     <div class="sec2__item__btn">
                       <button class="btn1" id="btn__show" onclick="cartShow(productArray30, ${i})" ><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                     </div>
                     <a href="./products.html" onclick="quicks(productArray30, ${i})" >
                     <img src="${productArray[i].imgs[1]}"   class="img-fluid" alt="" >
                 </a>
      
                 </div> <!-- sec2__item__img__hide-->
      
                 <a href="./products.html" >
                 <img src="${productArray[i].imgs[0]}"  class="img-fluid" alt="" >
             </a>
      
               </div> <!-- sec2__item__img__show-->
              </div> <!-- sec2__img -->
      
              <div class="sec2__item__icon sec2__item__icon2 d-xl-none d-flex">
            
              <ul>
              
                <li id="showing"   onclick="show(productArray30, ${i})"  > <i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
                <li onclick="wishlist(productArray30, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></li>
                <li onclick="cartShow(productArray30, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
                
              </ul>
      
              </div> <!--sec2__item__icon sec2__item__icon2  -->
      
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
         
             </div>
              
              `
  
          productItem.innerHTML = shopList;
  }
    }
  


    displayShop(productArray30, 'grid');
});





function displayShop(productArray, view){
    let shopList = "";
    
    for (let i = 0; i < productArray.length; i++){
        
        if(view === 'grid') {
            shopList += `
                          
            <div class="col-xl-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
            <div class="sec2__items">

            <div class="sec2__item ">
        
            <div class="sec2__img">
    
             <div class="sec2__item__img__show">
            
               <div class="sec2__item__img__hide ">
                 <div class="sec2__item__icon sec2__item__icon2 ">
          
                 
 <div id="showing"   onclick="show(productArray3, ${i})"   > <i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
 <div onclick="wishlist(productArray3, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></div>
         
                   </div> <!--sec2__item__icon sec2__item__icon2  -->
    
                   <div class="sec2__item__btn">
                     <button class="btn1" id="btn__show" onclick="cartShow(productArray3, ${i})" ><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                   </div>
                   <a href="./products.html" onclick="quicks(productArray3, ${i})" >
                   <img src="${productArray[i].imgs[1]}"   class="img-fluid" alt="" >
               </a>
    
               </div> <!-- sec2__item__img__hide-->
    
               <a href="./products.html" >
               <img src="${productArray[i].imgs[0]}"  class="img-fluid" alt="" >
           </a>
    
             </div> <!-- sec2__item__img__show-->
            </div> <!-- sec2__img -->
    
            <div class="sec2__item__icon sec2__item__icon2  d-xl-none">
          
            <ul>
            
              <li id="showing"   onclick="show(productArray3, ${i})"  > <i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
              <li onclick="wishlist(productArray3, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></li>
              <li onclick="cartShow(productArray3, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
              
            </ul>
    
            </div> <!--sec2__item__icon sec2__item__icon2  -->
    
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
       
           </div>
            
            `;
        } else if(view === 'list') {
            shopList +=  `
            <div class="col-md-12 py-4" data-aos="zoom-in-up" data-aos-duration="1000">
            <div class="container-fluid">
  <div class="row">
    <div class="col-md-4">
      <div class="per2__item">
        <div class="per2__item__img">
     
        <a href="./products.html" onclick="quicks(productArray3, ${i})" >
        <img src="${productArray[i].imgs[1]}"   class="img-fluid" alt="" >
    </a>

      </div> <!-- per2__item__img -->
      </div> <!-- per2__item -->
    </div>
  
    <div class="col-md-8">
      <div class="per2__item__text d-flex  flex-column">
        <p>${productArray[i].desc}</p>
        <ul class=" per2__item__text__start d-flex ">
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
  
        <h4>${productArray[i].tittle}</h4>
    <div class="per2__item__text--suu">
    <span>€${productArray[i].price}</span>
    ${productArray[i].onsale ? `<span class="sec2__item__text--sale">€${productArray[i].sale}</span>` : ''}
    </div>
  
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <ul class="d-flex per2__item__text--action" >
          
        <li id="showing"   onclick="show(productArray3, ${i})"  > <i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
        <li onclick="wishlist(productArray3, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></li>
        <li onclick="cartShow(productArray3, ${i})"><i class="fa-solid fa-cart-shopping"></i></li>
          
        </ul>
      </div> <!-- per2__item__text -->
    </div>
  </div> <!-- row -->
            </div><!-- container-fluid -->
          </div>`;
        }
    }
    
    // Update the productItem innerHTML based on the view type
    productItem.innerHTML = shopList;
}


   

                                  // *********************************************************
// type


 // ***********************************************
//  brand
 document.addEventListener("DOMContentLoaded", function() {
  const productItem = document.getElementById("productItem");
  const listshop = document.querySelectorAll(".shop__filter__list6 ul li input[type='checkbox']");
  productArray88=[]
  function displayShop(productArray) {
      let shopList = "";
      let shopList2 = "";

      if(productArray.length === 0){
        shopList = `
        <div class="shop__end d-flex flex-column justify-content-center align-items-center py-5" id="shopEnd" data-aos="fade-right" data-aos-duration="700">
            <h2>No products found</h2>
            <p>There are no products matching from selection, Please select fewer filters or <a href="shop.html">clear all.</a></p>
        </div>
        `;
    } else {
        for (let i = 0; i < productArray.length; i++){
            shopList +=`
                          
            <div class="col-xl-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
            <div class="sec2__items">

            <div class="sec2__item ">
        
            <div class="sec2__img">
    
             <div class="sec2__item__img__show">
            
               <div class="sec2__item__img__hide ">
                 <div class="sec2__item__icon sec2__item__icon2 ">
          
                 
 <div id="showing"   onclick="show(productArray88, ${i})"   > <i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
 <div onclick="wishlist(productArray88, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></div>
         
                   </div> <!--sec2__item__icon sec2__item__icon2  -->
    
                   <div class="sec2__item__btn">
                     <button class="btn1" id="btn__show" onclick="cartShow(productArray88, ${i})" ><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                   </div>
                   <a href="./products.html" onclick="quicks(productArray88, ${i})" >
                   <img src="${productArray[i].imgs[1]}"   class="img-fluid" alt="" >
               </a>
    
               </div> <!-- sec2__item__img__hide-->
    
               <a href="./products.html" >
               <img src="${productArray[i].imgs[0]}"  class="img-fluid" alt="" >
           </a>
    
             </div> <!-- sec2__item__img__show-->
            </div> <!-- sec2__img -->
    
            <div class="sec2__item__icon sec2__item__icon2 d-xl-none d-flex">
          
            <ul>
            
              <li id="showing"   onclick="show(productArray88, ${i})"  > <i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
              <li onclick="wishlist(productArray88, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></li>
              <li onclick="cartShow(productArray88, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
              
            </ul>
    
            </div> <!--sec2__item__icon sec2__item__icon2  -->
    
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
       
           </div>
            
            `

            shopList2 +=    `
            <div class="col-md-12  py-4" data-aos="fade-down-left" data-aos-duration="1000">
            <div class="container-fluid">
  <div class="row">
    <div class="col-md-4">
      <div class="per2__item">
        <div class="per2__item__img">
     
        <a href="./products.html" onclick="quicks(productArray3, ${i})" >
        <img src="${productArray[i].imgs[1]}"   class="img-fluid" alt="" >
    </a>

      </div> <!-- per2__item__img -->
      </div> <!-- per2__item -->
    </div>
  
    <div class="col-md-8">
      <div class="per2__item__text d-flex  flex-column">
        <p>Vegist</p>
        <ul class=" per2__item__text__start d-flex ">
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
  
        <h4>${productArray[i].tittle}</h4>
    <div class="per2__item__text--suu">
    <span>€${productArray[i].price}</span>
    ${productArray[i].onsale ? `<span class="sec2__item__text--sale">€${productArray[i].sale}</span>` : ''}
    </div>
  
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <ul class="d-flex per2__item__text--action" >
          
        <li id="showing"   onclick="show(productArray3, ${i})"  > <i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
        <li onclick="wishlist(productArray3, ${i})"> <i class="fa-solid fa-heart"></i><span>wishlist</span></li>
        <li onclick="cartShow(productArray3, ${i})"><i class="fa-solid fa-cart-shopping"></i></li>
          
        </ul>
      </div> <!-- per2__item__text -->
    </div>
  </div> <!-- row -->
            </div><!-- container-fluid -->
          </div>`

    
        }

        productItem.innerHTML = shopList;
}
  }



listshop.forEach((checkbox) => {
    checkbox.addEventListener("change", function() {
      const selectedBrand = checkbox.value;
      productArray88 = productArray3.filter((product) => product.brand === selectedBrand);
      displayShop(productArray88);
      var cartContainer = document.getElementById("cartContainer2");
if (cartContainer.style.left === "0px") {
    toggleCart2();
}
    });
  });


  

});


// *********************************************************
// type
document.addEventListener("DOMContentLoaded", function() {
  const productItem = document.getElementById("productItem");
  const listshop = document.querySelectorAll(".shop__filter__list5 ul li input[type='checkbox']");
  productArray99=[]
  function displayShop(productArray) {
      let shopList = "";
      if(productArray.length === 0){
        shopList = `
        <div class="shop__end d-flex flex-column justify-content-center align-items-center py-5" id="shopEnd" data-aos="fade-right"  data-aos-duration="700">
            <h2>No products found</h2>
            <p>There are no products matching from selection, Please select fewer filters or <a href="shop.html">clear all.</a></p>
        </div>
        `;
    } else {
        for (let i = 0; i < productArray.length; i++){
            shopList +=`
            <div class="col-xl-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
                <div class="sec2__items">
                    <div class="sec2__item ">
                        <div class="sec2__img">
                            <div class="sec2__item__img__show">
                                <div class="sec2__item__img__hide ">
                                    <div class="sec2__item__icon sec2__item__icon2 ">
                                        <div id="showing" onclick="show(productArray99, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
                                        <div onclick="wishlist(productArray99, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></div>
                                    </div> <!--sec2__item__icon sec2__item__icon2  -->
                                    <div class="sec2__item__btn">
                                        <button class="btn1" id="btn__show" onclick="cartShow(productArray99, ${i})"><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                                    </div>
                                    <a href="./products.html" onclick="quicks(productArray99, ${i})">
                                        <img src="${productArray[i].imgs[1]}" class="img-fluid" alt="" >
                                    </a>
                                </div> <!-- sec2__item__img__hide-->
                                <a href="./products.html">
                                    <img src="${productArray[i].imgs[0]}" class="img-fluid" alt="" >
                                </a>
                            </div> <!-- sec2__item__img__show-->
                        </div> <!-- sec2__img -->
                        <div class="sec2__item__icon sec2__item__icon2 d-xl-none d-flex">
                            <ul>
                                <li id="showing" onclick="show(productArray99, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
                                <li onclick="wishlist(productArray99, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></li>
                                <li onclick="cartShow(productArray99, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
                            </ul>
                        </div> <!--sec2__item__icon sec2__item__icon2  -->
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
            </div>
            `
        }
    }
    productItem.innerHTML=shopList;
}


listshop.forEach((checkbox) => {
checkbox.addEventListener("change", function() {
const selectedType = checkbox.value;
productArray99 = productArray3.filter((product) => product.type === selectedType);
displayShop(productArray99);
var cartContainer = document.getElementById("cartContainer2");
if (cartContainer.style.left === "0px") {
    toggleCart2();
}
});
});


});


// *********************************************************

// "country
document.addEventListener("DOMContentLoaded", function() {
  let productItem = document.getElementById("productItem");
  let materialCheckboxes = document.querySelectorAll(".shop__filter__list4 input[type='checkbox']");
  productArray9 = [];

  function displayShop(productArray) {
      let shopList = "";
      if (productArray.length === 0) {
          shopList = `
              <div class="shop__end d-flex flex-column justify-content-center align-items-center py-5" id="shopEnd" data-aos="fade-right"  data-aos-duration="700">
                  <h2>No products found</h2>
                  <p>There are no products matching from selection, Please select fewer filters or <a href="shop.html">clear all.</a></p>
              </div>
          `;
      } else {
        for (let i = 0; i < productArray.length; i++){
          shopList +=`
          <div class="col-xl-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
              <div class="sec2__items">
                  <div class="sec2__item ">
                      <div class="sec2__img">
                          <div class="sec2__item__img__show">
                              <div class="sec2__item__img__hide ">
                                  <div class="sec2__item__icon sec2__item__icon2 ">
                                      <div id="showing" onclick="show(productArray9, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
                                      <div onclick="wishlist(productArray9, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></div>
                                  </div> <!--sec2__item__icon sec2__item__icon2  -->
                                  <div class="sec2__item__btn">
                                      <button class="btn1" id="btn__show" onclick="cartShow(productArray9, ${i})"><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                                  </div>
                                  <a href="./products.html" onclick="quicks(productArray9, ${i})">
                                      <img src="${productArray[i].imgs[1]}" class="img-fluid" alt="" >
                                  </a>
                              </div> <!-- sec2__item__img__hide-->
                              <a href="./products.html">
                                  <img src="${productArray[i].imgs[0]}" class="img-fluid" alt="" >
                              </a>
                          </div> <!-- sec2__item__img__show-->
                      </div> <!-- sec2__img -->
                      <div class="sec2__item__icon sec2__item__icon2 d-xl-none d-flex">
                          <ul>
                              <li id="showing" onclick="show(productArray9, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
                              <li onclick="wishlist(productArray9, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></li>
                              <li onclick="cartShow(productArray9, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
                          </ul>
                      </div> <!--sec2__item__icon sec2__item__icon2  -->
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
          </div>
          `
      }
  }
  productItem.innerHTML=shopList;
}


function filterProducts() {
    const selectedCountries = Array.from(materialCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    productArray9 = productArray3.filter(product => {
      return selectedCountries.includes(product.country);
    });
  
    displayShop(productArray9);
    var cartContainer = document.getElementById("cartContainer2");
if (cartContainer.style.left === "0px") {
    toggleCart2();
}
  }
  
  materialCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterProducts);
  });

  displayShop(productArray9);
});


// *********************************************************

                  document.addEventListener("DOMContentLoaded", function() {
                    const productItem = document.getElementById("productItem");
                    const listshop = document.querySelectorAll(".shop__filter__list2 ul li input[type='checkbox']");
                    productArray6=[]
                    function displayShop(productArray) {
                        let shopList = "";
                        if(productArray.length === 0){
                          shopList = `
                          <div class="shop__end d-flex flex-column justify-content-center align-items-center py-5" id="shopEnd" data-aos="fade-right" data-aos-duration="700">
                              <h2>No products found</h2>
                              <p>There are no products matching from selection, Please select fewer filters or <a href="shop.html">clear all.</a></p>
                          </div>
                          `;
                      } else {
                          for (let i = 0; i < productArray.length; i++){
                              shopList +=`
                              <div class="col-xl-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
                                  <div class="sec2__items">
                                      <div class="sec2__item ">
                                          <div class="sec2__img">
                                              <div class="sec2__item__img__show">
                                                  <div class="sec2__item__img__hide ">
                                                      <div class="sec2__item__icon sec2__item__icon2 ">
                                                          <div id="showing" onclick="show(productArray6, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
                                                          <div onclick="wishlist(productArray6, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></div>
                                                      </div> <!--sec2__item__icon sec2__item__icon2  -->
                                                      <div class="sec2__item__btn">
                                                          <button class="btn1" id="btn__show" onclick="cartShow(productArray6, ${i})"><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                                                      </div>
                                                      <a href="./products.html" onclick="quicks(productArray6, ${i})">
                                                          <img src="${productArray[i].imgs[1]}" class="img-fluid" alt="" >
                                                      </a>
                                                  </div> <!-- sec2__item__img__hide-->
                                                  <a href="./products.html">
                                                      <img src="${productArray[i].imgs[0]}" class="img-fluid" alt="" >
                                                  </a>
                                              </div> <!-- sec2__item__img__show-->
                                          </div> <!-- sec2__img -->
                                          <div class="sec2__item__icon sec2__item__icon2 d-xl-none d-flex">
                                              <ul>
                                                  <li id="showing" onclick="show(productArray6, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
                                                  <li onclick="wishlist(productArray6, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></li>
                                                  <li onclick="cartShow(productArray6, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
                                              </ul>
                                          </div> <!--sec2__item__icon sec2__item__icon2  -->
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
                              </div>
                              `
                          }
                      }
                      productItem.innerHTML=shopList;
                  }
                
           
    listshop.forEach((checkbox) => {
      checkbox.addEventListener("change", function() {
          const selectedSize = checkbox.value;
          productArray6 = productArray3.filter((product) => product.size === selectedSize);
          displayShop(productArray6);
          var cartContainer = document.getElementById("cartContainer2");
if (cartContainer.style.left === "0px") {
    toggleCart2();
}
      });
  });
                });


                // **********************************************************
                
            //     document.addEventListener("DOMContentLoaded", function() {
            //       const priceInputs = document.querySelectorAll(".price-input input");
            //       const rangeInputs = document.querySelectorAll(".range-input input");
            //       const range = document.querySelector(".slider .progress");
            //       const productItem = document.getElementById("productItem");
            //       const filterButton = document.querySelector(".shop__filter__list3 button");
            //        productArray7 = []; 
              
            //       function updateRange() {
            //           let minVal = parseInt(rangeInputs[0].value);
            //           let maxVal = parseInt(rangeInputs[1].value);
              
            //           range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
            //           range.style.width = ((maxVal - minVal) / rangeInputs[1].max) * 100 + "%";
              
            //           priceInputs[0].value = minVal;
            //           priceInputs[1].value = maxVal;
            //       }
              
            //       function filterNewArray(minPrice, maxPrice) {
            //           return productArray3.filter(product => product.price >= minPrice && product.price <= maxPrice);
            //       }
              
            //       function filterProducts(minPrice, maxPrice) {
            //           productArray7 = filterNewArray(minPrice, maxPrice);
            //           displayShop(productArray7);
            //       }
              
            //       rangeInputs.forEach((input) => {
            //           input.addEventListener("input", () => {
            //               updateRange();
            //               filterProducts(parseInt(rangeInputs[0].value), parseInt(rangeInputs[1].value));
            //           });
            //       });
              
            //       priceInputs.forEach((input) => {
            //           input.addEventListener("input", () => {
            //               let minPrice = parseInt(priceInputs[0].value);
            //               let maxPrice = parseInt(priceInputs[1].value);
              
            //               if (maxPrice >= minPrice && maxPrice <= rangeInputs[1].max) {
            //                   rangeInputs[0].value = minPrice;
            //                   rangeInputs[1].value = maxPrice;
              
            //                   updateRange();
            //                   filterProducts(minPrice, maxPrice);
            //               }
            //           });
            //       });
              
            //       filterButton.addEventListener("click", () => {
            //           let minPrice = parseInt(priceInputs[0].value);
            //           let maxPrice = parseInt(priceInputs[1].value);
            //           filterProducts(minPrice, maxPrice);
            //       });
              
            //       function displayShop(productArray){
            //           let shopList=""
            //           if(productArray.length === 0){
            //               shopList = `
            //               <div class="shop__end d-flex flex-column justify-content-center align-items-center py-5" id="shopEnd">
            //                   <h2>No products found</h2>
            //                   <p>There are no products matching from selection, Please select fewer filters or <a href="shop.html">clear all.</a></p>
            //               </div>
            //               `;
            //           } else {
            //               for (let i = 0; i < productArray.length; i++){
            //                   shopList +=`
            //                   <div class="col-xl-4 col-md-6 col-sm-6">
            //                       <div class="sec2__items">
            //                           <div class="sec2__item ">
            //                               <div class="sec2__img">
            //                                   <div class="sec2__item__img__show">
            //                                       <div class="sec2__item__img__hide ">
            //                                           <div class="sec2__item__icon sec2__item__icon2 ">
            //                                               <div id="showing" onclick="show(productArray7, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
            //                                               <div onclick="wishlist(productArray7, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></div>
            //                                           </div> <!--sec2__item__icon sec2__item__icon2  -->
            //                                           <div class="sec2__item__btn">
            //                                               <button class="btn1" id="btn__show" onclick="cartShow(productArray7, ${i})"><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
            //                                           </div>
            //                                           <a href="./products.html" onclick="quicks(productArray7, ${i})">
            //                                               <img src="${productArray[i].imgs[1]}" class="img-fluid" alt="" >
            //                                           </a>
            //                                       </div> <!-- sec2__item__img__hide-->
            //                                       <a href="./products.html">
            //                                           <img src="${productArray[i].imgs[0]}" class="img-fluid" alt="" >
            //                                       </a>
            //                                   </div> <!-- sec2__item__img__show-->
            //                               </div> <!-- sec2__img -->
            //                               <div class="sec2__item__icon sec2__item__icon2 d-xl-none d-flex">
            //                                   <ul>
            //                                       <li id="showing" onclick="show(productArray7, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
            //                                       <li onclick="wishlist(productArray7, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></li>
            //                                       <li onclick="cartShow(productArray7, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
            //                                   </ul>
            //                               </div> <!--sec2__item__icon sec2__item__icon2  -->
            //                               <div class="sec2__item__text text-center">
            //                               <h3>${productArray[i].tittle}</h3>

            //                                   <ul class="d-flex justify-content-center">
            //                                       <li><i class="fa-solid fa-star"></i></li>
            //                                       <li><i class="fa-solid fa-star"></i></li>
            //                                       <li><i class="fa-solid fa-star"></i></li>
            //                                       <li><i class="fa-solid fa-star"></i></li>
            //                                       <li><i class="fa-solid fa-star"></i></li>
            //                                   </ul>
            //                                   <span>€${productArray[i].price}</span>
            //                                   ${productArray[i].onsale ? `<span class="sec2__item__text--sale">€${productArray[i].sale}</span>` : ''}
            //                               </div>
            //                           </div> <!-- sec2__item -->
            //                       </div> <!--sec2__items  -->
            //                   </div>
            //                   `
            //               }
            //           }
            //           productItem.innerHTML=shopList;
            //       }
              
            //       // Initial display of products
            //       displayShop(productArray7);
            //   });
         
            document.addEventListener("DOMContentLoaded", function() {
                const productItem = document.getElementById("productItem");
                const filterButtons = document.querySelectorAll(".shop__filter__list3 button");
            
                function updateRangeAndFilter(priceInputs, rangeInputs) {
                    let minPrice = parseInt(rangeInputs[0].value);
                    let maxPrice = parseInt(rangeInputs[1].value);
            
                    if (maxPrice >= minPrice && maxPrice <= rangeInputs[1].max) {
                        rangeInputs[0].value = minPrice;
                        rangeInputs[1].value = maxPrice;
            
                        updateRange(rangeInputs);
                        filterProducts(minPrice, maxPrice);
                    }
                }
            
                function updateRange(rangeInputs) {
                    let minVal = parseInt(rangeInputs[0].value);
                    let maxVal = parseInt(rangeInputs[1].value);
                    let range = document.querySelector(".slider .progress");
            
                    range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
                    range.style.width = ((maxVal - minVal) / rangeInputs[1].max) * 100 + "%";
                }
            
                function filterNewArray(minPrice, maxPrice) {
                    return productArray3.filter(product => product.price >= minPrice && product.price <= maxPrice);
                }
            
                function filterProducts(minPrice, maxPrice) {
                    productArray7 = filterNewArray(minPrice, maxPrice);
                    displayShop(productArray7);
                }
            
                document.querySelectorAll('.shop__filter__list3').forEach(function(filterSection) {
                    const priceInputs = filterSection.querySelectorAll(".price-input input");
                    const rangeInputs = filterSection.querySelectorAll(".range-input input");
            
                    rangeInputs.forEach((input) => {
                        input.addEventListener("input", () => {
                            updateRangeAndFilter(priceInputs, rangeInputs);
                        });
                    });
            
                    priceInputs.forEach((input) => {
                        input.addEventListener("input", () => {
                            updateRangeAndFilter(priceInputs, rangeInputs);
                        });
                    });
                });
            
                filterButtons.forEach(button => {
                    button.addEventListener("click", () => {
                        const priceInputs = button.closest('.shop__filter__list3').querySelectorAll(".price-input input");
                        const rangeInputs = button.closest('.shop__filter__list3').querySelectorAll(".range-input input");
                        updateRangeAndFilter(priceInputs, rangeInputs);
                    });
                });
            
                function displayShop(productArray){
                    let shopList=""
                    if(productArray.length === 0){
                        shopList = `
                        <div class="shop__end d-flex flex-column justify-content-center align-items-center py-5" id="shopEnd" data-aos="fade-right" data-aos-duration="700">
                            <h2>No products found</h2>
                            <p>There are no products matching from selection, Please select fewer filters or <a href="shop.html">clear all.</a></p>
                        </div>
                        `;
                    } else {
                        for (let i = 0; i < productArray.length; i++){
                            shopList +=`
                            <div class="col-xl-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
                                <div class="sec2__items">
                                    <div class="sec2__item ">
                                        <div class="sec2__img">
                                            <div class="sec2__item__img__show">
                                                <div class="sec2__item__img__hide ">
                                                    <div class="sec2__item__icon sec2__item__icon2 ">
                                                        <div id="showing" onclick="show(productArray7, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></div>
                                                        <div onclick="wishlist(productArray7, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></div>
                                                    </div> <!--sec2__item__icon sec2__item__icon2  -->
                                                    <div class="sec2__item__btn">
                                                        <button class="btn1" id="btn__show" onclick="cartShow(productArray7, ${i})"><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                                                    </div>
                                                    <a href="./products.html" onclick="quicks(productArray7, ${i})">
                                                        <img src="${productArray[i].imgs[1]}" class="img-fluid" alt="" >
                                                    </a>
                                                </div> <!-- sec2__item__img__hide-->
                                                <a href="./products.html">
                                                    <img src="${productArray[i].imgs[0]}" class="img-fluid" alt="" >
                                                </a>
                                            </div> <!-- sec2__item__img__show-->
                                        </div> <!-- sec2__img -->
                                        <div class="sec2__item__icon sec2__item__icon2 d-xl-none d-flex">
                                            <ul>
                                                <li id="showing" onclick="show(productArray7, ${i})"><i  class="fa-regular fa-eye"></i><span>Quickview</span></li>
                                                <li onclick="wishlist(productArray7, ${i})"><i class="fa-solid fa-heart"></i><span>wishlist</span></li>
                                                <li onclick="cartShow(productArray7, ${i})"><i class="fa-solid fa-cart-shopping"></i><span>add to cart</span></li>
                                            </ul>
                                        </div> <!--sec2__item__icon sec2__item__icon2  -->
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
                            </div>
                            `
                        }
                    }
                    productItem.innerHTML=shopList;
                }
   
                displayShop(productArray7);
                var cartContainer = document.getElementById("cartContainer2");
if (cartContainer.style.left === "0px") {
    toggleCart2();
}
            });
            