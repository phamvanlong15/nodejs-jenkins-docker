const express = require("express");

const app = express();

app.use('/', (res, req, next) => {
    res.status(200).send({
        message: "Success",
        data: ""
    })
})

app.get('/home', (req, res, next) => {
    res.send('Home page')
})

app.listen(5566, () => {
    console.log('server is running at 5566')
})