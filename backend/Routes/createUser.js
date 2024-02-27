const express = require('express');
const router = express.Router();
const user = require('../models/user')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const JwtSecret = 'ksuiIenfgp$344nfd222222';
const jwt = require('jsonwebtoken')
router.post('/createuser', [
    body('email', "INCORRECT EMAIL").isEmail(),
    body('name', "INCORRECT NAME").isLength({ min: 5 }),
    body('password', "INCORRECT PASSWORD").isLength({ min: 5 }),
    body('location').isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const saltRounds = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltRounds);

    try {
        await user.create({
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            password: securePassword
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});


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

            const passCompare = bcrypt.compare(req.body.password, userData.password)
            if (!passCompare) {
                return res.status(400).json({ errors: "PLEASE LOGGING WITH CREDENTIALS" });
            }

            const Data={
                user : {
                    id : userData.id
                }
            }

            const AuthToken = jwt.sign(Data,JwtSecret)
            return res.json({ success: true, user: userData, AuthToken:AuthToken });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

module.exports = router;


