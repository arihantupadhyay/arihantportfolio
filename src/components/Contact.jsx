import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Contact Me</h2>
          <p>Send me a message and I will reply to your email.</p>
        </div>

        <div className={styles.wrapper}>
          {/* FORM */}
          <div className={styles.formBox}>
            <form
              action="https://formsubmit.co/arihantupadhyay246@gmail.com"
              method="POST"
              className={styles.form}
            >
              {/* SETTINGS */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Message"
              />

              {/* FIELDS */}
              <input type="text" name="name" placeholder="Your Name" required />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <input type="text" name="subject" placeholder="Subject" />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>

              {/* BUTTON */}
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* INFO + MAP */}
          <div className={styles.infoBox}>
            <h3>Get In Touch</h3>

            <div className={styles.info}>
              <p>
                <strong>Email:</strong> arihantupadhyay246@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 7355563462
              </p>
              <p>
                <strong>Location:</strong> Varanasi, Uttar Pradesh, India
              </p>
            </div>

            {/* MAP */}
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps?q=Varanasi,Uttar%20Pradesh,India&output=embed"
                loading="lazy"
                allowFullScreen
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
