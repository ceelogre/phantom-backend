import express from 'express'
const app = express()
const port: any = process.env.PORT || 3003

let normalResponse: any = {
    msg: 'App running.'
}
let exceptionalResponse: any = {
    msg: 'Wow! you\'re a deep digger'
}
app.use('/', (req, res) => {
    res.json(normalResponse)
})

app.use('*', (req, res) => {
    
    res.json(exceptionalResponse)
})

app.listen(port, () => {
    console.info(port)
})