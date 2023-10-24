import styles from "./hero.module.scss";

export const Hero = () => {
  return (
      <div className={styles.container}>
        <div className={styles.one}>
          <h1 className={styles.heading}>20</h1>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.two}>
          <div className={styles.circle}></div>
          <h1 className={styles.heading}>23</h1>
        </div>
        <div className={styles.three}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.four}>
          <div className={styles.circle}></div>
        </div>
      </div>
  );
};
