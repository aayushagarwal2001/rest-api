<<<<<<< HEAD
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/projects';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const archieveRouter = require('./routes/archeive')
app.use('/archeive', archieveRouter)

=======
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/projects';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const archieveRouter = require('./routes/archeive')
app.use('/archeive', archieveRouter)

>>>>>>> 9ed1067a0a867adcb7364cc679d46336731992f4
app.listen(3000, () => console.log('Server Started'))