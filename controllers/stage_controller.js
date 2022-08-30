//DEPENDENCIES
const { Op } = require("sequelize");
const stages = require("express").Router();
const db = require("../models");
const { Stage } = db;
   
// FIND ALL Stage
stages.get('/', async (req, res) => {
    try {
        const foundstage = await Stage.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundstage)
    } catch (error) {
        res.status(500).json(error)
    }
});

// FIND A SPECIFIC STAGE
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })

        if (foundStage != null) {
            res.status(200).json(foundStage)
        } else {
            res.status(404).json("Stage " + req.params.id + " does not exist!")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE A Stage
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
});

// UPDATE A STAGE
stages.put("/:id", async (req, res) => {
  try {
    const updatedStages = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedStages} stage(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE A STAGE
stages.delete("/:id", async (req, res) => {
  try {
    const deletedStages = await Stage.destroy({
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedStages} stage(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//EXPORT
module.exports = stages
