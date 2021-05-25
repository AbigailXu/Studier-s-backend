//mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb

const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/studiers-db', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db