const express = require('express');
const router = express.Router();


// @route GET api/profile
// @desc just test for now
// @access public
router.get('/', (req, res) => {
    res.send("profile route");
});

module.exports = router;