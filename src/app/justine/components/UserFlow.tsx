import Image from "next/image";
import userflow from "../../../assets/justine/userflow.jpg";

const UserFlow = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        User flow
      </h3>

      <figure className="flex flex-col items-center mt-3">
        <Image
          src={userflow}
          alt="userflow"
          className="shadow-md rounded-lg"
          loading="lazy"
        />
        <figcaption className="text-muted-foreground text-sm">
          User flow
        </figcaption>
      </figure>
    </>
  );
};

export default UserFlow;
