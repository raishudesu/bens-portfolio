import Image from "next/image";
import mapping from "../../../assets/ric/mapping.jpg";

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
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Within this segment of the case study, we will explore the process of
        tackling the identified pain points stemming from our predominant data
        collection method, which primarily consisted of interviews.
        Additionally, we will examine how to mitigate these issues by providing
        solutions.
      </p>
    </>
  );
};

export default Mapping;
