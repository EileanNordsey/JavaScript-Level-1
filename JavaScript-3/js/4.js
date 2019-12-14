'use strict'

const products = [
    {
    id: 3,
    price: 127,
    photos: [
    "1.jpg",
    "2.jpg",
    ]
    },
    {
    id: 5,
    price: 499,
    photos: []
    },
    {
    id: 10,
    price: 26,
    photos: [
    "3.jpg"
    ]
    },
    {
    id: 8,
    price: 78,
    },
    ];

    let productsWithPhotos = products.filter(item => "photos" in item && item.photos.length > 0);

    let sortedLowHigh = products.sort(function(item1, item2) {
        return item1.price - item2.price;
    });

    console.log(products[0].price);
    console.log(products[1].price);
    console.log(products[2].price);
    console.log(products[3].price); // можно ли вывести цену компактнее?..