'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  events.init({
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    thing: {type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'events',
    tableName: 'events',
    timestamps: false
  });
  return events;
};