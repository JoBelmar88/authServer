const mongoose = require("mongoose");
require('dotenv').config();

const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.BD_CNN );

        console.log('Base de datos online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
    };
};

module.exports = {
    dbConnection
};