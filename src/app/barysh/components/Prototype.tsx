import Link from "next/link";
import { features, libraries } from "./data";
import Snapshot from "./Snapshot";

const Prototype = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Prototype
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Our web application is a dynamic and responsive platform built using
        Next.js and Shadcn UI, offering a seamless user experience. We have
        carefully selected a range of libraries and technologies to ensure that
        our application is robust, secure, and user-friendly.
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
        Test our prototype!
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The live prototype of SITEX offers pre-registration and its visual
        user-interface design. Try it by clicking{" "}
        <Link
          href={"https://site-learn-git-test-raishudesu.vercel.app"}
          target="_blank"
          className="text-[#2563eb] font-semibold hover:underline"
        >
          here
        </Link>
      </p>
    </>
  );
};

export default Prototype;
