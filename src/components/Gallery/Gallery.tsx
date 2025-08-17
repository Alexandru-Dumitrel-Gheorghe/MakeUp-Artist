// src/components/Gallery/Gallery.tsx
import styles from "./Gallery.module.css";
import gallery from "@/data/gallery";
import Image from "next/image";

export default function Gallery({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? gallery.slice(0, limit) : gallery;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Portofoliu</h2>
          <p className={styles.sectionSubtitle}>
            Moment de frumusețe și eleganță captate în imagini
          </p>
        </div>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={`${item.src}-${index}`} className={styles.galleryItem}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.itemOverlay}>
                  <div className={styles.overlayContent}>
                    <h3 className={styles.itemTitle}>{item.caption}</h3>
                    <div className={styles.itemMeta}>
                      <span className={styles.itemCategory}>
                        {item.category}
                      </span>
                      <span className={styles.itemIcon}>✧</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {typeof limit === "number" && (
          <div className={styles.viewMore}>
            <button className={styles.viewMoreButton}>
              Vezi tot portofoliul
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
