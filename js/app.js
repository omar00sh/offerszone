const products = [
{
title:"شاحن Anker Nano 30W",
image:"https://via.placeholder.com/300x300?text=Product",
store:"Amazon",
price:"79 ريال",
oldPrice:"129 ريال",
discount:"39%",
rating:"4.8",
category:"شواحن"
},
{
title:"سماعة لاسلكية",
image:"https://via.placeholder.com/300x300?text=Headphones",
store:"AliExpress",
buyUrl:"#"
}
];

const container=document.getElementById("products");

products.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

${product.store ? `<div class="store">🛒 ${product.store}</div>` : ""}

<img src="${product.image}" alt="${product.title}">

<h3>${product.title}</h3>

${product.price ? `<p class="price">💰 ${product.price}</p>` : ""}

${product.oldPrice ? `<p class="old-price">${product.oldPrice}</p>` : ""}

${product.discount ? `<p class="discount">🔥 خصم ${product.discount}</p>` : ""}

${product.rating ? `<p class="rating">⭐ ${product.rating}</p>` : ""}

${product.category ? `<p class="category">📂 ${product.category}</p>` : ""}

<div class="buttons">

<button>شراء الآن</button>

<button>عرض التفاصيل</button>

</div>

</div>

`;

});
