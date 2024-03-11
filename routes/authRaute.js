const { adminAddHolidays, adminUpdateHolidays, adminGetAllHolidays, adminDeleteHolidays } = require("../controllers/adminController")
const { continueWithGoogle } = require("../controllers/authController")
const { getTours, getTourDetails } = require("../controllers/publicController")

const router = require("express").Router()

router
    .post("/continue-with-google", continueWithGoogle)


module.exports = router