import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <p className={styles.tagline}>
                    Frontend Developer crafting modern web experiences
                    with React, Node.js and MongoDB.
                </p>

                <div className={styles.socials}>
                    <a
                        href="https://github.com/Jenit-JRA"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jenit-abraham-8443571bb/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="mailto:jenitabraham391@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>

                <div className={styles.divider}></div>

                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Jenit Abraham.
                    Built with React, Node.js & MongoDB.
                </p>
            </div>
        </footer>
    );
}

export default Footer;