import React from "react";
import HeroPromo from "./components/HeroPromo";
import FooterSocials from "./components/FooterSocials";

export default function App() {
  const promoSrc = "/promo.jpg"; // reemplazá con tu imagen en public/

  return (
    <div>
      <HeroPromo imageSrc={promoSrc} />
      <FooterSocials />
    </div>
  );
}
