const express = require('express')
const cors = require('cors')
const menu = require('../1/data.json');
const app = express()
app.use(cors());



app.get('/', function(req, res) {
    const resp = menu
    res.send(resp)
})
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});