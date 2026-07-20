import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Signup

export const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const checkUser = await User.findOne({ email });

        if (checkUser) {
            return res.status(400).json({
                message: "User Already Exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "Signup Successful"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Login

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });

        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            return res.status(400).json({
                message: "Invalid Password"
            });

        }

        const token = jwt.sign(

            {
                id: user._id
            },

            "notesmanagement",

            {
                expiresIn: "1d"
            }

        );

        res.status(200).json({

            message: "Login Successful",

            token

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};