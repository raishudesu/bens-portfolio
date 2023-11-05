import Link from "next/link";
import { features, libraries } from "../../components/data";
import Snapshot from "./Snapshot";

const Prototype = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Prototype
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        SITEX is a dynamic and responsive web-based platform built using Next.js
        and Shadcn UI, offering a seamless user experience. I have carefully
        selected a range of libraries and technologies to ensure that this
        application is robust, secure, and user-friendly.
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Features
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Key libraries and technologies
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {libraries.map(({ library, content }, index) => (
          <li key={index}>
            <span className="font-bold">{library}</span>: {content}
          </li>
        ))}
      </ul>
      <Snapshot />
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Prototype testing
      </h4>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The live prototype offers pre-registration and its overall visual
        user-interface design. Test it here: {""}
        <Link
          href={"https://site-learn-git-test-raishudesu.vercel.app"}
          target="_blank"
          className="text-[#2563eb] font-semibold hover:underline"
        >
          SITEX Prototype
        </Link>
      </p>
    </>
  );
};

export default Prototype;
