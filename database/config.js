const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('Connection success');

    } catch (error) {
        console.log(error);
        throw new Error('Error Database Connection');
    }
}


module.exports = {
    dbConnection
}