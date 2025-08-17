import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <div className={styles.wrap}>
        <div className={styles.text}>
          <div className={styles.badge}>Profesional Makeup Artist</div>
          <h1 className={styles.heading}>
            <span className={styles.headingHighlight}>Elegance</span> și
            sofisticare în fiecare pensulă
          </h1>
          <p className={styles.description}>
            Transformăm caracteristicile tale unice în opere de artă efemere,
            perfecte pentru mirese, evenimente speciale sau ședințe foto.
          </p>

          <div className={styles.actions}>
            <Link href="/servicii" className={styles.btnPrimary}>
              Explorează serviciile
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/portofoliu" className={styles.btnGhost}>
              Vezi portofoliul
            </Link>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Ani experiență</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Clienți fericiți</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.mediaDecoration} aria-hidden="true"></div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/hero-mackeup.png"
              alt="Machiaj profesional"
              className={styles.mediaImage}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
