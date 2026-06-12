import { useState } from "react";
import { useEffect } from "react";
import styles from "./Skills.module.css";

import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaCss3Alt
} from "react-icons/fa";

import {
    SiJavascript,
    SiTypescript,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiFirebase,
} from "react-icons/si";

function Skills() {
    const skillIcons = {
        React: <FaReact />,
        JavaScript: <SiJavascript />,
        "Node.js": <FaNodeJs />,
        Express: <SiExpress />,
        MongoDB: <SiMongodb />,
        Git: <FaGitAlt />,
        Redux: <SiRedux />,
        CSS: <FaCss3Alt />,
        Firebase: <SiFirebase />,
        Typescript: <SiTypescript />
    };
    const [skills, setSkills] = useState([])
    // const skills = [
    //     {
    //         name: "React",
    //         icon: <FaReact />,
    //     },
    //     {
    //         name: "JavaScript",
    //         icon: <SiJavascript />,
    //     },
    //     {
    //         name: "TypeScript",
    //         icon: <SiTypescript />,
    //     },
    //     {
    //         name: "Redux",
    //         icon: <SiRedux />,
    //     },
    //     {
    //         name: "Node.js",
    //         icon: <FaNodeJs />,
    //     },
    //     {
    //         name: "Express",
    //         icon: <SiExpress />,
    //     },
    //     {
    //         name: "Firebase",
    //         icon: <SiFirebase />,
    //     },
    //     {
    //         name: "Git",
    //         icon: <FaGitAlt />,
    //     },
    //     {
    //         name: "HTML",
    //         icon: <FaHtml5 />,
    //     },
    //     {
    //         name: "CSS",
    //         icon: <FaCss3Alt />,
    //     },
    // ];

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/skills`)
                const data = await res.json()
                setSkills(data)
                console.log(data)
            }
            catch (e) {
                console.error(e)
            }
        }
        fetchSkills()
    }, [])

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
                                    {skillIcons[skill.name]}
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