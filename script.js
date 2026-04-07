const countryName = document.getElementById("country-name")
const countryFlag = document.getElementById("country-flag")
const countryDescription = document.getElementById("country-description")

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        console.log("Enter key pressed.")
    }
})