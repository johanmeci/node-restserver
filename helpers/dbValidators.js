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

module.exports = {
    roleValidate,
    emailValidate
}