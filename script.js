const showAllButton = document.querySelector('#show-all')
const givDiscountButton = document.querySelector('#giv-discount')
const sumAllProductsButton = document.querySelector('#sum-all-products')
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
    
   const newPrices = menuOptions.map((product) => ({

        ...product,
        price: product.price * 0.9,
    }))

    showAllProducts(newPrices)

    givDiscountButton.dispatchEvent = true;
}

function sumAllProducts(){
    
    let myLi = ""
    
    const sumAllPrices = menuOptions.reduce((accumulator, product) => accumulator + product.price, 0)

    myLi += `
    
        <li>
            <p>The total value of all products is: U$ ${sumAllPrices}</p>
        </li>
    `
    list.innerHTML = myLi
    
}


showAllButton.addEventListener( 'click', ()=> showAllProducts(menuOptions))
givDiscountButton.addEventListener('click', givTenPercentDiscount)
sumAllProductsButton.addEventListener('click', sumAllProducts)





