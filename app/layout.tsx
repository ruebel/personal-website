import { Knockout } from "@/components/Knockout/Knockout";
import { Video } from "@/components/Video/Video";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uebel",
  description: "Randy Uebel's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.wrapper}>
          <Video src="/bg.mp4" />
          <div className={styles.inner}>
            <Knockout>
              <div className={styles.loader}>Ü</div>
              <div className={styles.afterLoader}>{children}</div>
            </Knockout>
          </div>
          <footer className={styles.footer}>
            © {new Date().getFullYear()} Randy Uebel
          </footer>
        </main>
      </body>
    </html>
  );
}
