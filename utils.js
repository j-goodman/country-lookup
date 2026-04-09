const useThe = (name) => {
    if (!name) return
    let words = name.split(" ")
    if (
        words.includes("Republic") ||
        words.includes("Federation") ||
        words.includes("Kingdom") ||
        words.includes("Duchy") ||
        words.includes("State") ||
        words.includes("Nation") ||
        words.includes("Principality") ||
        words.includes("Sultanate") ||
        words.includes("Netherlands") ||
        words.includes("Caribbean") ||
        words.includes("Confederation") ||
        words.includes("United")
    ) {
        return true
    }
    return false
}
 
const nameWithThe = (name) => {
    return `${useThe(name) ? "the " : ""}${name}`
}