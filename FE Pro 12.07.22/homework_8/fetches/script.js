let products = [];
let promise;

const renderProducts = products => {
    let htmlStr = products.map(product => 
    `<div class="card card-body mb-1">
        <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
            <div class="mr-3 mb-3 mb-lg-0">
                <img src="${product.images[0]}" width="150" height="150" alt="${product.title}">
            </div>
            <div class="media-body">
                <h6 class="media-title font-weight-semibold">
                    <a href="#" data-abc="true">${product.title}</a>
                </h6>
                <a href="#" class="brand">${product.brand}</a>
                <p class="mb-3" class="description">${product.description}</p>
            </div>
            <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                <h3 class="mb-0 font-weight-semibold price">$ ${product.price}</h3>
            </div>
        </div>
    </div>`).join('');
    document.querySelector('.card-container').innerHTML = htmlStr;
}

function getProducts () {
    promise = new Promise (function(resolve, reject) {
        fetch('https://dummyjson.com/products/').then(res => res.json()).then((data = {}) => {        
            products = data.products;
            resolve (products);
            reject (new Error());
        })  
    })
}

function checkSelect() {
    document.querySelector('.brands-select').onchange = e => {
        const value = e.currentTarget.value;
        const filteredProducts = products.filter(product => product.brand === value);
        renderProducts(filteredProducts.length ? filteredProducts : products);
    }
}

function renderSelect(products) {
    const uniqueBrands = products.reduce((acc, product) => {
        if(!acc.includes(product.brand)) {
            acc.push(product.brand);
        }
        return acc;
    }, []);
    let htmlStr = `<option value="">Select Brand</option>`;
    htmlStr += uniqueBrands.map(brand => (`<option value="${brand}">${brand}</option>`)).join('');
    let selectElement = document.querySelector('select');
    selectElement.innerHTML = htmlStr;
    checkSelect();
}

window.onload = function() {    
        getProducts();
        promise.then (result => {renderProducts(result); renderSelect(result)},
        error => console.log(error))
}