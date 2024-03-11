const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
exports.protectedRoute = asyncHandler(async (req, res, next) => {
    const { traveler } = req.cookies
    if (!traveler) {
        return res.status(400).json({ message: "No Cookie Found" })
    }
    jwt.verify(traveler, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            return res.status(400).json({ message: err.message || "JWT Error" })
        }
        req.body.userId = decode.userId
        next()
    })
})

// cookie
// jwt verify