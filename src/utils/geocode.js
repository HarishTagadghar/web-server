const request = require('request');

const geocode = (address,callback) =>{
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaGFyaXNodGFnYWRnaGFyIiwiYSI6ImNrOGVxdXU5NjAyaWszaG14b3BqYzcyYTYifQ.YK_od5JUCDsS3Uq_6TTzPA`
request({url:url , json:true},(error,respond)=>{
    if(error){
        callback('server error to call weather api', undefined);
    }else if( respond.body.features === []){
        callback('incorrect geo location', undefined);
    }else{
        callback(undefined, {
            longitude: respond.body.features[0].center[0],
            latitude: respond.body.features[0].center[1],
            location: respond.body.features[0].place_name
        })
    }
})

}
module.exports = geocode
