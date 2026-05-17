import styles from "@/styles/Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Youtube Clone",
    description:
      "A responsive YouTube clone built with React, Tailwind CSS, and the YouTube API.",
    tech: "React,JavaScript,Tailwind,",
    github: "https://github.com/arihantupadhyay/youtube",
    demo: "https://youtube-one-lemon.vercel.app/",
  },
  {
    title: "Dashboard UI",
    description: "Modern dashboard UI built with Javascript,Html,Css.",
    tech: "Javascript",
    github: "https://github.com/arihantupadhyay/dashboard-project",
    demo: "https://dashboard-project-navy.vercel.app",
  },
  {
    title: "Horizon Heights Landing Page",
    description:
      "Professional Landing Page website with smooth animations and responsive layout.",
    tech: "React,Tailwind CSS",
    github: "https://github.com/arihantupadhyay/horizon-heights",
    demo: "https://horizon-gilt-five.vercel.app",
  },
  {
    title: "Ventures Landing Page",
    description:
      "A modern Landing page with interactive features and responsive design.",
    tech: "React, Tailwind CSS",
    github: "https://github.com/arihantupadhyay/ventures",
    demo: "https://ventures-chi-blush.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>My Projects</h2>
        <p className={styles.subheading}>
          Some of the projects I have built using modern frontend technologies.
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <p className={styles.tech}>
                  <span>Tech Stack:</span> {project.tech}
                </p>

                <div className={styles.links}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Preview
                  </a>
                </div>
              </div>

              <div className={styles.glow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
