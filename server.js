const express = require('express')
const app = express()
const PORT = process.env.port || 1337;

const {auth} = require('./db/connect')

app.get('/', (req, res) => {
    res.send('hello')
})

// db
auth()

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
