const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/create', async (req, res) => {
  const { username, password } = req.body

  try {
    await User.create({ username, password })
    res.send('user creation was successful')
  } catch (e) {
    console.log(e)
    res.send('user creation had a problem')
  }
})

router.get('/query', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (e) {
    console.log(e)
    res.send('error occured')
  }
})

router.post('/update', async (req, res) => {
  try {
    const { username, password } = req.body
    await User.updateOne({ username }, { password })

    // const user = await User.findOne({ username })
    // if (verify(user)) {
    //   await User.updateOne()
    // }

    res.send('user update was successful')
  } catch (e) {
    console.log(e)
    res.send('error occured')
  }
})

router.post('/delete', async (req, res) => {
  try {
    const { username, password } = req.body
    await User.deleteOne({ username, password })
    res.send('user update was successful')
  } catch (e) {
    console.log(e)
    res.send('error occured')
  }
})

module.exports = router