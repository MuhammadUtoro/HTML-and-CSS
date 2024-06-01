const express = require('express');
const router = express.Router();
const resData = require('../util/restaurant-data');
const uuid = require('uuid');

router.get('/restaurants', function(request, response) {
    let order = request.query.order;
    let nextOrder = 'desc';

    if (order !== 'asc' && order !== 'desc') {
        order = 'asc';
    }

    if (order === 'desc') {
        nextOrder = 'asc';
    }

    const storedRestaurants = resData.getStoredRestaurant();

    storedRestaurants.sort(function(resA, resB) {
        if (
            (order === 'asc' && resA.name > resB.name) ||
            (order === 'desc' && resB.name > resA.name)
        ) {
            return 1;
        }
        return -1;
    });

    response.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants, nextOrder: nextOrder
     });

});

// Creating Dynamic Route
router.get('/restaurants/:id', function(request, response) {
    const restaurantId = request.params.id;
    const storedRestaurants = resData.getStoredRestaurant();

    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
            return response.render('restaurant-detail', {restaurant: restaurant});
        }
    }

    response.status(404).render('404');
});

router.get('/recommend', function(request, response) {
    response.render('recommend');
});

router.post('/recommend', function(request, response) {
    const restaurant= request.body;
    restaurant.id = uuid.v4();
    const storedRestaurants = resData.getStoredRestaurant();
    storedRestaurants.push(restaurant);

    storeRestaurants(restaurant);
    response.redirect('/confirm');
});

router.get('/confirm', function(request, response) {
    response.render('confirm');
});

module.exports = router;