import React from "react";

import cn from "classnames";

const Mailto = ({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) => {
  return (
    <a className="underline" href={`mailto:${email}`}>
      {children}
    </a>
  );
};

const ContactSection = ({ currentSection }: { currentSection: string }) => {
  const contactClassName = cn(
    currentSection === "/#contact"
      ? "flex flex-col items-center text-center custom-container"
      : "hidden"
  );

  return (
    <section className={contactClassName} id="contact">
      <div className="pb-2">
        <h1 className="text-xl font-medium tracking-widest text-gray-700 uppercase">
          Contact
        </h1>
      </div>

      <div className="pt-2 space-y-4">
        <p className="leading-loose text-gray-500">
          The best way to contact me is by email!
        </p>

        <p className="leading-loose text-gray-500 transition-all hover:text-cyan-600">
          <Mailto email="placeholder@something.com">
            placeholder@something.com
          </Mailto>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
