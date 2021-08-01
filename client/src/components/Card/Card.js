import React from 'react';
import './Card.css'
import EditPopup from "../EditPopup/EditPopup";


function Card({card, onCardDelete, onEditPlace, isEditPopupOpen, onClose, onEdit, onSelectCard}) {
    function handleCardDelete() {
        onCardDelete(card)
    }
    function handleEditCardOpen() {
        onEditPlace(card)
    }

    return (
        <>
            <li className="card">
                <div className="card__img-wrap">
                    <img src={card.link} className="card__image" alt='Квартира'/>
                    <button className='card__button-delete' type='button' onClick={handleCardDelete}/>
                    <button className='card__button-edit' type="button" onClick={handleEditCardOpen}/>
                    <p className="card__type">Тип: {card.type}</p>
                </div>
                <div className="card__info">
                    <p className="card__title">Название: {card.name}</p>
                    <p className="card__description">Описание: {card.description}</p>
                    <p className="card__price">Цена: {card.price}&#8381;</p>
                </div>
            </li>
            {/*<EditPopup isOpen={isEditPopupOpen} onClose={onClose} card={card} onEdit={onEdit} onSelectCard={onSelectCard}/>*/}
        </>
    )
}

export default Card;