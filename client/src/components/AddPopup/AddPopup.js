import React from 'react';
import './AddPopup.css'

function AddPopup({onAddPlace, onClose, isOpen}) {
    const [description, setDescription] = React.useState('');
    const [link, setLink] = React.useState('');
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [type, setType] = React.useState('');

    function handleSubmit(evt) {
        evt.preventDefault()
        onAddPlace({
            description: description,
            link: link,
            name: name,
            price: price,
            type: type,
        })
    }

    function addDescription(evt) {
        setDescription(evt.target.value)
    }

    function addLink(evt) {
        setLink(evt.target.value)
    }

    function addName(evt) {
        setName(evt.target.value)
    }

    function addPrice(evt) {
        setPrice(evt.target.value)
    }

    function addType(evt) {
        setType(evt.target.value)
    }

    return (
        <div className={`popup  ${isOpen && 'popup__opened'}`}>
            <div className="popup__container">
                <button className="popup__button-close" type="button" onClick={onClose}></button>
                <h2 className="popup__heading">Добавить новый объект</h2>

                <form className="popup__input" name="popup" noValidate onSubmit={handleSubmit}>
                    <input className="popup__field" type="url" placeholder="Изображение" onChange={addLink} required/>
                    <input className="popup__field" type="text" placeholder="Название" onChange={addName} required/>
                    <input className="popup__field" type="text" placeholder="Короткое описание"
                           onChange={addDescription} required/>
                    <input className="popup__field" type="number" placeholder="Цена" onChange={addPrice} required/>
                    {/*<input className="popup__field" type="text" placeholder="Тип жилья" onChange={addType} required/>*/}
                    <select name="" id="types" className="popup__field" onChange={addType}>
                        <option value="Коммерческое">Коммерческое</option>
                        <option value="Жилое">Жилое</option>
                    </select>
                    <button className="popup__button-save" type="submit">
                        Добавить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddPopup;