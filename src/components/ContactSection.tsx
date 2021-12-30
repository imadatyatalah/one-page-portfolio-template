import cn from "classnames";

const Mailto = ({ email, subject = "", body = "", children }: any) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a className="underline" href={`mailto:${email}${params}`}>
      {children}
    </a>
  );
};

const ContactSection = ({ currentSection }: { currentSection: string }) => {
  const contactClassName = cn(
    currentSection === "/#contact"
      ? "flex flex-col items-center text-center"
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
          <Mailto
            email="placeholder@something.com"
            subject="Hello There!"
            body="Hello world!"
          >
            placeholder@something.com
          </Mailto>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
