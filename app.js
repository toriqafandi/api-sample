const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3050

app.get('/', (req, res) => {
    console.log('FGVHJK');
  res.send('Hello World CIHUI!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})