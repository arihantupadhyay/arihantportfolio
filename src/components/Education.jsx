import Image from "next/image";
import styles from "@/styles/Education.module.css";

export default function Education() {
  const educationData = [
    {
      title: "Bachelor of Technology (Btech in Computer Science)",
      institution: "Kashi Institute Of Technology",
      duration: "2021 - 2025",
      image: "/Kashi.jpg",
      website: "https://www.kashiit.ac.in",
      map: "https://maps.app.goo.gl/ka9ksTETrHMEf1iM8",
    },
    {
      title: "12th Standard",
      institution: "Universal Public School",
      duration: "2019-2021",
      image: "/Universal12.jpg",
      website:
        "https://www.justdial.com/Chandauli/Universal-Public-School-Shiksha-Samiti-V-Po-Baburi-Baburi/9999P5412-5412-140507180139-E4W9_BZDET",
      map: "https://maps.app.goo.gl/XaKJPw8XjDNAuBHR9",
    },
    {
      title: "10th Standard",
      institution: "Saint Thomas School",
      duration: "2012-2019",
      image: "/Sts.jpg.avif",
      website: "http://stschdnlesvns.org.in",
      map: "https://maps.app.goo.gl/D7Tw631v3z5hETHF9",
    },
  ];

  return (
    <section id="education" className={styles.section}>
      <div className="container">
        <h2>Education & Training</h2>

        <div className={styles.grid}>
          {educationData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.institution}
                  width={400}
                  height={220}
                />
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <span>{item.duration}</span>

                <div className={styles.links}>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>

                  <a href={item.map} target="_blank" rel="noopener noreferrer">
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
