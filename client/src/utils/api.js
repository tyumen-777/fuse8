class Api {
    constructor({address, headers}) {
        this._address = address
        this._headers = headers
    }

    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    addCard(description, link, name, price, type) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                description: description,
                link: link,
                name: name,
                price: price,
                type: type
            })
        }).then(this._checkResponse)
    }

    removeCard(cardId) {
        return fetch(`${this._address}/cards/${cardId}`, {
            method : 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }
    editCard(cardId, description, link, name, price, type) {
        return fetch(`${this._address}/cards/${cardId}`, {
            method : 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                description: description,
                link: link,
                name: name,
                price: price,
                type: type
            })
        })
            .then(this._checkResponse)
    }

    _checkResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка ${res.status}`);
        }
        return res.json();
    }
}

const api = new Api({
    address: 'http://api.tyumen-777.nomoredomains.monster',
    headers: {
        'Content-type': 'application/json'
    }
})

export default api;