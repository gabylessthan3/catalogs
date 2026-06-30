let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cartContainer");
const cartCount = document.getElementById("cartCount");

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount(){
    if(cartCount){
        cartCount.textContent = cart.reduce((sum,item)=>sum + item.quantity,0);
    }
}

function addToCart(product){

    const existing = cart.find(item => item.id === product.id);

    if(existing){
        existing.quantity += 1;
    } else {
        cart.push({...product, quantity:1});
    }

    saveCart();
    alert("Added to cart!");
}

function removeItem(id){
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

function changeQty(id, amount){
    const item = cart.find(i => i.id === id);
    if(!item) return;

    item.quantity += amount;

    if(item.quantity <= 0){
        removeItem(id);
    } else {
        saveCart();
        renderCart();
    }
}

function renderCart(){

    if(!cartContainer) return;

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <img src="${item.image}" />

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>$${item.price.toFixed(2)}</p>

                <div class="qty">

                    <button onclick="changeQty(${item.id},-1)">-</button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQty(${item.id},1)">+</button>

                </div>

                <button onclick="removeItem(${item.id})">
                    Remove
                </button>

            </div>

        `;

        cartContainer.appendChild(div);

    });

    const totalEl = document.getElementById("total");

    if(totalEl){
        totalEl.textContent = "$" + total.toFixed(2);
    }
}

updateCartCount();
renderCart();