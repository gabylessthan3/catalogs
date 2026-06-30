const productPage = document.getElementById("productPage");

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(item => item.id === id);

if(product){

productPage.innerHTML = `

<section class="details">

<div class="image-side">

<img src="${product.image}" alt="${product.name}">

</div>

<div class="info-side">

<h1>${product.name}</h1>

<p class="sku">

SKU: ${product.sku}

</p>

<p class="price">

${
product.price === 0
?
"Coming Soon"
:
"$"+product.price.toFixed(2)
}

</p>

<p class="stock">

${product.stock}

</p>

<h3>Description</h3>

<p>

${product.description}

</p>

<h3>Specifications</h3>

<table>

<tr>

<td>Category</td>

<td>${product.category}</td>

</tr>

<tr>

<td>SKU</td>

<td>${product.sku}</td>

</tr>

<tr>

<td>Status</td>

<td>${product.stock}</td>

</tr>

</table>

<div class="buttons">

<a href="index.html" class="back">

← Back to Catalog

</a>

<button class="cart" onclick='addToCart(${JSON.stringify(product)})'>
    Add to Cart
</button>

</div>

</div>

</section>

`;

}