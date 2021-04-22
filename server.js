const express = require('express')
const app = express()
const PORT = process.env.port || 1337;

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
