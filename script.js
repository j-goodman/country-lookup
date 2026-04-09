const countryName = document.getElementById("country-name")
const countryFlag = document.getElementById("country-flag")
const countryDescription = document.getElementById("country-description")
const inputBox = document.getElementById("input-box")

const mainSection = document.getElementById("main-section")
const aboutSection = document.getElementById("about-section")
const mainButton = document.getElementById("main-section-button")
const aboutButton = document.getElementById("about-section-button")

mainButton.addEventListener("click", () => {
    mainSection.classList.remove("invisible")
    aboutSection.classList.add("invisible")
    mainButton.classList.add("active")
    aboutButton.classList.remove("active")
})

aboutButton.addEventListener("click", () => {
    aboutSection.classList.remove("invisible")
    mainSection.classList.add("invisible")
    aboutButton.classList.add("active")
    mainButton.classList.remove("active")
})

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        requestCountryInfo(inputBox.value)
    }
})

async function requestCountryInfo (countryName) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const countries = await response.json()

    let correctCountry = countries[0]

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name.common.toUpperCase() === countryName.toUpperCase()) {
            correctCountry = countries[i]
        }
    }

    addInformationToPage(correctCountry)
}

const addInformationToPage = (country) => {
    countryName.innerText = country.name.common
    countryFlag.src = country.flags.svg
    countryFlag.alt = country.flags.alt
    countryDescription.innerText = `${useThe(country.name.official) ? "The " : ""}${country.name.official} is a country in ${useThe(country.subregion) ? "the " : ""}${country.subregion} with a population of ${country.population.toLocaleString()}. Its capital is ${country.capital}.${country.landlocked ? ` ${country.name.common} is landlocked.` : ``}`
}