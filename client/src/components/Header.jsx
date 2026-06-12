import { Link } from "react-scroll";
import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img
                    src={logo}
                    alt="Jenit Logo"
                    className={styles.logo}
                />

                {/* Mobile Hamburger */}
                <button
                    className={styles.menuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <ul
                    className={`${styles.navList} ${isOpen ? styles.open : ""
                        }`}
                >
                    <li>
                        <Link
                            to="hero"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass={styles.active}
                            className={styles.navLink}
                            onClick={closeMenu}
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
                            onClick={closeMenu}
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
                            onClick={closeMenu}
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
                            onClick={closeMenu}
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
                            onClick={closeMenu}
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
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>

                    {/* Mobile Resume */}
                    <li className={styles.mobileResume}>
                        <a
                            href="/JenitAbraham_Resume.pdf"
                            download
                            className={styles.navLink}
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Desktop Resume */}
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