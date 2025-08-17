"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const savedTheme = localStorage.getItem("theme");

    // ✅ Light mode implicit
    setDarkMode(savedTheme ? savedTheme === "dark" : false);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logoLink}>
            <img
              src="/logo-andreea.png"
              alt="Andreea G Makeup Artist"
              className={styles.logo}
            />
          </Link>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Meniu navigare"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ""}`}>
          <div className={styles.navLinks}>
            <Link href="/despre" onClick={() => setMobileMenuOpen(false)}>
              <span className={styles.linkNumber}>01.</span> Despre
            </Link>
            <Link href="/servicii" onClick={() => setMobileMenuOpen(false)}>
              <span className={styles.linkNumber}>02.</span> Servicii
            </Link>
            <Link href="/portofoliu" onClick={() => setMobileMenuOpen(false)}>
              <span className={styles.linkNumber}>03.</span> Portofoliu
            </Link>
            <Link href="/tarife" onClick={() => setMobileMenuOpen(false)}>
              <span className={styles.linkNumber}>04.</span> Tarife
            </Link>
          </div>

          <div className={styles.actions}>
            <Link
              href="/contact"
              className={styles.ctaButton}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaPhoneAlt className={styles.phoneIcon} />
              Programează-te
            </Link>

            <button
              className={styles.themeToggle}
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Mod luminos" : "Mod întunecat"}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
