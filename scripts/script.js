// Script.js
let list = document.getElementById("product-list");
window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let myFetch = fetch('https://fakestoreapi.com/products');
  myFetch.then(response => response.json())
  .then(function(data) {
      window.localStorage.setItem("productList",JSON.stringify(data));
      var products = JSON.parse(localStorage.getItem("productList"));
      for(let i = 0; i < data.length; i++){
        var productItem = new ProductItem(products[i].id);
          productItem.imgSrc=data[i].image;
          productItem.imgAlt=data[i].title;
          productItem.titles=data[i].title;
          productItem.price=data[i].price;
          list.appendChild(productItem);
        }
      }
)})

let screenCount = document.getElementById("cart-count");
let count = window.localStorage.getItem("count");
screenCount.innerHTML = count;
