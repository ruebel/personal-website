import styles from "./video.module.css";

type VideoProps = {
  src: string;
};

export function Video({ src }: VideoProps) {
  return (
    <div className={styles.wrapper}>
      <video
        autoPlay={true}
        className={styles.video}
        loop={true}
        muted={true}
        playsInline={true}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/ogg" />
        Your browser does not suppot the video tag
      </video>
    </div>
  );
}
