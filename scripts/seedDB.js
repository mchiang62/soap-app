const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGDB_URI
);

const soapSeed = [
    {
        name: "Apple Crisp",
        price: 4,
        image: "https://i.imgur.com/2EVc3zE.jpg"
    },
    {
        name: "Cherry Almond",
        price: 4,
        image: "https://i.imgur.com/HO2gxm0.jpg"
    },
    {
        name: "Coffee",
        price: 4,
        image: "https://i.imgur.com/Gn0RCAh.jpg"
    },
    {
        name: "Honeysuckle",
        price: 4,
        image: "https://i.imgur.com/OaHRCTV.jpg"
    },
    {
        name: "Lavender Oatmeal",
        price: 4,
        image: "https://i.imgur.com/IepIAjk.jpg"
    },
    {
        name: "Sweet Orange",
        price: 4,
        image: "https://i.imgur.com/thHMqPg.jpg"
    },
    {
        name: "Peppermint Charcoal",
        price: 4,
        image: "https://i.imgur.com/33BCneS.jpg"
    },
  
    {
        name: "Pumpkin Spice",
        price: 4,
        image: "https://i.imgur.com/qwrYfKj.jpg"
    },
    {
        name: "Tea Tree",
        price: 4,
        image: "https://i.imgur.com/sJdacBy.jpg"
    },
    {
        name: "Unscented",
        price: 4,
        image: "https://i.imgur.com/ZgcaOXW.jpg"
    },
    {
        name: "Wildflower Honey",
        price: 4,
        image: "https://i.imgur.com/3EsCPTr.jpg"
    }

];

db.Seeds 
    .remove({})
    .then(() => db.Soap.collection.insertMany(soapSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });