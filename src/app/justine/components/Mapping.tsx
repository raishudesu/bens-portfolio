import Image from "next/image";
import mapping from "../../../assets/justine/mapping.jpg";

const Mapping = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Customer journey mapping
      </h3>
      <div className="flex justify-center mt-3">
        <Image
          src={mapping}
          alt="customer-journey-mapping"
          className="shadow-md rounded-lg"
        />
      </div>
    </>
  );
};

export default Mapping;
