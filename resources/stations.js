
export default class stations {
    constructor(city) {
        this.city = city
        this.apiKey = "47a5805f3a3ea418d8b31f455ea44acde74e4fe8"
        this.urlBase = "https://api.jcdecaux.com/vls/v1/stations?contract="
        this.url = this.urlBase + this.city + "&apiKey=" + this.apiKey
    }
    loadStation(){
        return new Promise( (resolve, reject) => {
            let req1 = fetch(this.url)
            .then( (res) => {
                    return res.json()
            })
            .then( (value) => {
                resolve(value)
            })
            .catch( (err) => {
                reject("Erreur");
            })
        })
    }
}

