const cardsRouter = require('express').Router();

const {
    getCards,
    createCard,
    deleteCard,
    updateCard
} = require('../controllers/card');

cardsRouter.get('/cards' , getCards);
cardsRouter.post('/cards', createCard);
cardsRouter.delete('/cards/:cardId', deleteCard);
cardsRouter.patch('/cards/:cardId' , updateCard);

module.exports = cardsRouter;