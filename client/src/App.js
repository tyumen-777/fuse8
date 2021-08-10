import React from "react";
import './App.css';
import api from './utils/api';
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Main from "./components/Main/Main";
import AddPopup from "./components/AddPopup/AddPopup";
import {Route} from 'react-router-dom';


function App() {

    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('')
    const [cards, setCards] = React.useState([]);
    const [renderedCards, setRenderedCards] = React.useState([]);
    const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})

    React.useEffect(() => {
        api.getInitialCards()
            .then(cardList => {
                setCards(cardList)
                setRenderedCards(cardList.slice(0, 6))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleAddPlaceClick() {
        setIsAddPopupOpen(true)
    }

    function handleEditPlaceClick(card) {
        setIsEditPopupOpen(true)
        setSelectedCard(card)
    }

    function closePopup() {
        setIsAddPopupOpen(false)
        setIsEditPopupOpen(false)
        setSelectedCard({})
    }

    function handleAddPlaceSubmit({description, link, name, price, type}) {
        api.addCard(description, link, name, price, type)
            .then((card) => {
                setCards([...cards, card]);
                closePopup()
            })
            .catch((err) => {
                console.log(err)
            })
    };

    function handleCardDelete(card) {
        console.log(card.name)
        api.removeCard(card._id)
            .then(() => {
                const newCards = cards.filter((elem) => elem !== card);
                setCards(newCards);
            })
            .catch((err) => {
                console.log(err)
            })
    };

    function handleCardEdit(card, {description, link, name, price, type}) {
        api.editCard(card._id, description, link, name, price, type)
            .then((data) => {
                console.log(data)
                setCards(data)
                closePopup()
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <div className='page'>
            <div className='page__container'>
                <Route exact path='/'>
                    <Header/>
                    <Filter searchValue={searchValue} setSearchValue={setSearchValue} onAddPlace={handleAddPlaceClick}/>
                    <Main cards={cards} onCardDelete={handleCardDelete}
                          onClose={closePopup} onEditPlace={handleEditPlaceClick}
                          setCards={setCards} onSelectCard={selectedCard}
                          onEdit={handleCardEdit} renderedCards={renderedCards} setRenderedCards={setRenderedCards}
                          searchValue={searchValue} setSearchValue={setSearchValue}
                          isEditPopupOpen={isEditPopupOpen}>
                    </Main>
                    <AddPopup isOpen={isAddPopupOpen} onClose={closePopup} onAddPlace={handleAddPlaceSubmit}/>
                </Route>
            </div>
        </div>
    );
}

export default App;
