const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
.then(function(res){
    return res.json();
})
.then(function (data){
    handleProductList(data);
})

function handleProductList(data) {
console.log(data);

    data.forEach(showProduct);
}

function showProduct(product) {
    // grab template and cloone it
const templateSelection = document.querySelector(".IndividualProduct").content;
const cloneOfTemplate = templateSelection.cloneNode(true);






// change info of products
cloneOfTemplate.querySelector(".smallinfo").textContent = `${product.articletype} | ${product.brandname}`;
cloneOfTemplate.querySelector("h3").textContent = `${product.productdisplayname}`;

cloneOfTemplate.querySelector(".productimageimgwithshadow").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;


// SOLD OUT productS
if(product.soldout == 1){
    console.log("its available")

    cloneOfTemplate.querySelector(".soldoutsituation").classList = "soldoutimg";

}


// price productS
cloneOfTemplate.querySelector(".oldpriceid").textContent = `DKK ${product.price},-`;



// find new price
const discountamount = product.discount / 100 * product.price;
const newpricenoround =  product.price - discountamount;
const newprice =  Math.round(newpricenoround);


// discount % productS
cloneOfTemplate.querySelector(".discountid").textContent = `-${product.discount}%`;

// DISCOUNT productS
if(product.discount){
    console.log("discount found")

    // show discount number
  
    cloneOfTemplate.querySelector(".discountid").classList = "discounttag";


       // show new price
    
       cloneOfTemplate.querySelector(".newpriceid").classList = "newprice newpriceid";


         // scratch the old price
       
         cloneOfTemplate.querySelector(".oldpriceid").classList = "oldpricescratch";

         
// change new price
cloneOfTemplate.querySelector(".newpriceid").textContent = `DKK ${newprice},-`;

}
























// put clone in the place
const GridWithProducts = document.querySelector(".productsgrid");
GridWithProducts.appendChild(cloneOfTemplate);




}






