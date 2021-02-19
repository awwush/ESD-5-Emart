const express = require("express");
const router = express.Router();

router.route("/")
.get(async(req, res) => {
    res.status(200);
    res.send("Ayurveda get...")
})

module.exports = router;
