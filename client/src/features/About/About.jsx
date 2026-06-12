import { motion } from "framer-motion";
import styles from "./About.module.css";

const editorVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const codeLines = [
  'const firstName = "Jenit";',
  'const lastName = "Abraham";',
  "",
  'const role = "Frontend Engineer";',
  "",
  'const experience = "3 Years";',
  "",
  'const currentCompany = "Arab Bank(Acabes International)";',
  "",
  "const skills = [",
  '  "React",',
  '  "JavaScript",',
  '  "TypeScript",',
  '  "Redux",',
  '  "Node.js"',
  '  "Express.js"',
  '  "MongoDb"',

  "];",
  "",
  "const Hobbies = [",
  '  "Listening to Music",',
  '  "Travelling",',
  "];",
  "",
  'console.log("Always Learning 🚀");',
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className={styles.editor}
        variants={editorVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.editorHeader}>
          <div className={styles.circles}>
            <span className={styles.red}></span>
            <span className={styles.yellow}></span>
            <span className={styles.green}></span>
          </div>

          <div className={styles.tab}>
            <span>JS</span>
            AboutMe.js
          </div>
        </div>

        <div className={styles.codeArea}>
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              variants={lineVariants}
              className={styles.codeLine}
            >
              <span className={styles.lineNumber}>
                {index + 1}
              </span>

              <span className={styles.code}>
                {line}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;