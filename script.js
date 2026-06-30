const productGrid = document.getElementById("productGrid");

function displayProducts(productList){

    productGrid.innerHTML = "";

    productList.forEach(product=>{

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `

            <img src="${product.image}" alt="${product.name}">

            <h2>${product.name}</h2>

            <p class="price">

                ${
                    product.price === 0
                    ? "Coming Soon"
                    : "$" + product.price.toFixed(2)
                }

            </p>

            <p class="stock">

                ${product.stock}

            </p>

            <a
                href="details.html?id=${product.id}"
                class="details-btn"
            >

                View Details

            </a>

        `;

        productGrid.appendChild(card);

    });

}

displayProducts(products);

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

    const search = searchInput.value.toLowerCase();

    const filtered = products.filter(product=>{

        return product.name.toLowerCase().includes(search);

    });

    displayProducts(filtered);

});