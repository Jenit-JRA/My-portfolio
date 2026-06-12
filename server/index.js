import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import Contact from "./models/Contact.js";
import Skill from "./models/Skill.js";
import Project from "./models/Project.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.error("MongoDB Error:", err);
    });

// Root Route
app.get("/", (req, res) => {
    res.send("Portfolio API running");
});

// Skills Route
app.get("/api/skills", async (req, res) => {
    try {
        const skills = await Skill.find();

        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Projects Route
app.get("/api/projects", async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Contact Route
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation first
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please enter all mandatory fields",
            });
        }

        await Contact.create({
            name,
            email,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});