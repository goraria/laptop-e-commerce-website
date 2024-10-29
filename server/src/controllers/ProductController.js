const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const Description = require('../models/Description');
const Configuration = require('../models/Configuration')
const Rating = require("../models/Rating")
class ProductController {

    async loadProduct(req, res) {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }

    async loadProductWithID(req, res) {
        const { idProduct } = req.params; // Retrieve idProduct from request parameters
        try {
            const products = await Product.findAll({
                where: {
                    idProduct: idProduct
                }
            }
            );
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }


    async loadDescription(req, res) {
        const { idProduct } = req.params; // Retrieve idProduct from request parameters
        console.log(req.params)
        try {
            // Find descriptions where idProduct matches the provided id
            const description = await Description.findAll({
                where: {
                    idProduct: idProduct
                }
            });

            // If descriptions are found, return them, otherwise return a 404
            if (description.length > 0) {
                res.status(200).json(description);
            } else {
                res.status(404).json({ message: `No descriptions found for product with id ${idProduct}` });
            }

        } catch (error) {
            res.status(500).json({ message: 'Error fetching descriptions', error });
        }
    }

    async loadConfiguration(req, res) {
        const { idProduct } = req.params.idProduct; // Retrieve idProduct from request parameters

        try {
            // Find descriptions where idProduct matches the provided id
            const configuration = await Configuration.findAll({
                where: {
                    idProduct: idProduct
                }
            });

            // If configurations are found, return them, otherwise return a 404
            if (configuration.length > 0) {
                res.status(200).json(configuration);
            } else {
                res.status(404).json({ message: `No configurations found for product with id ${idProduct}` });
            }

        } catch (error) {
            res.status(500).json({ message: 'Error fetching configurations', error });
        }
    }

    async loadRating(req, res) {
        const { idProduct } = req.params; // Retrieve idProduct from request parameters

        try {
            // Find descriptions where idProduct matches the provided id
            const rating = await Rating.findAll({
                where: {
                    idProduct: idProduct
                }
            });

            // If ratings are found, return them, otherwise return a 404
            if (rating.length > 0) {
                res.status(200).json(rating);
            } else {
                res.status(404).json({ message: `No ratings found for product with id ${idProduct}` });
            }

        } catch (error) {
            res.status(500).json({ message: 'Error fetching ratings', error });
        }
    }

}

module.exports = new ProductController();
