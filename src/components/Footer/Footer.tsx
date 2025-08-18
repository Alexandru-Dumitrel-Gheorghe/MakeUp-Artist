import styles from "./Footer.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Despre Noi</h3>
          <p className={styles.footerText}>
            Mia Bella Makeup oferă servicii profesionale de machiaj pentru
            evenimente speciale, cu accent pe calitate și eleganță.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Link-uri Rapide</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/">Acasă</Link>
            </li>
            <li>
              <Link href="/servicii">Servicii</Link>
            </li>
            <li>
              <Link href="/portofoliu">Portofoliu</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Contact</h3>
          <ul className={styles.contactInfo}>
            <li>Email: contact@miabellamakeup.com</li>
            <li>Telefon: +40 721 123 456</li>
            <li className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/iulian.gheorghe.18?locale=de_DE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/andreea_gheorghe12/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@andreeagheorghe3?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {currentYear} Mia Bella Makeup. Toate drepturile rezervate.
        </p>
        <div className={styles.legalLinks}>
          <Link href="/termeni-si-conditii">Termeni și condiții</Link>
          <span> | </span>
          <Link href="/politica-de-confidentialitate">
            Politica de confidențialitate
          </Link>
        </div>
      </div>
    </footer>
  );
}
