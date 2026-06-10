import { motion } from "framer-motion";
import styles from "./Projects.module.css";

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description:
                "Modern full-stack portfolio built using React, Framer Motion, Node.js and Express.",
            technologies: [
                "React",
                "Framer Motion",
                "Node.js",
                "Express",
            ],
            image:
                "https://placehold.co/600x400/0f172a/ffffff?text=Portfolio",
            github: "#",
            demo: "#",
        },
        {
            id: 2,
            title: "Notes App",
            description:
                "Full-stack notes application with CRUD operations and authentication.",
            technologies: [
                "React",
                "Node.js",
                "MongoDB",
            ],
            image:
                "https://placehold.co/600x400/0f172a/ffffff?text=Notes+App",
            github: "#",
            demo: "#",
        },
    ];

    return (
        <section
            id="projects"
            className={styles.projects}
        >
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Featured Projects
            </motion.h2>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.article
                        key={project.id}
                        className={styles.card}
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.2,
                        }}
                        whileHover={{
                            y: -10,
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className={styles.image}
                        />

                        <div className={styles.content}>
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className={styles.techStack}>
                                {project.technologies.map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className={styles.tech}
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>

                            <div className={styles.links}>
                                <a href={project.demo}>
                                    Live Demo
                                </a>

                                <a href={project.github}>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

export default Projects;