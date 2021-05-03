const express = require('express')
const app = express()
const PORT = process.env.port || 1337;
const {User} = require('./db/schemas/user');
const {Post} = require('./db/schemas/post')
const {auth} = require('./db/connect')

app.get('/', (req, res) => {
    res.send('hello')
})

// db
auth();
User.sync().then((result) => {
    console.log(result);
})
Post.sync().then((result) => {
    console.log(result);
})
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
