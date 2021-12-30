import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useCurrentSection = (): string => {
  const { asPath } = useRouter();
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    setCurrentSection(asPath);
  }, [asPath]);

  return currentSection;
};

export default useCurrentSection;
