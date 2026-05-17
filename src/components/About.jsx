import styles from "@/styles/About.module.css";
import Image from "next/image";

const galleryImages = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.heading}>
          <span className={styles.subtitle}>Get To Know More</span>
          <h2>About Me</h2>
        </div>

        {/* Main Content */}
        <div className={styles.aboutWrapper}>
          {/* Left Side - Animated Gallery */}
          <div className={styles.gallery}>
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className={`${styles.imageCard} ${styles[`card${index + 1}`]}`}
              >
                <Image
                  src={src}
                  alt={`About Image ${index + 1}`}
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>

          {/* Right Side - About Content */}
          <div className={styles.content}>
            <h3>
              Frontend Developer <span> 🇮🇳</span>
            </h3>

            <p>
              Hi, I am <strong>Arihant Upadhyay</strong>, a passionate Frontend
              Developer who loves creating modern, responsive, and interactive
              websites using <strong>React.js</strong>, <strong>Next.js</strong>
              , and <strong>JavaScript</strong>.
            </p>

            <p>
              I focus on building clean UI designs, smooth animations, and
              user-friendly web applications. I also have basic backend
              knowledge and continuously improve my development skills.
            </p>

            <p>
              My goal is to become a professional Full Stack Developer and work
              on impactful products that help businesses and users worldwide.
            </p>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <h4>20+</h4>
                <span>Projects Built</span>
              </div>

              <div className={styles.statBox}>
                <h4>4+</h4>
                <span>Years Learning</span>
              </div>

              <div className={styles.statBox}>
                <h4>100%</h4>
                <span>Passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
