const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    link: {
        type: String,
        validate: {
            validator(v) {
                return /^(http:\/\/|https:\/\/w*\w)/.test(v);
            },
            message: 'Ссылка не в корректном формате',
        },
    },
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
    },
    description: {
        type: String,
        minlength: 2,
    },
    price: {
        type: Number,
    },
    type: {
        type: String,
    }
})

module.exports = mongoose.model('card', cardSchema);