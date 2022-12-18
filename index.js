if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
 
const api_key = process.env.API_KEY;

app.get('/dinoname', async(req,res) =>{ 
  
const fetchApi = await fetch('https://dinoipsum.com/api/?format=json&words=10&paragraphs=3');

const dinonameResponse = await fetchApi.json();
console.log(dinonameResponse)
res.json(dinonameResponse);
});

app.get('/dinoimage', async(req,res) =>{
  
  const fetchApi = await  fetch('https://bing-image-search1.p.rapidapi.com/images/search?q=Dinosaur&count=20',{
   method : 'GET',
   headers : {
    'X-RapidAPI-Key': 'fe8dd1772dmshcf98b79734e00d5p137c68jsnc923a6ee5086',
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'}
  })

  const dinoimageResponse = await fetchApi.json(); 
  console.log(dinoimageResponse)
  res.json(dinoimageResponse);
  });
