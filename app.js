const express = require('express');

const app = express();

//make everything inside of public/available
app.use(express.static('public'));

// about Route
app.get('/about/tom', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about.html');
});

//home-page route
app.get('/celebrity/tom', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home-page.html');
    
});

//photogallery route
app.get('/photogallery/tom', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/photogallery.html');
});


//server started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });