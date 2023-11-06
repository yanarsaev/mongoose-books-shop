const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routes/books.route'))
app.use(require('./routes/genres.route'))
app.use(require('./routes/authors.route'))
app.use(require('./routes/reviews.route'))

mongoose.connect('mongodb+srv://yanarsaev:eBaRuSm4gmSKDZ2u@cluster0.2gs1s7k.mongodb.net/library')
.then(() => console.log('[MongoDb] Подключен'))
.catch(() => console.log('[MongoDb] НЕ подключен'))

app.listen(3000, () => console.log('Server has been started'))