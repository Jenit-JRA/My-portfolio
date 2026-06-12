import mongoose from "mongoose";
import dotenv from "dotenv"

import Skill from "./models/Skill.js";
import Projects from "./models/Project.js";

dotenv.config()

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await Skill.deleteMany({})
        await Projects.deleteMany({})

        await Skill.insertMany([
            {
                name: "JavaScript",
            },
            {
                name: "React",
            },
            {
                name: "Typescript",
            },
            {
                name: "CSS",
            },
            {
                name: "Firebase",
            },
            {
                name: "Redux",
            },

            {
                name: "Node.js",
            },
            {
                name: "Express",
            },
            {
                name: "MongoDB",
            },
            {
                name: "Git",
            },
        ]);
        await Projects.insertMany([
            {
                title: "Full Stack Portfolio Website",
                description:
                    "Modern full-stack portfolio built using React, Framer Motion, Node.js and Express.",
                technologies: [
                    "React",
                    "Framer Motion",
                    "Node.js",
                    "Express",
                    "MongoDb"
                ],
                image:
                    "https://res.cloudinary.com/dbdgfir8u/image/upload/f_auto,q_auto/Screenshot_2026-06-12_095609_maro5z",
                github: "https://github.com/Jenit-JRA",
            },
            {
                title: "Full Stack Dashboard Application",
                description:
                    "Modern full-stack Dashboard application used to manage hotel bookings",
                technologies: [
                    "React",
                    "React Query",
                    "Supabase"
                ],
                image:
                    "https://res.cloudinary.com/dbdgfir8u/image/upload/v1781238581/Screenshot_2026-06-12_095857_qesdr3.png",
                github: "https://github.com/Jenit-JRA",
            },
            {
                title: "Next js Application",
                description:
                    "Modern full-stack Dashboard application built using next js and all modern front end technologies",
                technologies: [
                    "NextJs",
                    "Supabase"
                ],
                image:
                    "https://res.cloudinary.com/dbdgfir8u/image/upload/v1781238698/Screenshot_2026-06-12_100115_lt8hiy.png",
                github: "https://github.com/Jenit-JRA",
            },

        ]);

        console.log("Database seeded successfully")
        process.exit();
    }
    catch (error) {
        console.error(error)
        process.exit(1);
    }
}

seedDatabase();