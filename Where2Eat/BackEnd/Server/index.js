// server/index.js

const path = require("path");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const restaurants = require("./restaurants.json");
const PORT = process.env.PORT || 3001;
const app = express();

/*const mysql = require('mysql')
const connection = mysql.createConnection({
    host: localhost
})*/


app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get("/api", (req, res) => {
    res.json({message: "Hello From Server Side :)"});
});

app.get("/api/home", (req, res) => {
    res.json({message: "Landing Page de Where2Eat"});
});

app.get("/api/restaurants", (req, res) => {
    res.send(restaurants);
});

app.get("/api/restaurants/:id", (req, res)=>{
    //const id = req.params.id;
    //var id = req.params.id;
    //var restaurant = restaurants.find(r => r.id === id);
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));

    if (restaurant){
        res.json(restaurant);
    }else{
        res.status(404).send('Restaurante no encontrado');
    }
});

app.post('/api/restaurants', (req,res) => {
    const restaurant = {
        "id": restaurants.length + 1,
        "name": req.body.name,
        "address": req.body.address,
        "city": req.body.city,
        "country": req.body.country,
        "latitude": parseInt(req.body.latitude),
        "longitude": parseInt(req.body.longitude),
        "phone": req.body.phone,
        "website": req.body.website,
        "category": req.body.category,
        "rating": req.body.rating,
    };

    restaurants.push(restaurant)
    res.send(restaurant)
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
}); 
