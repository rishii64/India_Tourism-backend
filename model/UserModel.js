const { mongoose } = require('../config/db')

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
})

const userCollection = mongoose.model('Test_User', userSchema)
module.exports = userCollection;
