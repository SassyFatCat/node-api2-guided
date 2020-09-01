const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ hello: 'world' })
});
router.post("/", (req, res) => {
    res.status(200).json({ hello: 'world' })
});
router.put("/:id", (req, res) => {
    res.status(200).json({ hello: 'world' })
});
router.delete("/:id", (req, res) => {
    res.status(200).json({ hello: 'world' })
});

module.exports = router;