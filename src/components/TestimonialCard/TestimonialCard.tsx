// src/components/TestimonialCard/TestimonialCard.tsx
import styles from "./TestimonialCard.module.css";

type Props = {
  name: string;
  text: string;
  location?: string;
  rating?: number;
  className?: string;
  date?: string;
};

export default function TestimonialCard({
  name,
  text,
  location,
  rating = 5,
  className,
  date,
}: Props) {
  return (
    <article
      className={`${styles.card} ${className || ""}`}
      aria-label={`Testimonial de la ${name}`}
    >
      <div className={styles.quoteDecoration}>“</div>
      <div className={styles.cardContent}>
        <div
          className={styles.rating}
          role="img"
          aria-label={`Rating ${rating} din 5`}
        >
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`${styles.star} ${i < rating ? styles.filled : ""}`}
            >
              ★
            </span>
          ))}
        </div>
        <p className={styles.text}>{text}</p>
        <footer className={styles.footer}>
          <div className={styles.authorInfo}>
            <strong className={styles.name}>{name}</strong>
            {location && <span className={styles.location}>{location}</span>}
          </div>
          {date && <span className={styles.date}>{date}</span>}
        </footer>
      </div>
    </article>
  );
}
