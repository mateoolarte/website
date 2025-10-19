import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react/dist/ssr";

import styles from "./page.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <strong>Mateo Olarte</strong> Software Engineer
        </h1>
      </header>
      <main className={styles.container}>
        <h2 className={styles.heading}>New website coming soon... ☺️</h2>
        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>Contact me on:</h3>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link
                href="https://github.com/mateoolarte"
                className={styles.link}
              >
                <GithubLogoIcon />
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link
                href="https://www.linkedin.com/in/mateoolarte/"
                className={styles.link}
              >
                <LinkedinLogoIcon />
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link
                href="mailto:mateo.olarte8@gmail.com?subject=%5Bmateoolarte.com%5D"
                className={styles.link}
              >
                <EnvelopeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
