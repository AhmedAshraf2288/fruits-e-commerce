// blog home

let blogHome = document.getElementById("blogHome")
function displyBlogHome(){
  let blogListHome = "";
  for(let i = 0 ; i < blogArray.length ; i++){
    blogListHome+=   
`
<li class="splide__slide" data-aos="zoom-in-up" data-aos-duration="1000" >
<div class="sec7__itmes">
  <div class="sec7__item">
    <div class="sec7__item__img">
    <a  href="blogdetails.html" onclick="blogShow(${i})">
    <img src="${blogArray[i].img}" alt="" >
</a>
    </div> <!-- sec7__item__img -->
    <div class="sec7__item__text">
      <span>Aug 2022</span>
      <a href="blogdetails.html"><h3 onclick="blogShow(${i})">${blogArray[i].desc}</h3></a>

      <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem ipsum dolor sit amet, consectetu...</p>
      <h4 onclick="blogShow(${i})"><a href="blogdetails.html">read more</a><i class="fa-solid fa-arrow-right"></i></h4>

    </div> <!--sec7__item__text -->


  </div> <!-- sec7__item -->
</div><!--sec7__itmes  -->

</li>
`
  }

  blogHome.innerHTML=blogListHome
  new Splide('.sec7', {
    type: 'loop',
    perPage: 3,
    span: true,
    autoplay: true,
    interval: 1900,
    perMove: 1,
    breakpoints: {
      400: { perPage: 1 },
        640: { perPage: 2 },
        992: { perPage: 3 },
        1200: { perPage: 4 }
    }
}).mount();


}
async function getDataBlog(){
  const response= await fetch("./cars.json");
  const data =await response.json();
  blogArray=data.blog
  localStorage.setItem('blogArray', JSON.stringify(blogArray));
console.log(blogArray);
 displyBlogHome()
 

}
getDataBlog()









const blog= document.getElementById("blog");
let blogLeft =document.getElementById("blogLeft");
blogArray=[]

async function getData1(){
    const response= await fetch("./cars.json");
    const data =await response.json();
    blogArray=data.blog
    localStorage.setItem('blogArray', JSON.stringify(blogArray));
    displyBlog()
}

getData1()

function displyBlog(){
    let blogList = "";
    let blogDetails = "";
 
    for(let i = 0 ; i < blogArray.length ; i++){
blogList+=   
`

<div class="col-lg-6" data-aos="zoom-in-up" data-aos-duration="1000">
<div class="sec7__itmes">
    <div class="sec7__item">
      <div class="sec7__item__img">
      <a  href="blogdetails.html" onclick="blogShow(${i})">
      <img src="${blogArray[i].img}" alt="" >
  </a>
      
      </div> <!-- sec7__item__img -->
      <div class="sec7__item__text">
        <span>Aug 2022</span>
        <a href="blogdetails.html"><h3 onclick="blogShow(${i})">${blogArray[i].desc}</h3></a>

        <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem ipsum dolor sit amet, consectetu...</p>
        <h4 onclick="blogShow(${i})"><a href="blogdetails.html">read more</a><i class="fa-solid fa-arrow-right"></i></h4>
      </div> <!--sec7__item__text -->


    </div> <!-- sec7__item -->
  </div><!--sec7__itmes  -->

</div>
`

blogDetails+=`
<div class="blog__left__item" data-aos="zoom-in-up" data-aos-duration="1000">
<div class="blog__left__item__img">
<a  href="blogdetails.html" onclick="blogShow(${i})">
<img src="${blogArray[i].img}" class="img-fluid" alt="" >
</a>
</div> <!--  blog__left__item__img-->

<div class="blog__left__item__text">
    <p>Aug 18, 2022</p>
<a href="blogdetails.html"> <h5 onclick="blogShow(${i})">${blogArray[i].desc.slice(1,14)}...</h5></a>
   
</div> <!--  blog__left__item__text-->
</div> <!--blog__left__item  -->



`
    }
    blog.innerHTML=blogList
    blogLeft.innerHTML=blogDetails
    
}

const changeBlog =document.getElementById('changeBlog')
function blogShow(index){
    chooseBlog=blogArray[index]
    console.log(chooseBlog);
    localStorage.setItem('blog', JSON.stringify(chooseBlog))
    
}

displayBlog2()
function displayBlog2(){
    let blogShowing=JSON.parse(localStorage.getItem("blog")) 
    blogList2=""
    blogList2=`

    <div class="blogdetails__item__img" data-aos="zoom-in-up" data-aos-duration="1000">
    <img src="${blogShowing.img}" class="img-fluid" alt="">
    <h4>Health and skin for your organic</h4>
</div> <!-- blogdetails__item__img -->

    
    `
    changeBlog.innerHTML=blogList2
    
}

let blogRight = document.getElementById("blogRight")
displayRitht()
function displayRitht(){
  let  blogList2=""
    let blogArray=JSON.parse(localStorage.getItem("blogArray")) 
    for(let i = 0 ; i< blogArray.length ; i++){
      console.log(blogArray[i]);
        blogList2 +=`

        <div class="blog__left__item" data-aos="zoom-in-up" data-aos-duration="1000">
        <div class="blog__left__item__img">
        <a  href="blogdetails.html" onclick="blogShow(${i})">
        <img src="${blogArray[i].img}"  alt="" >
    </a>
        </div> <!--  blog__left__item__img-->
        
        <div class="blog__left__item__text">
            <p>Aug 18, 2022</p>
            <a href="blogdetails.html"> <h5 onclick="blogShow(${i})">${blogArray[i].desc.slice(1,14)}...</h5></a>

        </div> <!--  blog__left__item__text-->
        </div> <!--blog__left__item  -->
        
        
    
        
        `
    }
 

    blogRight.innerHTML=blogList2
    
}


