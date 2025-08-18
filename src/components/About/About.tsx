// src/components/About/About.tsx
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about} id="despre-noi">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about-andreea.png"
              alt="Mia Bella - Makeup Artist"
              width={600}
              height={800}
              className={styles.image}
            />
            <div className={styles.imageDecoration}></div>
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.experienceYears}>10+</span>
            <span className={styles.experienceText}>Ani de experientă</span>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.subtitle}>Despre Mine</h2>
          <h3 className={styles.title}>
            Pasiune pentru frumusețe și excelență în machiaj
          </h3>
          <p className={styles.text}>
            Bună, sunt Andreea! Cu peste 10 ani de experiență în industria
            frumuseții, am transformat sute de fețe în opere de artă vivente.
            Specializez în machiaj de mireasă și evenimente, cu o abordare
            personalizată care evidențiază frumusețea naturală a fiecărei
            cliente.
          </p>
          <p className={styles.text}>
            Filosofia mea se bazează pe calitate, atenție la detalii și crearea
            unei experiențe relaxante și plăcute pentru fiecare persoană care
            intră în studio-ul meu.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✧</div>
              <h4 className={styles.featureTitle}>Produse premium</h4>
              <p className={styles.featureText}>
                Folosesc exclusiv produse de înaltă calitate, hipoalergenice
              </p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✧</div>
              <h4 className={styles.featureTitle}>Tehnici moderne</h4>
              <p className={styles.featureText}>
                Stiluri adaptate ultimelor tendințe în machiaj
              </p>
            </div>
          </div>

          <button className={styles.contactButton}>
            Descoperă serviciile mele
          </button>
        </div>
      </div>
    </section>
  );
}
