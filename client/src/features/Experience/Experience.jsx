import { motion } from "framer-motion";
import styles from "./Experience.module.css";

function Experience() {
    const experience = [
        {
            role: "Frontend Developer",
            company: "Arab Bank",
            duration: "2024 - Present",
            points: [
                "Built reusable React components and scalable UI architecture.",
                "Integrated REST APIs and optimized application performance.",
                "Collaborated with backend developers and QA teams.",
                "Implemented responsive and accessible user interfaces.",
            ],
        },
    ];

    return (
        <section id="experience" className={styles.experience}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Experience
            </motion.h2>

            <div className={styles.timeline}>
                {experience.map((job, index) => (
                    <motion.div
                        key={job.company}
                        className={styles.timelineItem}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.2,
                        }}
                    >
                        <div className={styles.timelineMarker}>
                            <div className={styles.dot}></div>
                        </div>

                        <div className={styles.card}>
                            <span className={styles.duration}>
                                {job.duration}
                            </span>

                            <h3>{job.role}</h3>

                            <h4>{job.company}</h4>

                            <ul>
                                {job.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Experience;