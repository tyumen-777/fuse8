import React from "react";
import './Filter.css';
import addButton from '../../images/plusButton.svg'

function Filter({onAddPlace, searchValue, setSearchValue}) {

    return (
        <div className="filter">
            <form className="form">
                <label className="filter__text" htmlFor="search">Фильтр</label>
                <input className="input" placeholder="Введите название объекта" id="search" value={searchValue}
                       onChange={(evt) => {
                           setSearchValue(evt.target.value);
                       }}/>
                <button className="filter__add-button" type="button" onClick={onAddPlace}>
                    <img src={addButton} alt="Значок добавить"/>
                </button>
            </form>
        </div>
    )
}

export default Filter;