const fetchApi=async ()=>{
    try {
         const response= await fetch('/products.json');
         const data=await response.json();
         console.log(data);
         return data;
    } catch (error) {
       console.log("Something Went wrong ", error);
    }
}

document.addEventListener("DOMContentLoaded",async () => {
    const container=document.getElementById("container");
    const template=document.getElementById("card-template");
    const data= await fetchApi();
    data.forEach(item=> {
        const clone=template.content.cloneNode(true);
        clone.getElementById("pName").textContent=`${item.name}`;
        clone.getElementById("price").textContent=`${item.price} INR`;
        clone.getElementById("pImg").src=item.image;
        clone.getElementById("pImg").alt=item.name;

        clone.querySelector("button").addEventListener("click", () => addToCart(item));

        container.appendChild(clone);
    });
})


function addToCart(item){
   let cart = JSON.parse(localStorage.getItem("cart")) || [];
   cart.push(item);
   localStorage.setItem("cart",JSON.stringify(cart));
    alert("ITEM ADDED TO CART !!!")

}


