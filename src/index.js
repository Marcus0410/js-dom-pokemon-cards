const cardList = document.querySelector(".cards")

function createCard(pokemon) {
    // create elements
    const pokemonCard = document.createElement("li")
    const header = document.createElement("h2")
    const image = document.createElement("img")

    // set classes
    pokemonCard.setAttribute("class", "card")
    header.setAttribute("class", "card--title")
    image.setAttribute("class", "card--img")

    const name = String(pokemon.name).charAt(0).toUpperCase() + String(pokemon.name).slice(1)
    header.innerText = name
    image.setAttribute("width", "256")
    image.setAttribute("src", pokemon.sprites.other["official-artwork"].front_default)

    // add elements to card
    pokemonCard.appendChild(header)
    pokemonCard.appendChild(image)
    pokemonCard.appendChild(createStatList(pokemon.stats))
    
    return pokemonCard
}

function createStatList(stats) {
    const statList = document.createElement("ul")
    statList.setAttribute("class", "card--text")

    // add the stats
    for (let i = 0; i < stats.length; i++) {
        const statElement = document.createElement("li")
        statElement.innerText = stats[i].stat.name.toUpperCase() + ": " + stats[i].base_stat
        statList.appendChild(statElement)
    }
    return statList
}

function renderAllPokemons() {
    for (let i = 0; i < data.length; i++) {
        const pokemonObject = data[i]
        const pokemonCard = createCard(pokemonObject)
        cardList.appendChild(pokemonCard)
    }
}

function main() {
    renderAllPokemons()
}

main()