const baseURL = "https://game-hubs.com/wp-json/wc/store/products"
const preveiwContainer = document.querySelector('.products-preview');
const previewBox = preveiwContainer.querySelectorAll('.preview');
const productContainer = document.querySelector('.products-container')
const previewImage = document.querySelector('#preview-image');
const productDescription = document.querySelectorAll("#product-description");
async function getProducts (url){
    const response = await fetch(url);
    const products = await response.json();
      products.forEach(function(product){ 
       productContainer.innerHTML += 
       `
         <div class="older-posts-grid-wrapper d-grid">
        <a href="#" class="article d-grid">
            <div class="older-posts-article-image-wrapper">
                <img src="${product.images[0].src}" alt="" class="article-image">
            </div>
            <div class="article-data-container">
                <div class="article-data">
                    <span>23 Dec 2021</span>
                    <span class="article-data-spacer"></span>
                    <span>3 Min read</span>
                </div>
                <h3 class="title article-title">${product.name}</h3>
                <p class="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
            </div>
        </a>
    </div>
        `
       document.querySelectorAll('.products-container .product').forEach(productDiv =>{
         productDiv.onclick = () =>{
           preveiwContainer.style.display = 'flex';
           let name = productDiv.getAttribute('data-name');
           previewBox.forEach(preview =>{
             let id = productDiv.getAttribute('data-id');
             const clickedProduct = products.find(product => product.id === parseInt(id));
             console.log(clickedProduct);
             previewImage.src = clickedProduct.images[0].src;
             productDescription.innerHTML = clickedProduct.description;
            console.log(productDescription);
             preview.classList.add('active');
           });
         };
       });
       previewBox.forEach(close =>{
         close.querySelector('.fa-times').onclick = () =>{
           close.classList.remove('active');
           preveiwContainer.style.display = 'none';
         };
       });
   })  
}
getProducts(baseURL);
console.log(productContainer);