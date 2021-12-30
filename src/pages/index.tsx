import type { NextPage } from "next";

import useCurrentSection from "@/hooks/useCurrentSection";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Home: NextPage = () => {
  const currentSection = useCurrentSection();

  return (
    <main className="flex justify-center py-6">
      <HomeSection currentSection={currentSection} />
      <AboutSection currentSection={currentSection} />
      <ContactSection currentSection={currentSection} />
    </main>
  );
};

export default Home;
