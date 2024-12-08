const { models } = require("../models");

const getPatientGastrointestinalInfo = async (req, res) => {
    try {
        const gastrointestinalInfo = await models.GastrointestinalInfo.findOne({
            where: { assessment_id: req.params.assessment_id },
        });
        if (gastrointestinalInfo == null) {
            res.status(404).json({
                message: "Unable to find patient's gastrointestinal info.",
            });
        }
        res.status(200).json(gastrointestinalInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving gastrointestinal info" });
    }
};

const addPatientGastrointestinalInfo = async (req, res) => {
    try {
        const gastrointestinalInfo = await models.GastrointestinalInfo.create({
            ...req.body,
            assessment_id: req.params.assessment_id,
        });
        res.status(201).json(gastrointestinalInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating gastrointestinal info" });
    }
};

const updatePatientGastrointestinalInfo = async (req, res) => {
    try {
        const gastrointestinalInfo = await models.GastrointestinalInfo.findByPk(
            req.params.id
        );

        if (gastrointestinalInfo == null) {
            return res.status(404).json({
                message: "Unable to find the patient's gastrointestinal info",
            });
        } else {
            await gastrointestinalInfo.update({
                id: req.params.id,
                ...req.body,
                assessment_id: req.params.assessment_id,
                modified_date: new Date(),
            });
            return res.status(200).json(gastrointestinalInfo);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating gastrointestinal info" });
    }
};

const deletePatientGastrointestinalInfo = async (req, res) => {
    try {
        const gastrointestinalInfo = await models.GastrointestinalInfo.findByPk(
            req.params.id
        );
        if (gastrointestinalInfo == null) {
            return res.status(404).json({
                message: "Unable to find the patient's gastrointestinal info.",
            });
        } else {
            await gastrointestinalInfo.destroy();
            return res.status(204).json(gastrointestinalInfo);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting gastrointestinal info" });
    }
};

module.exports = {
    getPatientGastrointestinalInfo,
    addPatientGastrointestinalInfo,
    updatePatientGastrointestinalInfo,
    deletePatientGastrointestinalInfo,
}