import { Link } from "react-scroll";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img
                    src={logo}
                    alt="Jenit Logo"
                    className={styles.logo}
                />

                <ul className={styles.navList}>
                    <li>
                        <Link
                            to="hero"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass={styles.active}
                            className={styles.navLink}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass={styles.active}
                            className={styles.navLink}
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass={styles.active}
                            className={styles.navLink}
                        >
                            Experience
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass={styles.active}
                            className={styles.navLink}
                        >
                            Skills
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass={styles.active}
                            className={styles.navLink}
                        >
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass={styles.active}
                            className={styles.navLink}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <a
                    href="/JenitAbraham_Resume.pdf"
                    download
                    className={styles.resumeBtn}
                >
                    Download Resume
                </a>
            </nav>
        </header>
    );
}

export default Header;