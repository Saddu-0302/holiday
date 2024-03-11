const { userOrderHistory, placeOrder } = require("../controllers/orderController")
const { protectedRoute } = require("../utils/Protected")
const router = require("express").Router()

router
    .post("/place-order", protectedRoute, placeOrder)
    .get("/history", protectedRoute, userOrderHistory)

module.exports = router