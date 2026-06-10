import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styles from "./Hero.module.css";

import profile from "../../assets/profile.png";

function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <motion.div
                className={styles.heroContent}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className={styles.intro}>Hi, I'm</p>

                <h1 className={styles.title}>
                    Jenit Abraham
                </h1>

                <h2 className={styles.subtitle}>
                    Frontend Developer
                </h2>

                <p className={styles.description}>
                    Frontend Developer with 3 years of industry experience
                    building enterprise web applications using React,
                    Node and scalable UI architecture.
                </p>

                <div className={styles.actions}>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-80}
                    >
                        <motion.span
                            whileHover={{
                                scale: 1.05,
                                y: -2,
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.primaryBtn}
                        >
                            View Projects
                        </motion.span>
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-80}
                    >
                        <motion.span
                            whileHover={{
                                scale: 1.05,
                                y: -2,
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.secondaryBtn}
                        >
                            Contact Me
                        </motion.span>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className={styles.heroImage}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                }}
            >
                <img
                    src={profile}
                    alt="Jenit Abraham"
                    className={styles.profileImage}
                />
            </motion.div>
        </section>
    );
}

export default Hero;