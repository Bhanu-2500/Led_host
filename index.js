const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT 

let ledStatus= new Boolean();
ledStatus=0;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/', function (req, res) {
   ledStatus=req.body.status;
   res.send(ledStatus);

});

app.get('/slave', function (req, res) {
   res.send(ledStatus);
});

app.listen(port);