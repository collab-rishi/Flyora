'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.Airplane, {
      foreignKey: 'airplaneId',
      as: 'airplaneDetail'
     });
     this.belongsTo(models.Airport, {
       foreignKey: 'departureAirportId',
       as: 'departureAirport',
     });
     this.belongsTo(models.Airport, {
       foreignKey: 'arrivalAirportId'
     });

    }
  }
  Flight.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departureAirportId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrivalAirportId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardingGate: {
      type: DataTypes.INTEGER,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};