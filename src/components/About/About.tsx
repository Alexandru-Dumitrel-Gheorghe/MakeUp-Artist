// src/components/About/About.tsx
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      className={styles.about}
      id="despre-andreea"
      aria-labelledby="about-title"
    >
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about-andreea.png"
              alt="Andreea G. – Makeup Artist în Niculițel, județul Tulcea"
              width={600}
              height={800}
              className={styles.image}
              priority
            />
            <div className={styles.imageDecoration} aria-hidden="true"></div>
          </div>

          <div
            className={styles.experienceBadge}
            aria-label="Ani de experiență"
          >
            <span className={styles.experienceYears}>10+</span>
            <span className={styles.experienceText}>Ani de experiență</span>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.subtitle}>Despre Mine</h2>
          <h3 className={styles.title} id="about-title">
            Atenție la detalii și rezultate premium
          </h3>

          <p className={styles.text}>
            Sunt <strong>Andreea G.</strong>, make-up artist cu peste 10 ani de
            experiență în
            <em> machiaj profesional</em> pentru <strong>mireasă</strong>,{" "}
            <strong>evenimente</strong>, <strong>ședințe foto</strong> și
            <strong> cursuri de automachiaj</strong>. Lucrez în principal în{" "}
            <strong>Niculițel</strong> și <strong>Tulcea</strong>, iar stilul
            meu pune în valoare frumusețea naturală, cu un finish curat și
            rezistent, adaptat trăsăturilor tale.
          </p>

          <p className={styles.text}>
            Cred în calitate, igienă impecabilă și o experiență relaxantă de la
            probă până în ziua evenimentului. Fiecare look este construit pe
            nevoile tale: tip de ten, stil personal și specificul ocaziei.
          </p>

          <div className={styles.features} role="list">
            <div className={styles.featureItem} role="listitem">
              <div className={styles.featureIcon} aria-hidden="true">
                ✧
              </div>
              <h4 className={styles.featureTitle}>Produse premium</h4>
              <p className={styles.featureText}>
                Kit profesional cu formule rezistente și hipoalergenice,
                selectate pentru tenuri sensibile.
              </p>
            </div>

            <div className={styles.featureItem} role="listitem">
              <div className={styles.featureIcon} aria-hidden="true">
                ✧
              </div>
              <h4 className={styles.featureTitle}>Tehnici moderne</h4>
              <p className={styles.featureText}>
                Tendințe actuale și tehnici personalizate (soft glam, natural
                bride, editorial).
              </p>
            </div>

            <div className={styles.featureItem} role="listitem">
              <div className={styles.featureIcon} aria-hidden="true">
                ✧
              </div>
              <h4 className={styles.featureTitle}>Mobil în Tulcea</h4>
              <p className={styles.featureText}>
                Mă deplasez pentru nunți și evenimente în Niculițel, Tulcea și
                localitățile din apropiere.
              </p>
            </div>
          </div>

          <Link
            href="/servicii"
            className={styles.contactButton}
            aria-label="Vezi serviciile de machiaj"
          >
            Descoperă serviciile mele
          </Link>
        </div>
      </div>
    </section>
  );
}
