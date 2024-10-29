const Address = require('../models/Address');

class AddressController {
    async getAllAddresses(req, res) {
        try {
            const addresses = await Address.findAll({ where: { idaccount: req.user.id } });
            res.json(addresses);
        } catch (error) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu' });
        }
    };

    async getAddressById(req, res) {
        const { id } = req.params;
        try {
            const address = await Address.findByPk(id);
            if (address) {
                res.json(address);
            } else {
                res.status(404).json({ error: 'Địa chỉ không tồn tại' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu' });
        }
    };

    async createAddress(req, res) {
        const id = req.user.id;
        const { tower, street, district, city, state, country } = req.body;
        console.log(id, req.body);
        try {
            const newAddress = await Address.create({
                idaccount: id,
                tower,
                street,
                district,
                city,
                state,
                country
            });
            res.status(201).json(newAddress);
        } catch (error) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi thêm địa chỉ' });
        }
    };

    async updateAddress(req, res) {
        try {
            const address = await Address.findByPk(req.params.idaddress);
            if (address) {
                await address.update(req.body);
                res.json(address);
            } else {
                res.status(404).json({ error: 'Địa chỉ không tồn tại' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi cập nhật địa chỉ' });
        }
    };
}

module.exports = new AddressController();