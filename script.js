const showAllButton = document.querySelector('#show-all')
const givDiscountButton = document.querySelector('#giv-discount')
const list = document.querySelector('#product-list')


function showAllProducts(newArrayProducts){
 
    let myLi = ''

    newArrayProducts.forEach(produtc => {

        myLi += `
        
        <li>
          <img src="${produtc.src}" alt="${produtc.name}">
          <p>${produtc.name}</p>
          <p class="item-price">U$ ${produtc.price}</p>
        </li>
        
        `
        list.innerHTML = myLi
    })
    
}


function givTenPercentDiscount(){
    
    list.innerHTML = ''

   const newPrices = menuOptions.map((product) => ({

        ...product,
        price: product.price * 0.9,
    }))

    showAllProducts(newPrices)

    givDiscountButton.dispatchEvent = true;
}

showAllButton.addEventListener( 'click', ()=> showAllProducts(menuOptions))
givDiscountButton.addEventListener('click', givTenPercentDiscount)





