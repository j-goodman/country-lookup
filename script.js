const countryName = document.getElementById("country-name")
const countryFlag = document.getElementById("country-flag")
const countryDescription = document.getElementById("country-description")
const inputBox = document.getElementById("input-box")

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
        console.log(countries[i])
        if (countries[i].name.common === countryName) {
            correctCountry = countries[i]
        }
    }

    addInformationToPage(correctCountry)
}

const addInformationToPage = (country) => {
    window.country = country
    countryName.innerText = country.name.common
    countryFlag.src = country.flags.svg
    countryFlag.alt = country.flags.alt
    countryDescription.innerText = `${country.name.official} is a country in ${country.subregion} with a population of ${country.population.toLocaleString()}. The capital of ${country.name.common} is ${country.capital}.`
}