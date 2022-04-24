const express = require('express')
// const mongoose = require('mongoose')
const path = require('path')

const AccountRouter = require('./routes/account')

// const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

const app = express()

app.use(express.json())

app.use(express.static('dist')) // set the static folder



app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/account', AccountRouter)

// set favicon
app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})

// set the initial entry point
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(3000, () => {
  console.log('listening on 3000')
  console.log('mongoDB is connected')
})
