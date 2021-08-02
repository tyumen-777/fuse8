import React from 'react';
import './EditPopup.css'


function EditPopup({onClose, isOpen, onEdit, card, onSelectCard}) {
    const [description, setDescription] = React.useState('');
    const [link, setLink] = React.useState();
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [type, setType] = React.useState('');

    function handleSubmit(evt) {
        evt.preventDefault()
        onEdit(onSelectCard, {
            description: description,
            link: link,
            name: name,
            price: price,
            type: type,
        })
    }

    function editDescription(evt) {
        setDescription(evt.target.value)
    }

    function handleEditLink(evt) {
        setLink(evt.target.value)
    }

    function editName(evt) {
        setName(evt.target.value)
    }

    function editPrice(evt) {
        setPrice(evt.target.value)
    }

    function editType(evt) {
        setType(evt.target.value)
    }

    return (
        <div className={`popup  ${onSelectCard && isOpen ? 'popup__opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__button-close" type="button" onClick={onClose}/>
                <h2 className="popup__heading">Редактировать объект</h2>
                <form className="popup__input" name="popup" noValidate onSubmit={handleSubmit}>
                    <input className="popup__field" type="url" placeholder="Изображение"
                           onChange={handleEditLink} required name="link"/>
                    <input className="popup__field" type="text" placeholder="Название" onChange={editName} required/>
                    <input className="popup__field" type="text" placeholder="Короткое описание"
                           onChange={editDescription} required/>
                    <input className="popup__field" type="number" placeholder="Цена" onChange={editPrice} required/>
                    <input className="popup__field" type="text" placeholder="Тип жилья" onChange={editType} required/>
                    {/*<select name="" id="types" className="popup__field" onChange={addType}>*/}
                    {/*    <option value="Коммерческое">Коммерческое</option>*/}
                    {/*    <option value="Жилое">Жилое</option>*/}
                    {/*</select>*/}
                    <button className="popup__button-save" type="submit">
                        Редактировать
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditPopup;