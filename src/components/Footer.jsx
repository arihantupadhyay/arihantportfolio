import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.name}>Arihant Upadhyay</h3>

        <div className={styles.socials}>
          <a
            href="https://github.com/arihantupadhyay" 
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arihant-upadhyay-6a379a1ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/notmax__26/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <p className={styles.copy}>
          © 2026 Arihant Upadhyay. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}