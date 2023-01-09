const distriModel = require("../models").distribution;

const welcomeMessage = async(req, res) => {
    try{
        res.json({
            message: "Hello Welcome to my distribution Api"
        })
    } catch(err) {
        res.status(404).json({
            message: err.message
        })
    }
}
// to create distribution
const newDistrict = async(req, res) => {
    try{
        const districtData = {
            name: req.body.name,
            age: req.body.age,
            price: req.body.price,
            total: req.body.total
        }
        const district = await distriModel.create(districtData)
        res.status(201).json({
            message: "new distribution was created",
            data: district
        })
    } catch(err) {
        res.status(400).json({
            message: err.messagev 
            
        });
    }
}
// get one
const oneDistrict = async (req, res) => {
    try{
        const id = req.params.id;
        const singleDistrict = await distriModel.findAll({ where: {id:id} })
        res.status(200).json({
            message: "distribution was created succesfully",
            data: singleDistrict
        })
    } catch(err) {
        res.status(404).json({
            message: err.message
        })
    }
}
// get all
const allDistrict = async(req, res) => {
    try{
        const allRecord = await distriModel.findAll();
        res.status(200).json({
            message: "record was successful",
            data: allRecord
        })
    } catch(err) {
        res.status(404).json({
            message: err.message
        });
    }
}

// to update
const newUpdate = async(req, res) => {
    try{
        const id = req.params.id;
        const newUpdate = {
            name: req.body.name,
            age: req.body.age,
            price: req.body.price,
            total: req.body.total
        }
        const update = await distriModel.update(newUpdate, {
            where: {id:id}
        })
        if(! newUpdate === 0) {
            res.status(400).json({
                message: "update is not succesfful",
            })
        } else {
            res.status(201).json({
                message: "update was successful",
                data: newUpdate
            })
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}
module.exports = {
    welcomeMessage,
    newDistrict,
    oneDistrict, 
    allDistrict,
    newUpdate
}