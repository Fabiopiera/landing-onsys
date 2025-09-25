import styles from "./HeroPromo.module.css";

type Props = {
  imageAlt: string;
};

export default function HeroPromo({ imageAlt }: Props) {
  return (
    <div className={styles.heroWrap}>
      <img
        src="/promo-720.jpg" // fallback
        alt={imageAlt}
        className={styles.heroImage}
        loading="lazy"
        decoding="async"
        srcSet="/promo-480.jpg 480w, /promo-720.jpg 720w, /promo-1080.jpg 1080w, /promo-1600.jpg 1600w"
        sizes="100vw"
      />
    </div>
  );
}
