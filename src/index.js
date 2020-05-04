const express = require('express')
const app = express()

app.use('/', (req, res) => {
    res.send('App running.')
})

app.use('*', () => {
    res.send('Wooww, you\'re a deep digger')
})

app.listen('3003', () => {
    console.info('3003')
})