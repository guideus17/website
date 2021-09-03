


const url= "https://kea-alt-del.dk/t7/api/products/";




fetch (url)
.then((res) => res.json())
.then((data)=>showProduct(data));

function showProduct(product){
console.log(product);}

document.querySelector(".linkwinter").setAttribute("href","productsbyseason.html?season=Winter");

document.querySelector(".linkspring").setAttribute("href","productsbyseason.html?season=Spring");

document.querySelector(".linksummer").setAttribute("href","productsbyseason.html?season=Summer");

document.querySelector(".linkfall").setAttribute("href","productsbyseason.html?season=Fall");
