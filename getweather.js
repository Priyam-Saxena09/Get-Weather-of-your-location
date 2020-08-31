const request = require("request")
const getwea = (lat,lon,cb) => {
    const url = "http://api.weatherstack.com/current?access_key=6e76cf088f5cd94e26ce4547f7e57dff&query=" + lat + "," + lon;
    request({url:url},(err,res) => {
        if(err)
        {
            cb("Unable to connect Server",undefined)
        }
        else if(res.body.error)
        {
            cb("Unable to find your Location",undefined)
        }
        else
        {
            cb(undefined,res.body)
        }
    })
}

module.exports = getwea