const express = require("express");
const router = express.Router();

router.get("/tickets", (req,res) => {
    res.json({
        message: "Tickets booked",
    });
});

module.exports = router;