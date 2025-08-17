"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // Light implicit: false = light
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mount: citim tema salvată și listener de scroll
  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (savedTheme === "dark") setDarkMode(true); // altfel rămâne light implicit

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aplicăm tema la <html> + persistăm
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute(
        "data-theme",
        darkMode ? "dark" : "light"
      );
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  // Blochează scroll-ul pe body când meniul mobil e deschis
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logoLink} aria-label="Acasă">
            {/* las imaginea simplă pentru NUI/SSR stabil */}
            <img
              src="/logo-andreea.png"
              alt="Andreea G Makeup Artist"
              className={styles.logo}
              width={120}
              height={64}
            />
          </Link>
        </div>

        {/* Buton meniu mobil */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Nav */}
        <nav
          id="primary-navigation"
          className={`${styles.nav} ${mobileMenuOpen ? styles.open : ""}`}
        >
          <div className={styles.navBackground} aria-hidden />

          <div className={styles.navContent}>
            <div className={styles.navLinks} role="menu">
              <Link
                href="/despre"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                <span className={styles.linkNumber}>01.</span> Despre
              </Link>
              <Link
                href="/servicii"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                <span className={styles.linkNumber}>02.</span> Servicii
              </Link>
              <Link
                href="/portofoliu"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                <span className={styles.linkNumber}>03.</span> Portofoliu
              </Link>
              <Link
                href="/tarife"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
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
                onClick={() => setDarkMode((v) => !v)}
                aria-label={
                  darkMode ? "Treci pe mod luminos" : "Treci pe mod întunecat"
                }
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
