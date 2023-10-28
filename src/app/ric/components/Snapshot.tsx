import Image from "next/image";
import home from "../../../assets/ric/home.jpg";
import chat from "../../../assets/ric/chat.jpg";
import about from "../../../assets/ric/about.jpg";

const Snapshot = () => {
  return (
    <>
      <div className="flex flex-col gap-6 mt-3">
        <figure className="flex flex-col items-center">
          <Image src={home} alt="sitex-home" className="shadow-md rounded-lg" />
          <figcaption className="text-muted-foreground text-sm">
            Home page
          </figcaption>
        </figure>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This is the entry page for the user that will have 2 choices and that
          is the “Get Started” Button and “Contacts” anchor tag that would
          redirect the user to the 2 separate pages.
        </p>
        <figure className="flex flex-col items-center">
          <Image
            src={chat}
            alt="sitex-signin"
            className="shadow-md rounded-lg"
          />
          <figcaption className="text-muted-foreground text-sm">
            Chat page
          </figcaption>
        </figure>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This is the chatbot interface and it is currently waiting for the user
          to input a message so the AI can calculate a response. This is the
          main highlight of the project, the container inside the box is where
          all the dialogue would be inserted and presented for the user.
        </p>
        <figure className="flex flex-col items-center">
          <Image
            src={about}
            alt="sitex-register"
            className="shadow-md rounded-lg"
          />
          <figcaption className="text-muted-foreground text-sm">
            Contacts page
          </figcaption>
        </figure>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          In this page this is where the resource is stated and how to contact
          or visit their site. I contained them in a table with a header that
          specifies them and the user can click the “Go Back” button to go back
          to the landing page
        </p>
      </div>
    </>
  );
};

export default Snapshot;
