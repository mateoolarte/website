import { Dialog } from "@base-ui/react/dialog";
import { PaperPlaneTiltIcon, XCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

import styles from "./contact-form.module.css";

export function ContactForm() {
  const t = useTranslations();

  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.btnTrigger}>
        <PaperPlaneTiltIcon />
        {t("homepage.emailBtn")}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className={styles.overlay} />

        <Dialog.Popup className={styles.container}>
          <Dialog.Title className={styles.title}>{t("homepage.contactModalTitle")}</Dialog.Title>

          <Dialog.Description className={styles.description}>
            {t("homepage.contactModalDescription")}{" "}
            <a href="mailto:mateo.olarte8@gmail.com">mateo.olarte8@gmail.com</a>
          </Dialog.Description>

          <Dialog.Close className={styles.btnClose} aria-label={t("homepage.contactModalBtnClose")}>
            <XCircleIcon />
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
