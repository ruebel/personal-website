import { Banner } from "@/components/Banner/Banner";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Banner delayStart={true}>{["RANDY"]}</Banner>
      <Banner delayStart={true}>{["UEBEL"]}</Banner>
      <Banner delayStart={true} href="https://github.com/ruebel">
        {["code", "github"]}
      </Banner>
      <Banner
        delayStart={true}
        href="https://www.linkedin.com/in/randy-uebel-06b7145b"
      >
        {["resumé", "linkedin"]}
      </Banner>
      <Banner delayStart={true} href="/music">
        {["music", "noise"]}
      </Banner>
    </div>
  );
}
