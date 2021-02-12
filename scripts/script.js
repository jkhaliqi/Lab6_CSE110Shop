// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let myFetch = fetch('https://fakestoreapi.com/products');
  myFetch.then(response => response.json())
  .then(commits => localStorage.setItem(commits[0].id, commits[0].title)); //slowly start figuring out how to fetch the array..
});