import Image from "next/image";
import Sitex from "../../../assets/barysh/sitex-logo.png";

const Visual = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Visual UI Design
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The primary color of the user interface is #16BC25 which is a green
        color. This resembles the color used in the logo of SITE organization.
        The atom represents the fundamental building block of the digital
        universe and symbolizes the core elements of information technology that
        drive our community&apos;s passion and curiosity.
      </p>
      <figure className="flex flex-col items-center mt-6">
        <Image src={Sitex} alt="sitex-logo" />
        <figcaption className="text-muted-foreground text-sm">
          SITEX logo
        </figcaption>
      </figure>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Key features
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Custom themes (light and dark)</li>
        <li>
          All of the features of SITEX are seen at the navigation, which
          addresses the pain points of the problem by learning through
          collaboration, viewing materials, open forums and AI assistance
        </li>
        <li>
          By default, non-signed in users can view the Blogs and Forums page,
          but will not able to interact with it such as commenting and liking
          the content unless they register and sign in. The primary button “Get
          started” brings the user to the registration page, so that they can
          start using the full features of the application.
        </li>
        <li>
          After signing in, the user will be redirected to user dashboard. Users
          can create blogs, post forums, upload pdf materials, use the AI
          Assistant and start collaborating with other users.
        </li>
      </ul>
    </>
  );
};

export default Visual;
