const request = require('request-promise');

const API_KEY = 'c755ff408fe00955c6bd84f92e6e5887';

class Weather {
    static retrieveByCity (city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=Celsius`,
            json: true
        }).then(result =>{
            callback(result)
        }).catch(err => {
            console.log(err);
            callback({error: 'Could not reach openweather map IPI'})
        })

    }
}

module.exports = Weather

//uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`,