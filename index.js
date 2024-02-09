const express = require('express')
const app = express()
const store = require('./Store/store')
const {homeStyleTourPackages, relatedData} = require('./Store/store2')
const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT
// 4343
// console.log(homeStyleTourPackages);


app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    return res.send(store)
})
app.get('/homeStyleTourPackages',(req,res)=>{
    return res.send(homeStyleTourPackages)
})
app.get('/tour-packages/:places',(req,res)=>{
    let category = req.params.places
    let data = store.filter(data => data.title === `${category}`)
    return res.send(data)
})
app.get('/style-tour-packages/:styles',(req,res)=>{
    let category = req.params.styles
    let data = store.filter(data => data.title === `${category}`)
    return res.send(data)
})

app.listen(port,(req,res)=>{
    try{
        console.log('server running fine');
    }
    catch(err){
        console.error('Error:',err)
    }
})
