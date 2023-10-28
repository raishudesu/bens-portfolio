import Link from "next/link";

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
        Key libraries and technologies
      </h4>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <span className="font-bold">Authentication</span>: We have implemented
          user authentication using Next-Auth, which provides a secure and
          customizable authentication solution, making user management
          hassle-free.
        </li>
        <li>
          <span className="font-bold">Database</span>: Our application relies on
          MongoDB Atlas, a reliable cloud-based database, ensuring scalability,
          flexibility, and high data security.
        </li>
        <li>
          <span className="font-bold">ODM (Object Data Modeling)</span>: We use
          Mongoose, an ODM library for MongoDB, to simplify database
          interactions and schema management, enhancing the efficiency of our
          application.
        </li>
        <li>
          <span className="font-bold">Validation</span>: For form validation, we
          utilize React Hook Form and Zod, ensuring that user inputs are
          accurate and secure.
        </li>
        <li>
          <span className="font-bold">Server Requests</span>: To manage server
          requests efficiently, we incorporate React Query and Fetch, optimizing
          data retrieval and updates.
        </li>
        <li>
          <span className="font-bold">State Management</span>: Zustand is our
          choice for state management, allowing us to manage application state
          with ease and performance in mind.
        </li>
        <li>
          <span className="font-bold">Text Editor</span>: Our web app features a
          user-friendly text editor powered by React Quill, offering rich text
          editing capabilities.
        </li>
        <li>
          <span className="font-bold">Encryption</span>: Security is a priority,
          and we employ BcryptJS to hash and encrypt sensitive data, providing a
          robust security layer.
        </li>
        <li>
          <span className="font-bold">PDF Viewer</span>: We&apos;ve integrated
          pdf-viewer-reactjs to allow users to seamlessly view and interact with
          PDF documents.
        </li>
        <li>
          <span className="font-bold">Date Parsing</span>: For date handling,
          we&apos;ve chosen Luxon, which simplifies date and time manipulation,
          enhancing the application&apos;s usability.
        </li>
      </ul>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Test our prototype!
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The live prototype of SITEX offers pre-registration and its visual
        user-interface design. Try it by clicking{" "}
        <Link
          href={"https://site-learn.vercel.app"}
          className="text-[#2563eb] font-semibold hover:underline"
        >
          here
        </Link>
      </p>
    </>
  );
};

export default Prototype;
