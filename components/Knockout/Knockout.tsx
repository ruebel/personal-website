import styles from "./knockout.module.css";

export function Knockout({ children }: React.PropsWithChildren) {
  return <div className={styles.knockout}>{children}</div>;
}
