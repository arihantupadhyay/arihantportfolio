import styles from "@/styles/Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { MdDevices } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },

  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Responsive Design", icon: <MdDevices /> },
];


const marqueeSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>My Skills</h2>
        <p className={styles.subheading}>
          Technologies and tools I use to build modern web applications.
        </p>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {marqueeSkills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className={styles.skillCard}>
                <span className={styles.icon}>{skill.icon}</span>
                <span className={styles.name}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
