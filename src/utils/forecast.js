const request = require('request')
const forecast = (long,lat,callback) =>{
    const url = 'https://api.darksky.net/forecast/5e3e27a3a1845b12099f84e6a1ca8ba1/'+lat+','+long
    request({ url ,json:true}, (error,{body})=>{
            if(error)
            {
                callback('Unable to connect to weather service',undefined)
            }
            else if(body.error)
            {
                callback('Unable to find the location',undefined)
            }
            else
            {
                const temp = Math.floor((body.currently.temperature - 32)*5/9)

                callback(undefined,body.daily.data[0].summary+'It is currently '+temp+' degrees out. There is '+body.currently.precipProbability+'% chance to rain.')
            }
        })
        
}

module.exports = forecast