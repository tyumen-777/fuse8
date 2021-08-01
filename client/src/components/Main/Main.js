import React from 'react';

import './Main.css'
import Card from "../Card/Card";
import EditPopup from "../EditPopup/EditPopup";


function Main(props) {
    const {
        cards,
        onCardDelete,
        onAddPlace,
        onClose,
        onEditPlace,
        renderedCards,
        setRenderedCards,
        searchValue,
        isEditPopupOpen,
        onEdit,
        onSelectCard
    } = props;

    const [next, setNext] = React.useState(6);
    const countAddedCards = 3;

    const handleShowMoreCard = () => {
        loopWithSlice(next, next + countAddedCards)
        setNext(next + countAddedCards)
    }

    const loopWithSlice = (start, end) => {
        const slicedPosts = cards.slice(start, end);
        setRenderedCards([...renderedCards, ...slicedPosts])
    };

    return (
        <main className="main">
            <section className='cardlist'>
                {
                    renderedCards.filter(card => {
                        if (searchValue === "" || searchValue.length < 3) {
                            return card;
                        } else if (card.name.toLowerCase().includes(searchValue.toLowerCase())) {
                            return card;
                        } return false
                    })
                        .map((card) =>
                            <Card key={card._id} card={card} onCardDelete={onCardDelete}
                                  onAddPlace={onAddPlace}
                                  onClose={onClose} onEditPlace={onEditPlace} isEditPopupOpen={isEditPopupOpen}
                                  onEdit={onEdit} onSelectCard={onSelectCard}/>
                        )
                }
            </section>
            {renderedCards.length === cards.length ? '' :
                <button className="main_paginate-button" onClick={handleShowMoreCard}>
                    See more
                    <svg className="card-list__icon" width="20" height="15" viewBox="0 0 7 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            }
            <EditPopup isOpen={isEditPopupOpen} onClose={onClose} card={''} onEdit={onEdit} onSelectCard={onSelectCard}/>
        </main>
    );
}

export default Main;