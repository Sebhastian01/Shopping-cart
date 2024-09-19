const url = "https://fakestoreapi.com/products"
const containerCards = document.getElementById("cardsContainer")
const urlCategory ="https://fakestoreapi.com/products/category"
const urlPrice ="https://fakestoreapi.com/products/price"
const txtCategory = document.getElementById("search-input-category")
const txtPrice = document.getElementById("search-input-price")

let carrito = []
let cant = 1

const getCards =async (URL) =>{
    const response = await fetch(URL)
    const data = await response.json()
    data.forEach(element =>{
    makeCards(element)
    })
}

    getCards(url)

const makeCards = (product) => {

    const card = document.createElement("div")
    card.classList.add("card")

    const imgCard = document.createElement("img")
    imgCard.src = product.image
    imgCard.alt = product.title
    
    const titleCard = document.createElement("h3")
    titleCard.textContent = product.title

    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    const priceCard = document.createElement("p")
    priceCard.textContent = "$"+product.price
    
    const buttonCard = document.createElement("button")
    buttonCard.textContent = "Añadir"

    containerCards.appendChild(card)
    card.appendChild(imgCard)
    cardContent.appendChild(titleCard)
    card.appendChild(cardContent)
    card.appendChild(priceCard)
    card.appendChild(buttonCard)

    buttonCard.addEventListener ('click',(event)=> {
        showResult()
        

        let currentProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            cant: cant
        }

        carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Recupera el carrito actual del localStorage
        let existingProduct = carrito.find(item => item.id === currentProduct.id);
        if (existingProduct) {
            // Si el producto ya existe, suma el precio
            existingProduct.cant += currentProduct.cant;
            console.log('producto sumado');
        } else {
            // Si no existe, lo agregas al carrito
            carrito.push(currentProduct);
            console.log('producto nuevo agregado');
        }
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda el carrito actualizado en el localStorage
    })
}

function showResult(message){
    message = "Producto añadido"
    Swal.fire({
        text: message,
        timer: 1000,  // 1000 milisegundos = 1 segundo
        showConfirmButton: false  // Oculta el botón de confirmación
    });
}

const filterCategory  = async (event) => {
    containerCards.innerHTML = ""
    await getCards (urlCategory+event.target.value)
}

const filterPrice  = async (event) => {
    containerCards.innerHTML = ""
    await getCards (urlPrice+event.target.value)
}

txtCategory.addEventListener("keyup",filterCategory)
txtPrice.addEventListener("keyup",filterPrice)
