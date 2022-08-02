const mongoose = require('mongoose')

const postsSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, 'Please add text'],
        unique: true
    },
    text: {
        type: String,
        required: [true, 'Please add text']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Posts', postsSchema)