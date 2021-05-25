const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema(
    {
        title: { type: String, required: true },
        genre: { type: String, required: true },
        time: { type: [String], required: false },
        due: { type: Number, required: false },
        priority: { type: String, required: false },
        checked: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tasks', Task)