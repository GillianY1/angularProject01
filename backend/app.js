const exprss = require('express');
const app = exprss(); // middleware
const http = require('http');

const server = http.createServer(app);
const port = process.env.PORT || 3000;

/*app.use((req, res, next)=>{
  console.log('Request URL: ' + req.url);
  next();
})
*/

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
