const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');

const cardRoutes = require('./routes/card');
const NotFoundError = require('./errors/notFoundError');


const PORT = config.get('port') || 5000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', cardRoutes);
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
};
app.use('*', () => {
    throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
    console.log(err);
    if (err.kind === 'ObjectId') {
        res.status(400).send({
            message: 'Неверно переданы данные',
        });
    } else {
        res.status(statusCode).send({
            message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
        });
    }
});



async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start();


