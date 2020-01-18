const mongoose = require("mongoose");
const db = require("../models");

console.log(process.env.MONGODB_URI)
mongoose.connect(
    process.env.MONGDB_URI || "mongodb://192.168.99.101:27017/Soap"
);

const soapSeed = [
    {
        name: "Apple Crisp",
        price: 4,
        image: "https://i.imgur.com/2EVc3zE.jpg",
        quantity: 10
    },
    {
        name: "Cherry Almond",
        price: 4,
        image: "https://i.imgur.com/HO2gxm0.jpg",
        quantity: 10
    },
    {
        name: "Coffee",
        price: 4,
        image: "https://i.imgur.com/Gn0RCAh.jpg",
        quantity: 10
    },
    {
        name: "Honeysuckle",
        price: 4,
        image: "https://i.imgur.com/OaHRCTV.jpg",
        quantity: 10
    },
    {
        name: "Lavender Oatmeal",
        price: 4,
        image: "https://i.imgur.com/IepIAjk.jpg",
        quantity: 10
    },
    {
        name: "Sweet Orange",
        price: 4,
        image: "https://i.imgur.com/thHMqPg.jpg",
        quantity: 10
    },
    {
        name: "Peppermint Charcoal",
        price: 4,
        image: "https://i.imgur.com/33BCneS.jpg",
        quantity: 10
    },
  
    {
        name: "Pumpkin Spice",
        price: 4,
        image: "https://i.imgur.com/qwrYfKj.jpg",
        quantity: 10
    },
    {
        name: "Tea Tree",
        price: 4,
        image: "https://i.imgur.com/sJdacBy.jpg",
        quantity: 10
    },
    {
        name: "Unscented",
        price: 4,
        image: "https://i.imgur.com/ZgcaOXW.jpg",
        quantity: 10
    },
    {
        name: "Wildflower Honey",
        price: 4,
        image: "https://i.imgur.com/3EsCPTr.jpg",
        quantity: 10
    }

];

db.Soap
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