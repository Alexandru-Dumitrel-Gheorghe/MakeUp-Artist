// src/components/ContactSection.tsx
"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./ContactForm.module.css";
import { FiSend, FiLoader, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Schema = z.object({
  name: z.string().min(2, "Numele este prea scurt"),
  email: z.string().email("Te rugăm să introduci un email valid"),
  message: z.string().min(10, "Mesajul trebuie să conțină minim 10 caractere"),
});

type FormValues = z.infer<typeof Schema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Eroare la trimitere");
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Hai să vorbim</h2>
          <p className={styles.subtitle}>
            Completează formularul sau contactează-mă direct pentru a discuta
            despre cum pot transforma vizualul tău în ceva memorabil
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FiMail />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>contact@miabellamakeup.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FiPhone />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Telefon</h3>
                <p className={styles.infoText}>+40 721 123 456</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FiMapPin />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Studio</h3>
                <p className={styles.infoText}>Strada Makeup 15, București</p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field}>
              <label htmlFor="name">Nume complet</label>
              <input
                id="name"
                {...register("name")}
                placeholder="Introdu numele tău"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <span role="alert" className={styles.err}>
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Adresă de email</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="email@exemplu.com"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <span role="alert" className={styles.err}>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Mesajul tău</label>
              <textarea
                id="message"
                {...register("message")}
                placeholder="Descrie cum te pot ajuta..."
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <span role="alert" className={styles.err}>
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.btn}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FiLoader className={styles.spinner} />
                  Se trimite...
                </>
              ) : (
                <>
                  <FiSend />
                  Trimite mesaj
                </>
              )}
            </button>

            {isSubmitSuccessful && (
              <p role="status" className={styles.ok}>
                Mulțumesc pentru mesaj! Te voi contacta în cel mai scurt timp
                posibil.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
