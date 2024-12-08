/* 
Name: Dylan Bellinger
Date: 12/8/2024 
Description: Musculoskeletal Info controller for related requests.
*/
const { models } = require("../models");

const getPatientMusculoskeletalInfo = async (req, res) => {
    try {
        const musculoskeletalInfo = await models.MusculoskeletalInfo.findOne({
            where: { assessment_id: req.params.assessment_id },
        });
        if (musculoskeletalInfo == null) {
            res.status(404).json({
                message: "Unable to find patient's musculoskeletal info.",
            });
        }
        res.status(200).json(musculoskeletalInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving musculoskeletal info" });
    }
};

const addPatientMusculoskeletalInfo = async (req, res) => {
    try {
        const musculoskeletalInfo = await models.MusculoskeletalInfo.create({
            ...req.body,
            assessment_id: req.params.assessment_id,
        });
        res.status(201).json(musculoskeletalInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating musculoskeletal info" });
    }
};

const updatePatientMusculoskeletalInfo = async (req, res) => {
    try {
        const musculoskeletalInfo = await models.MusculoskeletalInfo.findByPk(
            req.params.id
        );

        if (musculoskeletalInfo == null) {
            return res.status(404).json({
                message: "Unable to find the patient's musculoskeletal info",
            });
        } else {
            await musculoskeletalInfo.update({
                id: req.params.id,
                ...req.body,
                assessment_id: req.params.assessment_id,
                modified_date: new Date(),
            });
            return res.status(200).json(musculoskeletalInfo);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating musculoskeletal info" });
    }
};

const deletePatientMusculoskeletalInfo = async (req, res) => {
    try {
        const musculoskeletalInfo = await models.MusculoskeletalInfo.findByPk(
            req.params.id
        );
        if (musculoskeletalInfo == null) {
            return res.status(404).json({
                message: "Unable to find the patient's musculoskeletal info.",
            });
        } else {
            await musculoskeletalInfo.destroy();
            return res.status(204).json(musculoskeletalInfo);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting musculoskeletal info" });
    }
};

module.exports = {
    getPatientMusculoskeletalInfo,
    addPatientMusculoskeletalInfo,
    updatePatientMusculoskeletalInfo,
    deletePatientMusculoskeletalInfo,
}