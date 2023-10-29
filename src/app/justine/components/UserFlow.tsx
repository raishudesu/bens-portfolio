import Image from "next/image";
import userflow from "../../../assets/justine/userflow.jpg";

const UserFlow = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        User flow
      </h3>

      <div className="flex flex-col gap-6 items-center mt-3">
        <Image src={userflow} alt="legend" className="shadow-md rounded-lg" />
      </div>
    </>
  );
};

export default UserFlow;
