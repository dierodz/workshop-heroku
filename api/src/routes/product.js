const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});
server.post("/", (req, res, next) => {
  Product.create(req.body)
    .then((product) => {
      res.send(product);
    })
    .catch(next);
});
server.put("/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .then((product) => {
      return product.update(req.body);
    })
    .then((product) => {
      res.send(product);
    })
    .catch(next);
});
server.delete("/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .then((product) => {
      return product.destroy();
    })
    .then((product) => {
      res.send(product);
    })
    .catch(next);
});

module.exports = server;
