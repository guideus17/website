const urlParams = new URLSearchParams(window.location.search);
const idselection = urlParams.get("id");

const url= "https://kea-alt-del.dk/t7/api/products/" + idselection;




fetch (url)
.then((res) => res.json())
.then((data)=>showProduct(data));

function showProduct(product){
console.log(product);


const brandnameEls = document.querySelectorAll(".brandname");

brandnameEls.forEach(el => {
console.log("brandname selected");
    el.textContent=product.brandname;
    
});

document.querySelector("#productnameol").textContent=product.productdisplayname;
document.querySelector("h1").textContent=product.productdisplayname;
document.querySelector(".productname").textContent=product.productdisplayname;

document.querySelector(".subcatg").textContent=product.category;

document.querySelector(".idnumber").textContent=product.id;

document.querySelector("#color").textContent=product.color1;

document.querySelector("#brandbio").textContent=product.brandbio;



document.querySelector("#seasonol a").textContent=product.season;
document.querySelector("#seasonol a").setAttribute("href","productsbyseason.html?season=" + product.season);

document.querySelector("#productimage img").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

document.querySelector("#productimage img").alt=product.displayname;

}

