const express = require('express')
const app = express()
const store = require('./Store/store')
const { homeStyleTourPackages, relatedData } = require('./Store/store2')
const indiaTourism = require('./Store/IndiaTourism')
const indiaTourismDynamic = require('./Store/IndiaTourismDynamic')
const store3 = require('./Store/store3')
const store4 = require('./Store/store4')
const store5 = require('./Store/store5')
const cors = require('cors')
const route = require('./Routes/UserRouter')
const { connection } = require('./config/db')
// https://india-tourism-backend.onrender.com

require('dotenv').config()
const port = process.env.PORT

app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user', route)

// home page data ----->
app.get('/', (req, res) => {
    return res.send(store)
})
// ideal tour packages: dynamic ----->
app.get('/tour-packages/:places', (req, res) => {
    let category = req.params.places
    let data = store.filter(data => data.title === `${category}`)
    return res.send(data)
})
// style tour packages ----->
app.get('/homeStyleTourPackages', (req, res) => {
    return res.send(homeStyleTourPackages)
})
// style tour packages: dynamic ----->
app.get('/style-tour-packages/:styles', (req, res) => {
    let category = req.params.styles
    return res.send(relatedData[`${category}`])
})

// India Tourism ------>
app.get('/indiaTourism', (req, res) => {
    return res.send(indiaTourism)
})
//India tourism: dynamic ------>
app.get('/india-tourism/:states', (req, res) => {
    let category = req.params.states
    let data = indiaTourismDynamic.filter(data => data.title === `${category}`)
    return res.send(data)
})

// tour packages themes ----->
app.get('/tourPackagesThemes', (req, res) => {
    return res.send(store3)
})

// places to visit ----->
app.get('/placesToVisit', (req, res) => {
    return res.send(store4)
})

// tours offers ----->
app.get('/toursOffers', (req, res) => {
    return res.send(store5)
})
// tour offers: dynamic ----->
app.get('/tour-offers/:offers', (req, res) => {
    let category = req.params.offers
    let data = store5.filter(data => `${category}` === data.title)
    return res.send(data)
})

app.listen(port, (req, res) => {
    try {
        console.log('server running fine');
        connection()
    }
    catch (err) {
        console.error('Error:', err)
    }
})
