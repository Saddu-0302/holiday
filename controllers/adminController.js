const asyncHandler = require("express-async-handler")
const Holiday = require("../modals/Holiday")
const upload = require("../utils/upload")
const fs = require("fs")
const path = require("path")

exports.adminGetAllHolidays = asyncHandler(async (req, res) => {
    const result = await Holiday.find()
    res.json({ message: "admin holiday fetch success", result })
})
exports.adminAddHolidays = asyncHandler(async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: err.message || "upload error" })
        }
        const hero = []
        if (req.files) {
            for (const item of req.files) {
                hero.push(item.filename)
            }
        }
        await Holiday.create({ ...req.body, hero })
        res.json({ message: "admin holiday add success" })
    })
})
exports.adminUpdateHolidays = asyncHandler(async (req, res) => {
    res.json({ message: "admin holiday update success" })
})
exports.adminDeleteHolidays = asyncHandler(async (req, res) => {
    upload(req, res, async err => {
        const { id } = req.params
        const result = await Holiday.findById(id)
        await Holiday.findByIdAndDelete(id)
        fs.unlinkSync(path.join(__dirname, "..", "uploads", result.hero))
    })

    res.json({ message: "admin holiday delete success" })
})