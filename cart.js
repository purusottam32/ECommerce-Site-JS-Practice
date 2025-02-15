const cartContainer = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout");
const template = document.getElementById("cart-item-template");
const container=document.getElementById("cart-container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart.length);

function updateCart(){
    if (cart.length !== 0) {
        console.log(" cart is not empty");
        console.log(cart);
        let total=0
        cart.forEach(item => {

            const clone=template.content.cloneNode(true);
            total+=item.price;
            clone.getElementById("pimg").src=item.image;
            clone.getElementById("pimg").alt=item.name;
            clone.getElementById("pname").textontent=`${item.name}`;
            clone.getElementById("price").textContent=`${item.price} INR`;
            clone.querySelector("button").addEventListener("click", () => removeItem(item));
            cartContainer.appendChild(clone);
        });
       totalPrice.textContent=`Total: ${total} INR`;     
    } else {
        container.innerHTML="";
        container.innerHTML=`<h1 class="text-gray-50 text-center text-3xl font-bold">Your cart is empty</h1>
         <a href="index.html"><button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 mt-4">Continue Shopping</button></a>`;
        console.log("cart is empty");
    }
}
updateCart();

function removeItem(item) {
    console.log(item);
    const obj=cart.filter(x=>item!==x);
    console.log(obj);
    localStorage.setItem("cart",JSON.stringify(obj));
}
