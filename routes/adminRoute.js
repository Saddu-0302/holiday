const { adminAddHolidays, adminUpdateHolidays, adminGetAllHolidays, adminDeleteHolidays } = require("../controllers/adminController")

const router = require("express").Router()

router
    .get("/holidays", adminGetAllHolidays)
    .post("/add-holiday", adminAddHolidays)
    .put("/update-holiday/:id", adminUpdateHolidays)
    .delete("/delete-holiday/:id", adminDeleteHolidays)

module.exports = router