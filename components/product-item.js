// product-item.js
class ProductItem extends HTMLElement {
  // TODO
  constructor(id){
    super();
    let shadow = this.attachShadow({mode: 'open'});
    
    let li = document.createElement('li');
    li.setAttribute('class', 'product');
    let img = document.createElement('img');
    li.appendChild(img);
    let title = document.createElement('p');
    title.setAttribute('class','title');
    li.appendChild(title);
    let price = document.createElement('p');
    price.setAttribute('class','price');
    li.appendChild(price);
    
    var button = document.createElement('button');
    li.appendChild(button);
    if(window.localStorage.getItem(id) != null) {
      button.innerHTML="Remove from Cart";     
    }
    else {
      button.innerHTML="Add to Cart";     
    }
    button.addEventListener('click',add);
    function add() {
      if(button.innerHTML == "Add to Cart"){
        button.innerHTML="Remove from Cart";
        let countref = document.getElementById("cart-count"); 
        let count = countref.innerHTML;
        count++;
        countref.innerHTML = count;
        window.localStorage.setItem(id,price.innerHTML); 
        window.localStorage.setItem("count", count);
      }
      else {
        button.innerHTML="Add to Cart";
        let countref = document.getElementById("cart-count"); 
        let count = countref.innerHTML;
        count--;
        countref.innerHTML = count;
        window.localStorage.removeItem(id);
        window.localStorage.setItem("count", count);
      }
    }
    
    let style = document.createElement('style');
    style.setAttribute('class','style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    `;

    shadow.appendChild(style);
    shadow.appendChild(li);
  }

  set imgSrc(src){
    this.shadowRoot.querySelector('img').src = src;
  }
  set imgAlt(alt) {
    this.shadowRoot.querySelector('img').alt= alt;
  }
  set titles(title) {
    this.shadowRoot.querySelector(".title").innerHTML= title;
  }
  set price(price) {
    this.shadowRoot.querySelector(".price").innerHTML = price;
  }

}

customElements.define('product-item', ProductItem);
