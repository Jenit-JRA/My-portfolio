import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv"

import Contact from "./models/Contact.js";
import Skill from "./models/Skill.js";
import Projects from "./models/Project.js";

const app = express();
dotenv.config()

app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongo DB connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.get("/", (req, res) => {
    res.send("Portfolio API running")
})

app.get('/api/skills', async (req, res) => {
    const skills = await Skill.find();
    res.status(200).json(skills);
})

app.get('/api/projects', async (req, res) => {
    const projects = await Projects.find();
    res.status(200).json(projects)
})

app.post('/api/contact', async (req, res) => {
    try {

        const { name, email, message } = req.body
        await Contact.create({
            name,
            email,
            message
        })
        if (!name || !email || !message) {
            res.status(400).json({
                success: false,
                message: 'Please enter all the mandatory fields'
            })
        }

        res.status(201).json({
            success: true,
            message: 'Message sent successfully'
        })
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }


})

app.get('/api/contact', (req, res) => {
    res.json(contacts)
})

app.listen(PORT, () => {
    console.log('Server running on port 5000')
})