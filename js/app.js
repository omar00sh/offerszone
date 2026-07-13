const products = [
  {
    title: "شاحن Anker Nano 30W",
    image: "https://via.placeholder.com/300x300?text=Product",
    store: "Amazon",
    price: "79 ريال",
    oldPrice: "129 ريال",
    discount: "39%",
    rating: "4.8",
    category: "شواحن"
  }
];

const container = document.getElementById("products");

products.forEach(product => {

container.innerHTML += `

<div class="product-card">

<div class="store">${product.store}</div>

<img src="${product.image}" alt="${product.title}">

<h3>${product.title}</h3>

<p class="price">${product.price}</p>

<p class="old-price">${product.oldPrice}</p>

<p class="discount">${product.discount}</p>

<p class="rating">⭐ ${product.rating}</p>

<p class="category">${product.category}</p>

<div class="buttons">

<button>شراء الآن</button>

<button>عرض التفاصيل</button>

</div>

</div>

`;

});
