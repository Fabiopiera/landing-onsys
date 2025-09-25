import HeroPromo from "./components/HeroPromo";
import FooterSocials from "./components/FooterSocials";

export default function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <HeroPromo imageAlt="Promo principal" />
      <FooterSocials />
    </div>
  );
}
