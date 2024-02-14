const route = require("express").Router()
// const bcrypt = require('bcrypt')
const saltRound = 10
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretkey = process.env.secretKey
const userCollection = require('../model/UserModel')

route.post('/register', async (req, res) => {
    const data = req.body
    const accnt = await userCollection.findOne({ email: data.email })
    if (accnt)
        return res.send({ msg: 'This email is already in use !!' })
    console.log('Hashed Data:', data);

    const insertData = await userCollection.create(data)
    res.send({ msg: 'user registered successfully', insertData: insertData })
})

route.post('/login', async (req, res) => {
    const loginData = req.body
    const checkData = await userCollection.findOne({ email: loginData.email })
    if (!checkData) {
        return res.send({ msg: 'User not registered' })
    }
    if (loginData.password === checkData.password) {
        const token = jwt.sign({ user: checkData.email }, secretkey)
        return res.send({ msg: 'User logged in successfully', userData: checkData, token })
    }
    else {
        return res.send({ msg: 'Password is incorrect' })
    }
})

module.exports = route
