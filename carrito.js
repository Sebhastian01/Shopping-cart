const numberInput = document.getElementById('numberInput');
const containerCards = document.getElementById('cart-items');
let cantidad = 0;


// const btnClear = document.getElementById('btn-clear').addEventListener('click', ()=>{
//     console.log('carrito borrado');
    
//     localStorage.clear();
    
// })

// const btnGet = document.getElementById('btn-get').addEventListener('click', ()=>{
    //     console.log('carrito inciado');
    
    //     cartStore()
    
    // })
    
    const cartStore = ()=>{
        let cart = JSON.parse(localStorage.getItem('carrito')) || [];
        // Aquí puedes iterar sobre los productos del carrito y mostrarlos
        cart.forEach(product => {
            const card = document.createElement("div")
            card.classList.add("card")
            
            const imgCard = document.createElement("img")
            imgCard.src = product.image
            imgCard.alt = product.title
            
            const titleCard = document.createElement("h3")
            titleCard.textContent = product.title
            
            const priceCard = document.createElement("p")
            priceCard.textContent = "$"+product.price

            const cantCard = document.createElement("p")
            cantCard.textContent = product.cant

            const clearProduct = document.createElement('button')
            clearProduct.textContent='Eliminar'
            clearProduct.id='clear'
            // Evento para borrar el producto
            clearProduct.addEventListener('click', () => {
                let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                carrito = carrito.filter(item => item.id !== product.id);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                location.reload();
            });
            
            containerCards.appendChild(card)
            card.appendChild(imgCard)
            card.appendChild(titleCard)
            card.appendChild(cantCard)
            card.appendChild(priceCard)
            card.appendChild(clearProduct)
            
});
}
cartStore();