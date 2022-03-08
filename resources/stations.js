let cityContract = "toyama"
let apiKey = "47a5805f3a3ea418d8b31f455ea44acde74e4fe8"
let urlBase = "https://api.jcdecaux.com/vls/v1/stations?contract="

let url = urlBase + cityContract + "&apiKey=" + apiKey

console.log(url)

fetch(url)
    .then(function(res) {
        if (res.ok){
            return res.json()
        }
    })
    .then(function(value) {
        console.log(value)
        console.log(value.length)
    })
    .catch(function(err){
        return "Erreur"
    })

// objet station
