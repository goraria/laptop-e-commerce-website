const Bill = require('../models/Address');
const BillDetail = require('../models/BillDetail')
const Product = require('../models/Product')
const Color = require('../models/Color');
const Configuration = require('../models/Configuration');
// const Accessory = require('../models/Accessory');
const Discount = require('../models/Discount');
const Account = require('../models/Account')
const User = require('../models/User');

class BillController {
    async getAllBill(req, res) {
        try {
            const accounts = await Account.findAll();

            let accusers = []
            for (const acc in accounts) {
                const accuser = await User.findOne( {where: {idaccount: acc.idaccount}} );
                accusers.join(accuser)
            }
            const bill = await Bill.findAll();
            // res.json(bill);
        } catch (error) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu' });
        }
    };

    async getAllBillByAccount(req, res) {
        try {
            const addresses = await Bill.findAll({ where: { idaccount: req.user.id } });
            res.json(addresses);
        } catch (error) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu' });
        }
    };

    async getBillById(req, res) {
        const { id } = req.params;
        try {
            const address = await Bill.findByPk(id);
            if (address) {
                res.json(address);
            } else {
                res.status(404).json({ error: 'Địa chỉ không tồn tại' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu' });
        }
    };

    async createBill(req, res) {
        const idaccount = req.user.id;
        const { tower, street, district, city, state, country } = req.body;
        console.log(idaccount, req.body);
        try {
            const newAddress = await Bill.create({
                idaccount: req.user.id,
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

    async updateBill(req, res) {
        try {
            const address = await Bill.findByPk(req.params.idaddress);
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

    async deleteBill(req, res) {
        try {
            const address = await Bill.findByPk(req.params.idaddress);

            if (!address) {
                return res.status(404).json({ error: "Address not found" });
            }

            await address.destroy();
            res.status(200).json({ message: "Address deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete address" });
        }
    }
}

module.exports = new BillController();