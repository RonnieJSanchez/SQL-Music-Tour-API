"use strict";
const { Model } = require("sequelize");
const meet_greets = require("./meet_greets");
const set_times = require("./set_times");
const stage_event = require("./stage_event");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({stage, stage_event, meet_greets, set_time}) {
      Event.belongsToMany(stage, {
        foreignKey: 'event_id',
        as: 'stages', 
        through:stage_event
      })

      Event.hasMany(meet_greets,{
        foreignKey: 'event_id',
        as: 'Meet&greet'
      })

      Event.hasMany(set_time, {
        foreignKey: "event_id",
        as: 'set_times'
      })
      
    }
  }
  Event.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
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
      modelName: "Event",
      tableName: "events",
      timestamps: false,
    }
  );
  return Event;
};