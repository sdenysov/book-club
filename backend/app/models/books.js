const {DataTypes, Model} = require('sequelize');
const sequelize = require('./');

class Book extends Model {}

Book.init({
    id: DataTypes.NUMBER,
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileId: {
        type: DataTypes.UUIDV4,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Book'
});