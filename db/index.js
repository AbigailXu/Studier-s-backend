const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://Abigail:abab@cluster0.rvq7g.mongodb.net/studier-s?retryWrites=true&w=majority', { useNewUrlParser: true })
    //old:  mongodb://127.0.0.1:27017/studiers-db
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db