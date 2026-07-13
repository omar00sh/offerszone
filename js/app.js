fetch("data/products.json")
.then(response => response.json())
.then(products => {

const container = document.getElementById("products");

products.forEach(product => {

container.innerHTML += `

<div class="product-card">

${product.store ? `<div class="store">${product.store}</div>` : ""}

<img src="${product.image}" alt="${product.title}">

<h3>${product.title}</h3>

${product.price ? `<p class="price">💰 ${product.price}</p>` : ""}

${product.old_price ? `<p class="old-price">${product.old_price}</p>` : ""}

${product.discount ? `<p class="discount">🔥 خصم ${product.discount}</p>` : ""}

${product.rating ? `<p class="rating">⭐ ${product.rating}</p>` : ""}

${product.category ? `<p class="category">📂 ${product.category}</p>` : ""}

<div class="buttons">

${product.buy_url ? `<button onclick="window.open('${product.buy_url}','_blank')">🛒 شراء الآن</button>` : ""}

<a href="product.html?id=${product.id}">
    <button>📄 عرض التفاصيل</button>
</a>

</div>

</div>

`;

});

});
