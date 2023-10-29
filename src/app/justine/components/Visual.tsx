import { points } from "./data";
import scheme from "../../../assets/justine/scheme.jpg";
import Image from "next/image";

const Visual = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Visual UI Design
      </h3>
      <Image src={scheme} alt="scheme" className="shadow-md rounded-lg mt-3" />
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Color scheme
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        <span className="font-bold">Header in Blue</span>: The website&apos;s
        header prominently features a calming and professional shade of blue
        (rgb(150, 211, 252)). This choice is instrumental in setting the tone
        for trust and reliability, creating an inviting ambiance that helps
        patients feel comfortable and secure when interacting with the dental
        clinic&apos;s services.
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Background image
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        <span className="font-bold">Balanced Black and White Background</span>:
        The website&apos;s background image exhibits a well-balanced fusion of
        black and white spaces. This imagery is thoroughly chosen to evoke a
        sense of cleanliness, hygiene, and professionalism. The judicious use of
        these neutral colors aligns perfectly with the clinical setting of a
        dental facility, assuring patients of a clean and sterile environment.
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Form design
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        <span className="font-bold">Backdrop-Filter Blur</span>: Notably, the
        website utilizes a backdrop-filter blur with a 20px intensity for login
        and in other forms. This design choice not only enhances the visual
        aesthetics but also fosters a sense of privacy and focus. This effect
        effectively guides users when entering sensitive login credentials,
        further ensuring their comfort and confidence.
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Text Color
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        <span className="font-bold">White Text on a Darker Background</span>:
        White text against the predominantly black and white background of the
        website ensures optimal readability and striking contrast. This choice
        presents information in a crisp and professional manner, resonating with
        the clinical and sterile environment of a dental clinic.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        <span className="font-bold">Button Design</span>: Throughout the
        website, buttons feature white text set against the blue header
        background. This harmonious blend conveys a sense of professionalism and
        assures patients of a trustworthy digital experience. The color scheme
        encourages users to engage with specific calls to action, such as
        &apos;Log In,&apos; in alignment with the clinic&apos;s inviting and
        action-oriented atmosphere.
      </p>
    </>
  );
};

export default Visual;
