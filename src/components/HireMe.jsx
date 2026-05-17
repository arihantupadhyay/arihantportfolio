import styles from "@/styles/HireMe.module.css";

const reasons = [
  {
    title: "Modern Frontend Development",
    description:
      "I build responsive and high-performance web applications using React, Next.js,and modern UI libraries.",
  },
  {
    title: "Clean & Scalable Code",
    description:
      "I write reusable, maintainable, and well-structured code following best practices.",
  },
  {
    title: "Problem Solving Skills",
    description:
      "I transform complex requirements into simple and user-friendly interfaces.",
  },
  {
    title: "Fast Learner",
    description:
      "I quickly adapt to new technologies and continuously improve my skills.",
  },
  {
    title: "Attention to Detail",
    description:
      "I focus on pixel-perfect designs, smooth animations, and responsive layouts.",
  },
  {
    title: "Dedicated & Reliable",
    description:
      "I am committed to delivering quality work on time and contributing effectively to your team.",
  },
];

export default function HireMe() {
  return (
    <section id="hire-me" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>What I Bring to Your Team</h2>
          <p>
            As a Frontend Developer, I create modern, responsive, and
            user-friendly web applications with clean code and strong attention
            to detail.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className={styles.button}>
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
