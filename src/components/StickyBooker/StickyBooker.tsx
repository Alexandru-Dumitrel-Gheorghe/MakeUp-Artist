"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaCalendarAlt } from "react-icons/fa"; // calendar icon
import BookingForm from "../BookingForm/BookingForm";
import styles from "./StickyBooker.module.css";

const StickyBooker = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Safe mount pentru Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ascunde butonul când modalul e deschis
  useEffect(() => {
    setIsVisible(!open);
  }, [open]);

  // Blochează scroll când modalul e deschis
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Închidere cu ESC
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  // Ascunde la scroll down, arată la scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setIsVisible(true);
        return;
      }

      if (Math.abs(window.scrollY - lastScrollY) < 50) return;

      setIsVisible(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).dataset.overlay === "true") {
      setOpen(false);
    }
  };

  return (
    <>
      {mounted && isVisible && (
        <button
          className={styles.fab}
          aria-label="Programează o ședință"
          onClick={() => setOpen(true)}
        >
          <FaCalendarAlt className={styles.fabIcon} />
        </button>
      )}

      {mounted &&
        open &&
        createPortal(
          <div
            data-overlay="true"
            onClick={handleOverlayClick}
            className={styles.portalOverlay}
            aria-modal="true"
            role="dialog"
          >
            <BookingForm onClose={() => setOpen(false)} />
          </div>,
          document.body
        )}
    </>
  );
};

export default StickyBooker;
