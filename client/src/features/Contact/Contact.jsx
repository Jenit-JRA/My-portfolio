import { motion } from "framer-motion";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <section
            id="contact"
            className={styles.contact}
        >
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Let's Connect
            </motion.h2>

            <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Have a project in mind or just want to say hello?
            </motion.p>

            <motion.form
                className={styles.form}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className={styles.formGroup}>
                    <label>Name</label>

                    <input
                        type="text"
                        placeholder="Your Name"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="your@email.com"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Message</label>

                    <textarea
                        rows="6"
                        placeholder="Write your message..."
                    />
                </div>

                <button
                    type="submit"
                    className={styles.submitBtn}
                >
                    Send Message
                </button>
            </motion.form>
        </section>
    );
}

export default Contact;