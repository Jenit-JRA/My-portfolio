import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    }
})

const Projects = mongoose.model("Pojects", projectSchema)

export default Projects