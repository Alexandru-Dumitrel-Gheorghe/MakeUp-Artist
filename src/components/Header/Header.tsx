"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedMode === "dark" || (!savedMode && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
  };

  const navLinks = [
    { name: "Acasă", path: "/" },
    { name: "Servicii", path: "/servicii" },
    { name: "Portofoliu", path: "/portofoliu" },
    { name: "Despre Mine", path: "/despre" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.headerContainer}>
        {/* CONTAINER LOGO – fixează spațiul pentru a evita layout shift */}
        <Link
          href="/"
          className={styles.logoContainer}
          aria-label="Mergi la pagina de start"
        >
          <Image
            src="/logo-2.png"
            alt="Beauty by Lumiere Logo"
            width={200}
            height={80}
            priority
            className={styles.logoImage}
          />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.navLink} ${
                  pathname === link.path ? styles.activeLink : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={styles.headerActions}>
            <button
              className={styles.ctaButton}
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/programare");
              }}
            >
              Programează-te
            </button>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={
                isDarkMode
                  ? "Trece la modul luminos"
                  : "Trece la modul întunecat"
              }
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
