const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
let currentImages = [];
let currentIndex = 0;

fetch("data/products.json")
.then(response => response.json())
.then(products => {

const product = products.find(item => item.id === id);

if (!product) {
    document.body.innerHTML = "<h2>المنتج غير موجود</h2>";
    return;
}

document.title = product.title + " | OffersZone";

const mainImage = document.getElementById("product-image");
const gallery = document.getElementById("gallery");

mainImage.src = product.images[0];

if(product.images.length <= 1){
    gallery.style.display = "none";
}

product.images.forEach((image,index)=>{

const link = document.createElement("a");
link.href = image;
link.dataset.pswpWidth = "1200";
link.dataset.pswpHeight = "1200";

const thumb = document.createElement("img");
thumb.src = image;

if(index===0){
    thumb.classList.add("active");
}

thumb.onclick=()=>{

mainImage.src=image;

document.querySelectorAll(".gallery-strip img")
.forEach(img=>img.classList.remove("active"));

thumb.classList.add("active");

};

link.appendChild(thumb);

gallery.appendChild(link);

});

document.getElementById("product-title").textContent=product.title;

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
