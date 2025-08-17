// src/components/ServicesGrid/ServicesGrid.tsx
import styles from "./ServicesGrid.module.css";
import services from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Servicii populare</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.slug} className={styles.card}>
              <div className={styles.cardDecoration}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <span className={styles.cardDuration}>
                    ~ {service.duration} min
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <strong className={styles.cardPrice}>
                    {service.price} lei
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
