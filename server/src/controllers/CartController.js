const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const Cart = require('../models/Cart')
const CartItem = require('../models/CartItem');
const { where } = require('sequelize');
class CartController {

    async loadCart(req, res) {
        // const { idCart } = req.params; 
        try {
            const cart = await Cart.findAll();
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }

    async loadCartById(req,res){
        const { idCart } = req.params; 
        try {
            const cart = await Cart.findAll(
                {
                    where: {
                        idcart: idCart
                    }
                }
            );
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }

    async Japtor(req,res){
        const { id } = req.user.id;
        
        try {
            const cart = await Cart.findOne({
                where: {
                    idaccount: id
                }
            })
            res.status(200).json(cart);

        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }

    }
    async loadCartItem(req,res){
        const { idCart } = req.params; 
        try {
            const cart_item = await CartItem.findAll(
                {
                    where: {
                        idcart: idCart
                    }
                }
            );
            res.status(200).json(cart_item);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }
    


}

module.exports = new CartController();
