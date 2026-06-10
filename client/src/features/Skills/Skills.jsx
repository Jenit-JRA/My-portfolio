import styles from "./Skills.module.css";

import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTypescript,
    SiRedux,
    SiExpress,
    SiFirebase,
} from "react-icons/si";

function Skills() {
    const skills = [
        {
            name: "React",
            icon: <FaReact />,
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />,
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />,
        },
        {
            name: "Redux",
            icon: <SiRedux />,
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />,
        },
        {
            name: "Express",
            icon: <SiExpress />,
        },
        {
            name: "Firebase",
            icon: <SiFirebase />,
        },
        {
            name: "Git",
            icon: <FaGitAlt />,
        },
        {
            name: "HTML",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS",
            icon: <FaCss3Alt />,
        },
    ];

    return (
        <section
            id="skills"
            className={styles.skills}
        >
            <h2 className={styles.heading}>
                Technologies I Work With
            </h2>

            <div className={styles.marquee}>
                <div className={styles.track}>
                    {[...skills, ...skills].map(
                        (skill, index) => (
                            <div
                                key={index}
                                className={styles.skill}
                            >
                                <span className={styles.icon}>
                                    {skill.icon}
                                </span>

                                <span>
                                    {skill.name}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Skills;