import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

    const handleInputFieldsChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await fetch("http://localhost:5000/api/contact", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)


            });
            const data = await res.json()
            if (data.success) {
                setShowSnackbar(true);

                setTimeout(() => {
                    setShowSnackbar(false);
                }, 3000);
            }
            if (!data.success) {
                setShowErrorSnackbar(true);

                setTimeout(() => {
                    setShowErrorSnackbar(false);
                }, 3000);
            }

            setLoading(false)

            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (e) {
            setLoading(false)
            console.log(e)
        }


    }


    return (
        <>
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
                {loading && <div>loading...</div>}

                <motion.form
                    className={styles.form}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    onSubmit={handleFormSubmit}
                >
                    <div className={styles.formGroup}>
                        <label>Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputFieldsChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputFieldsChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Message</label>

                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleInputFieldsChange}
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
            <AnimatePresence>
                {showSnackbar && (
                    <motion.div
                        className={styles.snackbar}
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 100,
                        }}
                    >
                        Message sent successfully 🚀
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showErrorSnackbar && (
                    <motion.div
                        className={styles.errorSnackbar}
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 100,
                        }}
                    >
                        Check all the Mandatory fields
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Contact;