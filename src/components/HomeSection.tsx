import cn from "classnames";

const HomeSection = ({ currentSection }: { currentSection: string }) => {
  const homeClassName = cn(
    currentSection === "/#home" || currentSection === "/"
      ? "flex flex-col items-center justify-center divide-y divide-[#CCCCCC] custom-container"
      : "hidden"
  );

  return (
    <section className={homeClassName} id="home">
      <div className="pb-6">
        <h1 className="text-xl font-medium tracking-widest text-gray-700 uppercase">
          Imad Atyat-Alah
        </h1>
      </div>

      <div className="pt-6">
        <p className="tracking-widest text-gray-500 uppercase">Web Developer</p>
      </div>
    </section>
  );
};

export default HomeSection;
