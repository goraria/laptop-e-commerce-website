const express = require('express');
const app = express();
const db = require('../config/database.js')


const deleteUser = async (userId) => {
    try {
        // Tìm người dùng theo ID
        const user = await User.findByPk(userId);

        // Kiểm tra xem người dùng có tồn tại không
        if (!user) {
            return { success: false, message: 'User not found' };
        }

        // Xóa người dùng
        await user.destroy();

        return { success: true, message: 'User deleted successfully' };
    } catch (error) {
        console.error('Error deleting user:', error);
        return { success: false, message: 'Error deleting user' };
    }
};
const updateUser = async (userId, updatedData) => {
    try {
        // Tìm người dùng theo ID
        const user = await User.findByPk(userId);

        // Kiểm tra xem người dùng có tồn tại không
        if (!user) {
            return { success: false, message: 'User not found' };
        }

        // Cập nhật thông tin người dùng
        await user.update(updatedData);

        return { success: true, message: 'User updated successfully', data: user };
    } catch (error) {
        console.error('Error updating user:', error);
        return { success: false, message: 'Error updating user' };
    }
};


