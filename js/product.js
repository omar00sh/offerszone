const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

fetch("data/products.json")
.then(response => response.json())
.then(products => {

const product = products.find(item => item.id === id);

if(!product){
document.body.innerHTML="<h2>المنتج غير موجود</h2>";
return;
}

document.title = product.title + " | OffersZone";

document.getElementById("product-image").src = product.image;

document.getElementById("product-title").textContent = product.title;

if(product.price){
document.getElementById("product-price").textContent="💰 "+product.price;
}else{
document.getElementById("product-price").style.display="none";
}

if(product.old_price){
document.getElementById("product-old-price").textContent=product.old_price;
}else{
document.getElementById("product-old-price").style.display="none";
}

if(product.discount){
document.getElementById("product-discount").textContent="🔥 خصم "+product.discount;
}else{
document.getElementById("product-discount").style.display="none";
}

if(product.rating){
document.getElementById("product-rating").textContent="⭐ "+product.rating;
}else{
document.getElementById("product-rating").style.display="none";
}

if(product.category){
document.getElementById("product-category").textContent="📂 "+product.category;
}else{
document.getElementById("product-category").style.display="none";
}

if(product.buy_url){
document.getElementById("buy-button").href=product.buy_url;
}else{
document.getElementById("buy-button").style.display="none";
}

});
