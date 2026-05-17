import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>

      <div className={styles.topIntro}>
        <h1>
          Hi, I am <span>𝓐𝓻𝓲𝓱𝓪𝓷𝓽 𝓤𝓹𝓪𝓭𝓱𝔂𝓪𝔂</span>
        </h1>
        <h2>Frontend Developer</h2>
      </div>

      <div className={styles.background}>
        <video autoPlay loop muted playsInline>
          <source src="/Arihant.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <br />

      <div className={styles.contentBelow}>

        <div className={styles.text}>
          <p>
            I specialize in creating interactive and responsive web interfaces
            using React, Next.js, JavaScript, HTML5, and CSS3.
          </p>

          <p>
            I enjoy transforming ideas into clean, scalable, and
            high-performance web applications that deliver exceptional user
            experiences.
          </p>

          <p>
            Along with frontend development, I have a basic understanding of
            backend technologies such as Node.js, Express.js, and MongoDB, which
            helps me understand full-stack application architecture.
          </p>

          <p>
            I am continuously learning new technologies and improving my
            problem-solving skills by building real-world projects.
          </p>

          <p>
            My goal is to work as a Frontend Developer where I can contribute to
            impactful products, grow as a developer, and create outstanding
            digital experiences.
          </p>
          <br />
          <div className={styles.buttons}>
            <Link href="#contact" className={styles.primary}>
              Hire Me
            </Link>

           <a
  href="/Arihant2.pdf"
  download="Arihant-Resume.pdf"
  className={styles.secondary}
>
  Download Resume
</a>
          </div>
        </div>

    
        <div className={styles.imageWrapper}>
          <Image
            src="/Arihant22.jpeg"
            alt="Arihant Upadhyay"
            width={700}
            height={400}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
