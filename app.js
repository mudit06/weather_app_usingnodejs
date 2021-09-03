const express= require('express')
const app = express()
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const url= 'http://api.openweathermap.org/data/2.5/weather?q=dibai,in&APPID=8b642cb9da51ed5a177e7fbfed3ca9ab&units=metric'




var xhReq = new XMLHttpRequest();
xhReq.open("GET", url, false);
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);
//console.log(jsonObject)
//console.log(jsonObject.main['temp'])


app.get('/',(req,res)=>{
    res.write("<html><body><div id='container'>")
    res.write("<h1>"+'CITY NAME -- '+jsonObject['name']+'<br>'+"</h1>")
    res.write("<h2>"+'Temprature -- '+jsonObject.main['temp']+'<br>'+"</h2>")
    res.write("<h2>"+'Humidity -- '+jsonObject.main['humidity']+'<br>'+"</h2>")
    res.write("<h2>"+'Sunset -- '+ new Date(jsonObject.sys['sunset']*1000)+'<br>'+"</h2>")
    res.write("<h3>"+'Longitude -- '+jsonObject.coord['lon']+' AND Latitude -- '+jsonObject.coord['lat']+'<br>'+"</h2>")
    res.write("</div></body></html>")
    res.end()
})

app.listen(3040,()=> console.log('server running'))
