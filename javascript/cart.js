 //////////////////////////////////////////////////////////
 let productsInCart =localStorage.getItem("productsInCart")
 let allProducts = document.querySelector(".product")

 if(productsInCart){
    let item = JSON.parse(productsInCart);
    drawCartProducts(item)
 }
 

 function drawCartProducts(products) {
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
                        <button class="addtocart" onClick= "Remove from cart(${item.id})">Remove From Cart</button>
                    </div>
                </div> 
        `
    })
    allProducts.innerHTML = y;
}


