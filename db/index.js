//mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb

const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://Abigail:abab@task-genre-data.nxwxx.mongodb.net/db1?retryWrites=true&w=majority', { useNewUrlParser: true })
    //old:  mongodb://127.0.0.1:27017/studiers-db
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db