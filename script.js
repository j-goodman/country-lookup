const countryName = document.getElementById("country-name")
const countryFlag = document.getElementById("country-flag")
const countryDescription = document.getElementById("country-description")

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        console.log("Enter key pressed.")
    }
})

async function requestCountryInfo (countryName) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const country = await response.json()
    addInformationToPage(country[0])
}

const addInformationToPage = (country) => {
    console.log(country)
    countryName.innerText = country.name.common
    countryFlag.src = country.flags.svg
    countryDescription.innerText = `${country.name.official} is a country in ${country.subregion} with a population of ${country.population.toLocaleString()}.`
}

requestCountryInfo("Ecuador")