import Image from "next/image";
import contact from "../../assets/contact.svg";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <div className="w-full max-w-screen-xl">
      <h3
        id="contact"
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-center"
      >
        Contact us
      </h3>
      <div className="grid md:grid-cols-2 justify-items-center mt-8">
        <Image src={contact} alt="contact-svg" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
