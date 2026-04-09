const page = {
    countryName: document.getElementById("country-name"),
    countryFlag: document.getElementById("country-flag"),
    countryDescription: document.getElementById("country-description"),
    inputBox: document.getElementById("input-box"),
    mainSection: document.getElementById("main-section"),
    aboutSection: document.getElementById("about-section"),
    mainButton: document.getElementById("main-section-button"),
    aboutButton: document.getElementById("about-section-button")
}

page.mainButton.addEventListener("click", () => {
    page.mainSection.classList.remove("invisible")
    page.aboutSection.classList.add("invisible")
    page.mainButton.classList.add("active")
    page.aboutButton.classList.remove("active")
})

page.aboutButton.addEventListener("click", () => {
    page.aboutSection.classList.remove("invisible")
    page.mainSection.classList.add("invisible")
    page.aboutButton.classList.add("active")
    page.mainButton.classList.remove("active")
})

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        requestCountryInfo(page.inputBox.value)
    }
})

async function requestCountryInfo (countryName) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)

    if (response.status === 404) {
        page.countryName.innerText = `Couldn't find ${countryName}.`
        page.countryFlag.src = null
        page.countryFlag.alt = ``
        page.countryDescription = ``
        return false
    }

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
    page.countryName.innerText = country.name.common
    page.countryFlag.src = country.flags.svg
    page.countryFlag.alt = country.flags.alt
    page.countryDescription.innerText = `${useThe(country.name.official) ? "The " : ""}${country.name.official} is a country in ${useThe(country.subregion) ? "the " : ""}${country.subregion} with a population of ${country.population.toLocaleString()}. Its capital is ${country.capital.join("/")}.${country.landlocked ? ` ${country.name.common} is landlocked.` : ``} \n \n ${country.flags.alt}`
}