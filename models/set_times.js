"use strict";
const { Model } = require("sequelize");
const stage = require("./stage");
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bands, Event, stage }) {
      set_time.belongsTo(Bands, {
        foreignKey: "band_id",
        as: "set_times",
      });

      // event
      set_time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });

      // stage
      set_time.belongsTo(stage, {
        foreignKey: "stage_id",
        as: "stage",
      });
    }
  }
  set_time.init(
    {
      set_time_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "set_time",
      tableName: "set_times",
      timestamps: false,
    }
  );
  return set_time;
};