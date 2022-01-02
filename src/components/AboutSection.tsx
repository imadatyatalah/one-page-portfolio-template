import cn from "classnames";

const AboutSection = ({ currentSection }: { currentSection: string }) => {
  const aboutClassName = cn(
    currentSection === "/#about"
      ? "flex flex-col items-center text-center custom-container"
      : "hidden"
  );

  return (
    <section className={aboutClassName} id="about">
      <div className="pb-2">
        <h1 className="text-xl font-medium tracking-widest text-gray-700 uppercase">
          Hey, I&apos;m Imad Atyat-Alah!
        </h1>
      </div>

      <div className="pt-2 space-y-4">
        <p className="leading-loose text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p className="leading-loose text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
