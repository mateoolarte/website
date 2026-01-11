import {
  PaperPlaneTiltIcon,
  XCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import * as Dialog from "@radix-ui/react-dialog";

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
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.container}>
          <Dialog.Title className={styles.title}>
            {t("homepage.contactModalTitle")}
          </Dialog.Title>

          <Dialog.Description className={styles.description}>
            {t("homepage.contactModalDescription")}{" "}
            <a href="mailto:mateo.olarte8@gmail.com">mateo.olarte8@gmail.com</a>
          </Dialog.Description>

          <Dialog.Close asChild>
            <button
              className={styles.btnClose}
              aria-label={t("homepage.contactModalBtnClose")}
            >
              <XCircleIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
