
let userInfo = document.querySelector("#user-info")
let userData = document.querySelector("#user")
let link = document.querySelector("#link")

if (localStorage.getItem("username")){
    link.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click" , function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html"
    } , 1200)
})
/////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".product")
let products = [
    {
        id: 1,
        title: "Apple watch",
        color: "gray",
        imageUrl: "images/dribbble_4x.webp"
    },
    {
        id: 2,
        title: "iphone 13",
        color: "gray",
        imageUrl: "images/iphone13.webp"
    },
    {
        id: 3,
        title: "Redmi note 10 pro",
        color: "white",
        imageUrl: "images/redmi-note-10-pro-max-features-and-specifications-price-in-india.jpg"
    },
    {
        id: 4,
        title: "Computer Gaming",
        color: "black",
        imageUrl: "images/lenovo-pro-gaming-pc.jpg"
    },

]

function drawItems () {
    let y = products.map((item) => {
        return `
        <div class="product-item">
                    <img class="product-item-image" src="${item.imageUrl}" alt="apple watch">
                    <div class="product-item-description">
                        <h2>${item.title}</h2>
                        <P>The New iphone 13 From Apple Company 9-2022</P>
                        <span>${item.color}</span>
                    </div>
                    <div class="product-item-action">
                        <button class="addtocart" onClick= "addToCart(${item.id})">Add To Cart</button>
                        <i class="far fa-heart fav"></i>
                    </div>
                </div> 
        `
    })
    allProducts.innerHTML = y;
}
drawItems()

let cartProductDiv = document.querySelector(".cart-products div")

let badge = document.querySelector(".badge")

// let addedItem = [];
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if(addedItem){
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<P>${item.title}</p>`
    })
    badge.style.display = "block"
    badge.innerHTML = addedItem.length
}


   if(localStorage.getItem=("username")){
    function addToCart(id){
        let choosenItem = products.find((item) => item.id === id);
        cartProductDiv.innerHTML += `<P>${choosenItem.title}</p>`

        addedItem = [...addedItem , choosenItem]
        localStorage.setItem("productsInCart" , JSON.stringify(addedItem))

        let cartProductsLength = document.querySelectorAll(".cart-products div p")
        badge.style.display = "block"
        badge.innerHTML = cartProductsLength.length
    }
   }else{
    window.location = "login.html"
   }

let shoppingCartIcon = document.querySelector(".shopping-cart")
let cartsProducts = document.querySelector(".cart-products")
shoppingCartIcon.addEventListener("click", opencart)
function opencart(){
    if(cartProductDiv.innerHTML != ""){
        if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
        }else{
            cartsProducts.style.display="block"
        }
    }
}



