const express = require("express");

const app = express();

app.use('/', (res, req, next) => {
    
})

app.listen(5566, () => {
    console.log('server is running at 5566')
})