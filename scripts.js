const url = "https://fakestoreapi.com/products"
const containerCards = document.getElementById("cardsContainer")
const filterCategory ="https://fakestoreapi.com/products/categories"

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
    priceCard.textContent = "Category: "+product.price
    
    const buttonCard = document.createElement("button")
    buttonCard.textContent = "Añadir"

    containerCards.appendChild(card)
    card.appendChild(imgCard)
    cardContent.appendChild(titleCard)
    card.appendChild(cardContent)
    card.appendChild(priceCard)
    card.appendChild(buttonCard)
}
