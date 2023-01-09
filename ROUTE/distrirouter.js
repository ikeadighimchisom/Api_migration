const express = require("express");
const {welcomeMessage, newDistrict, oneDistrict, allDistrict, newUpdate} = require("../CONTROLLER/districontroller");

const router = express.Router();
router.get("/", welcomeMessage);
router.post("/students", newDistrict);
router.get("/students/:id", oneDistrict);
router.get("/students", allDistrict);
router.patch("/students/:id", newUpdate)

// router.route('/students',).post(newDistrict).get(allDistrict)

// router.route('/students/:id').get(oneDistrict).patch(newUpdate)
module.exports = 
router