require('dotenv').config()
const mongoose = require("mongoose");
const db = require("../models");

console.log(process.env.MONGODB_URI)
mongoose.connect(
    process.env.MONGODB_URI);

const soapSeed = [
    {
        name: "Apple Crisp",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439060793_6f1b6075b3_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Cherry Almond",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439757997_25bcf571f5_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Coffee",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439060758_3d258f1070_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Honeysuckle",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439532661_8fa6868678_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Lavender Oatmeal",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439532611_9e1cbf262b_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Sweet Orange",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439060473_fe59d64f8b_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Peppermint Charcoal",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439532516_896146a91c_b.jpg",
        quantity: 10,
        inCart: false
    },
  
    {
        name: "Pumpkin Spice",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439757822_a5e3373162_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Tea Tree",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439060428_9726cb1c26_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Unscented",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439757737_47aec79826_b.jpg",
        quantity: 10,
        inCart: false
    },
    {
        name: "Wildflower Honey",
        price: 4,
        image: "https://live.staticflickr.com/65535/49439060383_b3fc510c91_b.jpg",
        quantity: 10,
        inCart: false
    }

];

const photoSeed = [
    {
        name: "Logo-no border",
        image: "https://live.staticflickr.com/65535/49435877052_170647b629_o.png"
    },
    {
        name: "Making-of-square",
        image: "https://live.staticflickr.com/65535/49439757782_26e0ccdcb2_b.jpg"
    },
    {
        name: "Making-of-rectangle",
        image: "https://live.staticflickr.com/65535/49439060513_dbdcc069a5_b.jpg"
    },
    {
        name: "Stacked-soaps-with-wrappers",
        image: "https://live.staticflickr.com/65535/49439757797_e4785320f0_b.jpg"
    },
    {
        name: "Purple-soaps-yard",
        image: "https://live.staticflickr.com/65535/49439060548_2e9b890f50_b.jpg"
    },
    {
        name: "Orange-soaps-table",
        image: "https://live.staticflickr.com/65535/49439757852_ddf82fbc8c_b.jpg"
    },
    {
        name: "Orange-soaps-with-oranges",
        image: "https://live.staticflickr.com/65535/49439532561_201cf71c12_b.jpg"
    },
    {
        name: "Logo-with-fire",
        image: "https://live.staticflickr.com/65535/49439060653_c29df9f27e.jpg"
    },
    {
        name: "Handmade-local-soaps-sign",
        image: "https://live.staticflickr.com/65535/49439060678_6f96ebb95b.jpg"
    },
    {
        name: "Honey-white",
        image: "https://live.staticflickr.com/65535/49439060693_6245ea1b04.jpg"
    },
    {
        name: "First-bar-of-soap",
        image: "https://live.staticflickr.com/65535/49439532676_e1279b9603.jpg"
    },
    {
        name: "FB-sign",
        image: "https://live.staticflickr.com/65535/49439757977_5dfc6a3f15.jpg"
    }
]

db.Soap
    .remove({})
    .then(() => db.Soap.collection.insertMany(soapSeed))
    .then(data => {
        console.log(data.result.n + " records inserted into Soaps!");
        //process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Photo 
    .remove({})
    .then(() => db.Photo.collection.insertMany(photoSeed))
    .then(data => {
        console.log(data.result.n + " records inserted into Photos!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });