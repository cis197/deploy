const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const AccountRouter = require('./routes/account')
const PORT = process.env.PORT || 3000

const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://peter:peter@cluster0.7v7ds.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(express.json())

app.use(express.static('dist')) // set the static folder



app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/account', AccountRouter)

app.get('/data', (req, res) => {
  res.send('data is here')
})

// set favicon
app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})

// set the initial entry point
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(PORT, () => {
  console.log('listening on 3000')
  console.log('mongoDB is connected')
})
