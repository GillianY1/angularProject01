const exprss = require('express');
const app = exprss(); // middleware
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const server = http.createServer(app);
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://mindy:UrLFUJxz60MxwnSq@cluster0.v5msgya.mongodb.net/')
.then(()=>{
  console.log('Connected to database!');
})
.catch(()=>{
  console.log('Connection failed!');
});

app.use(bodyParser.json()); // to parse the incoming request
app.use(bodyParser.urlencoded({extended: false})); // to parse the incoming request

app.use((req, res, next)=>{ // next() is used to pass the request
  res.setHeader('Access-Control-Allow-Origin', '*'); // * means any domain can access the server
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // means the incoming request may have these headers
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  // options is used to check if the server is ready to accept the request, shall add it
  // it's an implicit request sent by the browser
  next();
});

// to handle post requests
app.post("api/posts",(req, res, next)=>{
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  }); //req.body;

  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});


app.use("/api/posts",(req, res, next)=>{
  const posts = [
    {
      id: '1',
      title: 'First server-side post',
      content: 'This is the first content coming from the server'
    },
    {
      id: '2',
      title: 'Second server-side post',
      content: 'This is the second content coming from the server!'
    }
  ];

  //res.send('Hello from express!');
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
})

module.exports = app;
