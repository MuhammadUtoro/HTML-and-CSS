const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const uuid = require('uuid');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/restaurants', function(request, response) {
    const filePath = path.join(__dirname, 'data', 'restaurant.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    response.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants });

});

// Creating Dynamic Route
app.get('/restaurants/:id', function(request, response) {
    const restaurantId = request.params.id;
    const filePath = path.join(__dirname, 'data', 'restaurant.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
            return response.render('restaurant-detail', {restaurant: restaurant});
        }
    }

    response.status(404).render('404');
});

app.get('/about', function(request, response) {
    response.render('about');
});

app.get('/recommend', function(request, response) {
    response.render('recommend');
});

app.post('/recommend', function(request, response) {
    const restaurant= request.body;
    restaurant.id = uuid.v4();
    const storedRestaurants = getStoredRestaurant();
    storedRestaurants.push(restaurant);

    storeRestaurants(restaurant);
    response.redirect('/confirm');
});

app.get('/confirm', function(request, response) {
    response.render('confirm');
});

app.use(function(request, response) {
    response.status(404).render('404');
});

app.use(function(error, request, response, next) {
    response.status(500).render('500');
});

app.listen(3000);