require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) =>{
    res.send('mohammedobaid_731')
})

app.get('/cod', (req, res) => {
    res.send('<h1>draken13</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

