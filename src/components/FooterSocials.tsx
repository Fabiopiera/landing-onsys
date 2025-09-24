import styles from "./FooterSocials.module.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaShareAlt,
} from "react-icons/fa";

export default function FooterSocials() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://wa.me/+543624733218"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={styles.icon}
      >
        <FaWhatsapp size={28} />
      </a>

      <a
        href="https://instagram.com/onsysinternet"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className={styles.icon}
      >
        <FaInstagram size={28} />
      </a>

      <a
        href=""
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className={styles.icon}
      >
        <FaFacebookF size={28} />
      </a>

      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: "Promo",
              text: "Mirá esta promo!",
              url: location.href,
            });
          } else {
            navigator.clipboard.writeText(location.href);
            alert("Enlace copiado al portapapeles");
          }
        }}
        aria-label="Compartir"
        className={styles.icon}
      >
        <FaShareAlt size={28} />
      </button>
    </footer>
  );
}
