import { BackButton } from "@/components/BackButton/BackButton";
import { Banner } from "@/components/Banner/Banner";

import styles from "../page.module.css";

export default function Music() {
  return (
    <div className={styles.home}>
      <BackButton />
      <Banner href="https://open.spotify.com/artist/7n1WpwSggZpIEceQPJWHCF?si=lThZy7thQjuGXCzcPWwWdw">
        {["Quick Couch"]}
      </Banner>
      <Banner href="https://huntedhorse.com">{["Hunted Horse"]}</Banner>
    </div>
  );
}
