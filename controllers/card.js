const Card = require('../models/card');

const getCards = (req, res, next) => {
    Card.find({})
        .then((cards) => {
            res.status(200).send(cards);
        })
        .catch(next);
};

const createCard = (req, res, next) => {
    const { description, link, name, price, type } = req.body;
    Card.create({ description, link, name, price, type })
        .then((card) => {
            res.status(200).send(card)
        })
        .catch(next)
};

const deleteCard = (req, res, next) => {
    Card.findById(req.params.cardId)
        .then((card) => {
            if (!card) {
                throw Error('Нет карточки с таким id')
            } else {
                Card.findByIdAndDelete(req.params.cardId)
                    .then((card) => {
                        res.status(200).send(card);
                    })
                    .catch(next);
            }
        })
        .catch(next)
    };

const updateCard = (req, res, next) => {
    const owner = req.params.cardId;
    console.log(owner)
    const { description, link, name, price, type } = req.body;
    return Card.findByIdAndUpdate(owner,{ description, link, name, price, type } , {new: true})
        .then((card) => {
            res.status(200).send(card)
        })
        .catch(next)
};

module.exports = {
    getCards,
    createCard,
    deleteCard,
    updateCard
}