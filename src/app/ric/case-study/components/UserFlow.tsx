import Image from "next/image";
import userflow1 from "../../../../assets/ric/userflow1.jpg";
import userflow2 from "../../../../assets/ric/userflow2.jpg";

const UserFlow = () => {
  return (
    <>
      <h3
        id="user-flow"
        className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6"
      >
        User flow
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We&apos;ve designed a user flow that serves as a visual roadmap, showing
        the precise sequence of actions a user takes to achieve their unique
        needs and goals. This comprehensive depiction not only elucidates the
        user&apos;s journey but also intricately maps how the product&apos;s
        processes align with and cater to the user&apos;s desires and
        requirements. It&apos;s a strategic blueprint that harmonizes user
        intent with product functionality, ensuring a seamless and satisfying
        experience.
      </p>
      <div className="flex flex-col gap-6 items-center mt-3">
        <figure className="flex flex-col items-center">
          <Image
            src={userflow1}
            alt="legend"
            className="shadow-md rounded-lg"
            loading="lazy"
          />
          <figcaption className="text-muted-foreground text-sm">
            Legend
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center mt-3">
          <Image
            src={userflow2}
            alt="sitex-home"
            className="shadow-md rounded-lg"
            loading="lazy"
          />
          <figcaption className="text-muted-foreground text-sm">
            User flow
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default UserFlow;
