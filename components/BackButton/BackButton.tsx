import Link from "next/link";

import styles from "./backButton.module.css";

export function BackButton() {
  return (
    <Link className={styles.back} href="/">
      <span className={styles.arrow}>←</span>
    </Link>
  );
}
