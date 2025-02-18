document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout");
    const template = document.getElementById("cart-item-template");
    const container = document.getElementById("cart-container");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        cartContainer.innerHTML = ""; // Clear previous items

        if (cart.length !== 0) {
            console.log("Cart is not empty");
            console.log(cart);
            let total = 0;

            cart.forEach(item => {
                const clone = template.content.cloneNode(true);
                total += item.price;

                clone.getElementById("pimg").src = item.image;
                clone.getElementById("pimg").alt = item.name;
                clone.getElementById("pname").textContent = item.name; // Fixed typo
                clone.getElementById("price").textContent = `${item.price} INR`;

                clone.querySelector("button").addEventListener("click", () => removeItem(item));

                cartContainer.appendChild(clone);
            });

            totalPrice.textContent = `Total: ${total} INR`;
        } else {
            container.innerHTML = `
                <h1 class="text-gray-50 text-center text-3xl font-bold">Your cart is empty</h1>
                <a href="index.html">
                    <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 mt-4">
                        Continue Shopping
                    </button>
                </a>`;
            console.log("Cart is empty");
        }
    }

    function removeItem(item) {
        console.log(item);
        cart = cart.filter(x => x.name !== item.name); // Correct filtering
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }

    updateCart();
});

// document.addEventListener("DOMContentLoaded", () => {
//     const cartContainer = document.getElementById("container");
//     const cartItemTemplate = document.getElementById("cart-item-template");
//     const totalPriceEl = document.getElementById("total-price");
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     function updateCart() {
//         cartContainer.innerHTML = '<h1 class="text-3xl font-bold">Your Cart</h1>';
//         cart.forEach((item, index) => {
//             const clone = cartItemTemplate.content.cloneNode(true);
//             clone.querySelector("img").src = item.image;
//             clone.querySelector("h3").textContent = item.name;
//             clone.querySelector(".cartItemPrice").textContent = `Price: ${item.price} INR`;
//             const removeButton = clone.querySelector(".remove-btn");
//             removeButton.addEventListener("click", () => removeFromCart(index));
//             cartContainer.appendChild(clone);
//         });
//         totalPriceEl.textContent = `Total: ${calculateTotal()} INR`;
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }

//     function addToCart(item) {
//         cart.push(item);
//         updateCart();
//     }

//     function removeFromCart(index) {
//         cart.splice(index, 1);
//         updateCart();
//     }

//     function calculateTotal() {
//         return cart.reduce((total, item) => total + item.price, 0);
//     }

//     document.getElementById("checkout").addEventListener("click", () => {
//         if (cart.length === 0) {
//             alert("Your cart is empty!");
//         } else {
//             alert("Proceeding to checkout!");
//             localStorage.removeItem("cart");
//             cart = [];
//             updateCart();
//         }
//     });

//     updateCart();
// });
