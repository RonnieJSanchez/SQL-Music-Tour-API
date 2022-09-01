'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Event, stage_event,set_time }) {
     stage.belongsToMany( Event, {
      foreignKey: 'stage_id',
      as: 'events',
      through: stage_event
     })
     stage.hasMany(set_time, {
      foreignKey:'stage_id',
      as: 'set_times'
     })
     

    }
  }
  stage.init(
    {
      stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stage_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "stage",
      tableName: "stages",
      timestamps: false,
    }
  );
  return stage;
};