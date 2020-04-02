const request = require('request')
const forecast = (longitude,latitude,callback) => {
    const url = `https://api.darksky.net/forecast/abd629a2a92d47e22e5f79dd28936f76/${latitude},${longitude}` // url or the weather
request({url:url , json : true},(error,respond) => {
    if(error){
        callback('server error to call weather api',undefined)
    }else if (respond.body.error) {
        callback('incorrect location',data)
    }else {
        callback(undefined,`${respond.body.daily.summary} It is currently ${respond.body.currently.temperature} degree out`)
    }
})

}

module.exports = forecast;
