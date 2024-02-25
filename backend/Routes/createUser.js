const express = require('express');
const router = express.Router();
const user = require('../models/user')
const { body, validationResult } = require('express-validator');
router.post('/createuser',
    [
        body('email', "INCORRECT EMAIL").isEmail(),
        body('name', "INCORRECT NAME").isLength({ min: 5 }),
        body('password', "INCORRECT PASSWORD").isLength({ min: 5 }),
        body('location').isLength({ min: 5 })
    ]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await user.create({
                name: req.body.name,
                email: req.body.email,
                location: req.body.location,
                password: req.body.password
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })



router.post('/loginuser',
    [
        body('email', "INCORRECT EMAIL").isEmail(),
        body('password', "INCORRECT PASSWORD").isLength({ min: 5 }),
    ]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try {
            let userData = await user.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "PLEASE LOGGING WITH CREDENTIALS" });
            }

            if (req.body.password !== userData.password) {
                return res.status(400).json({ errors: "PLEASE LOGGING WITH CREDENTIALS" });
            }
            return res.json({ success: true, user: userData });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })
module.exports = router;
