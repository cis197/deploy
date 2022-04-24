const mongoose = require('mongoose')

const { Schema, model } = mongoose

// const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
})

const User = model('User', userSchema)

module.exports = User