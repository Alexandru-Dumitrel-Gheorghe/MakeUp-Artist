"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./BookingForm.module.css";

const BookingForm = ({ onClose }: { onClose: () => void }) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Înlocuiește cu datele tale de la EmailJS
    const serviceID = "service_your_service_id";
    const templateID = "template_your_template_id";
    const publicKey = "your_public_key";

    if (form.current) {
      emailjs
        .sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
          setTimeout(() => {
            onClose();
            if (form.current) form.current.reset();
          }, 3000);
        })
        .catch((error) => {
          console.error(error.text);
          setError(
            "A apărut o eroare la trimiterea formularului. Te rugăm să încerci din mai târziu."
          );
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className={styles.bookingOverlay}>
      <div className={styles.bookingContainer}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Închide formularul"
        >
          &times;
        </button>

        <h2 className={styles.bookingTitle}>Programează o Ședință</h2>

        {isSuccess ? (
          <div className={styles.successMessage}>
            <p>
              Mulțumim pentru programare! Te vom contacta în cel mai scurt timp.
            </p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={handleSubmit}
            className={styles.bookingForm}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Nume complet*
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.formLabel}>
                Telefon*
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service" className={styles.formLabel}>
                Serviciu*
              </label>
              <select
                id="service"
                name="service_type"
                className={styles.formSelect}
                required
              >
                <option value="">Selectează...</option>
                <option value="Machiaj de zi">Machiaj de zi</option>
                <option value="Machiaj de seară">Machiaj de seară</option>
                <option value="Machiaj de mireasă">Machiaj de mireasă</option>
                <option value="Machiaj special">Machiaj special</option>
                <option value="Consultatii">Consultații</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.formLabel}>
                  Data*
                </label>
                <input
                  type="date"
                  id="date"
                  name="appointment_date"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="time" className={styles.formLabel}>
                  Ora*
                </label>
                <input
                  type="time"
                  id="time"
                  name="appointment_time"
                  className={styles.formInput}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Mesaj (opțional)
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                rows={4}
              />
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Se trimite..." : "Trimite programarea"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
