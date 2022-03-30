const Role = require('../models/role');
const User = require('../models/user');

const roleValidate = async(role = '') => {
    const existRole = await Role.findOne({ role });
    if (!existRole) {
        throw new Error(`Role ${role} does not exist`);
    }
}

const emailValidate = async(email = '') => {
    //Check email exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error(`The email ${email} already exists`);
    }
}

const userByID = async(id) => {
    //Check email exists
    const emailUserID = await User.findById(id);
    if (!emailUserID) {
        throw new Error(`The ID ${id} does not exist`);
    }
}

module.exports = {
    roleValidate,
    emailValidate,
    userByID
}