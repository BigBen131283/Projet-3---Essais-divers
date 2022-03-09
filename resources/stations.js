
export default class stations {
    constructor(city) {
        this.city = city
        this.apiKey = "47a5805f3a3ea418d8b31f455ea44acde74e4fe8"
        this.urlBase = "https://api.jcdecaux.com/vls/v1/stations?contract="
        this.url = this.urlBase + this.city + "&apiKey=" + this.apiKey
    }
    loadStation(){
        let req1 = fetch(this.url)
            .then( (res) => {
                if (res.ok){
                    return res.json()
                }
            })
            .then( (value) => {
                return value
            })
            .catch( (err) => {
                return "Erreur"
            })

        Promise.all([req1])
            .then( (fillingTable) => {
                return fillingTable[0]
            })
            .catch( (err) => {
                return "Erreur (Empty)"
            })
    }
}






// Promise.all([fetch(url)])
//     .then(function(res) {
//         if (res.ok) {
//             return res.json()
//         }
//     })
//     .then(function(value) {
//         console.log(value)
//         console.log(value.lenght)
//         alljcDatas = value
//         console.log(alljcDatas)
//     })
//     .catch(function(err){
//         return "Erreur"
//     })

// objet station



// for (let data of alljcDatas) {
//     coordinates(data.position.latitude, data.position.longitude)
//     station(data.number, data.name, data.address, position)
//     allStations.push(station)
// }

// console.log(allStations)


// class coordinates {
//     constructor (latitude, longitude){
//         this.latitude = latitude
//         this.longitude = longitude
//     }
// }
