


const url= "https://kea-alt-del.dk/t7/api/products/";




fetch (url)
.then((res) => res.json())
.then((data)=>showProduct(data));

function showProduct(product){
console.log(product);}

document.querySelector("#winterid a").setAttribute("href","productsbyseason.html?season=Winter");

document.querySelector("#springid a").setAttribute("href","productsbyseason.html?season=Spring");

document.querySelector("#summerid a").setAttribute("href","productsbyseason.html?season=Summer");

document.querySelector("#fallid a").setAttribute("href","productsbyseason.html?season=Fall");
