const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('index', {output: null, error: null});
})

app.post('/', function (req, res) {
let a = parseInt (req.body.number1);
let b = parseInt(req.body.number2);
let op = req.body.operation;
let result;
if(op == "add"){
   result = a + b;
}
if(op == "sub"){
   result = a - b;
}
if (op == "mul"){
  result = a * b;
}
if(op == "div"){
  result = a / b;
}
 res.render('index', {output: result, error: null});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
