let citySelected = "toyama"
let apiKey = "47a5805f3a3ea418d8b31f455ea44acde74e4fe8"
let urlBase = "https://api.jcdecaux.com/vls/v1/stations?contract="

let url = urlBase + citySelected + "&apiKey=" + apiKey

console.log(url)

const allStations = [];


fetch(url)
    .then(function(res) {
        if (res.ok){
            return res.json()
        }
    })
    .then(function(value) {
        console.log(value)
        console.log(value.length)
        value.forEach(element => {
            allStations.push(new station(element))
        });   
    })
    .catch(function(err){
        return "Erreur"
    })



// objet station

class station {
    constructor(station
                ) {
        this.number = station.number
        this.name = station.name
        this.address = station.address
        this.latitude = station.position.lat
        this.longitude = station.position.lng
    }
}


console.log(allStations)
