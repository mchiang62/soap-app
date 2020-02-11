# Browning's Soaps

This react app is a storefront to market and sell soaps made by the Browning's Soaps company.  These handmade, artisan soaps are lovingly crafted
by a family in West Georgia, and we saw their amazing product as an opportunity to create a react app from start to finish.  This app uses React, MongoDB, MongoDB Atlas, Expressjs, Nodejs, Boostrap, and Passport.  With this app a user can browse the different soaps offered, and can add them to a cart for purchasing.  While the user cannot actually purchase the soaps at this stage, PayPal and Venmo integration are not far off with our completed shopping cart.  In addition to being useful for users, an administrator can add or remove soaps from the database at will.  Users can also leave messages for the business to let them know how much they love their product!

## Getting Started

In order to get this project running on your local machine, one needs to fork and clone the code onto their local machine.  Once it is in a local repository, run an "npm i" to install all neccessary node modules.  From there, the project can be spun up on "http://localhost:3000" with the api
routes running on "http://localhost:3001".  While our database has a private connection, to test it yourself create a .env file and connect either your MongoDB Atlas information or local MongoDB server via setting MONGODB_URI:"your information goes here"

### Prerequisites

In order to get all of the parts of the project running, you will need: 

```
node
MongoDB Atlas
```

### Installing

To begin, your first step should be to run:

```
npm i
```

in order to install all needed node modules for the project.  Once you have run this npm i, you can seed your database.  To do this, use the following instructions:

```
cd scripts/
npm run seed
```

This will seed your database with some starter information, which can be found in the seedDB file.  Once your database has been seeded and your node modules installed, you can spin up the app on your local machine.  To do this, first change directory back to the root directory of the repository, and then run:

```

npm start
```

This will start the server on your local machine.  Congratulations!  You have now started the project.


## Deployment

This app is currently deployed to Heroku on the URL: "https://brownings-soap.herokuapp.com/".  In order to deploy the project to Heroku, first we linked our GitHub repository to Heroku.  This enabled automatic deployments, so each time a new branch was merged into master, it would automatically deploy and build the new version of the site. 

## Built With

* [React](https://reactjs.org/) - Web framework
* [MongoDB](https://www.mongodb.com/) - Database management
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Database hosting
* [Passport](http://www.passportjs.org/docs/) - User authentication
* [Express](https://expressjs.com/) - Server routing
* [Node.js](https://nodejs.org/en/) - Server communication
* [Bootstrap](https://getbootstrap.com/) - Styling framework




## Authors

* **Ashley Clark** - *Products page, shopping cart, styling* - [Ashley Clark](https://github.com/dashley06)

* **Melissa Chiang** - *Home page, react router, styling, general UI design* - [Melissa Chiang](https://github.com/mchiang62)

* **Ed Dean** - *User work/authentication, Passport, carried the team* - [Ed Dean](https://github.com/edean78)

* **Daniel Gallagher** - *Database work, admin page, contact page, models* - [Daniel Gallagher](https://github.com/dagallagher221)

* **Patience Condell** - *General support, login work* - [Patience Condell](https://github.com/rubbishspitfire)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to the entire staff of the Trilogy Bootcamp at Georgia Tech.  We have learned so much thanks to all of you.
* Thank you to the creators of react, node, passport, MongoDB, etc. for all that you have added to web development.
