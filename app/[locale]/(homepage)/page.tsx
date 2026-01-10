import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

import styles from "./page.module.css";
import Link from "next/link";

function HomePage() {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <strong>Mateo Olarte</strong> {t("common.jobTitle")}
        </h1>
      </header>
      <main className={styles.container}>
        <h2 className={styles.heading}>{t("maintainance.title")}</h2>
        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>
            {t("maintainance.contactTitle")}
          </h3>
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
