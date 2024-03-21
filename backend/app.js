const exprss = require('express');
const app = exprss(); // middleware
const http = require('http');

const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use((req, res, next)=>{
  console.log('Request URL: ' + req.url);
  next();
})

app.use((req, res, next)=>{
  res.send('Ciao , from express Gina');
})

module.exports = app;
