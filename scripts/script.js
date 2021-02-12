// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let myFetch = fetch('https://fakestoreapi.com/products');
  myFetch.then(response => response.json())
  .then(function(data) {
    localStorage.clear();
    for(i = 0; i < data.length; i++) {
      localStorage.setItem(data[i].id,JSON.stringify(data[i]));
    }
  })
});
