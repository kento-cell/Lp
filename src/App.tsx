import { SalonHeader } from "./components/salon/SalonHeader";
import { SalonHero } from "./components/salon/SalonHero";
import { SalonConcept } from "./components/salon/SalonConcept";
import { SalonFeatures } from "./components/salon/SalonFeatures";
import { SalonMenu } from "./components/salon/SalonMenu";
import { SalonGallery } from "./components/salon/SalonGallery";
import { SalonProfile } from "./components/salon/SalonProfile";
import { SalonTestimonials } from "./components/salon/SalonTestimonials";
import { SalonAccess } from "./components/salon/SalonAccess";
import { SalonCTA } from "./components/salon/SalonCTA";
import { SalonFooter } from "./components/salon/SalonFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SalonHeader />
      <main>
        <SalonHero />
        <SalonConcept />
        <SalonFeatures />
        <SalonMenu />
        <SalonGallery />
        <SalonProfile />
        <SalonTestimonials />
        <SalonAccess />
        <SalonCTA />
      </main>
      <SalonFooter />
    </div>
  );
}
