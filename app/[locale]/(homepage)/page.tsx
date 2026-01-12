import {
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { ContactForm } from "./components/contact-form";

import styles from "./page.module.css";

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
        <h2 className={styles.heading}>{t("homepage.title")}</h2>
        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>{t("homepage.contactTitle")}</h3>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link
                href="https://github.com/mateoolarte"
                className={styles.link}
              >
                <GithubLogoIcon />
                Github
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link
                href="https://www.linkedin.com/in/mateoolarte/"
                className={styles.link}
              >
                <LinkedinLogoIcon />
                LinkedIn
              </Link>
            </li>
            <li className={styles.linkItem}>
              <ContactForm />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
