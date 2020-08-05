const express = require('express')
const app = express()
const port = 4200


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/submit', (req, res) => {
   console.log("Request is successfully sent.")
   
})

app.listen(port,'127.0.0.1',  ()=> {
    console.log(`Listening to port ${port}`)
})