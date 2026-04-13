const showAllButton = document.querySelector('#show-all')
const givDiscountButton = document.querySelector('#giv-discount')
const sumAllProductsButton = document.querySelector('#sum-all-products')
const showVeganOnlyButton = document.querySelector('#vegan-only')
const list = document.querySelector('#product-list')


function showAllProducts(newArrayProducts){
 
    let myLi = ''

    newArrayProducts.forEach(produtc => {

        myLi += `
        
        <li>
          <img src="${produtc.src}" alt="${produtc.name}">
          <p>${produtc.name}</p>
          <p class="item-price"> ${formatToCurrency(produtc.price)}</p>
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
            <p>The total value of all products without discount is:<br><span class="item-price">${formatToCurrency(sumAllPrices)}</span> </p>
            <p>The total value of all products with discount is:<br><span class="item-price">${formatToCurrency(sumAllPrices * 0.9)}</span> </p>
        </li>
    `
    list.innerHTML = myLi
    
}

function showVeganProductsOnly(){

    const veganProducts = menuOptions.filter(product => product.vegan === true)

    showAllProducts(veganProducts)
}

function formatToCurrency(value){
    const formatter = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
});
    return formatter.format(value)
}


showAllButton.addEventListener( 'click', ()=> showAllProducts(menuOptions))
givDiscountButton.addEventListener('click', givTenPercentDiscount)
sumAllProductsButton.addEventListener('click', sumAllProducts)
showVeganOnlyButton.addEventListener('click', showVeganProductsOnly)






