import Image from "next/image";
import home from "../../../assets/barysh/homepage.jpg";
import signin from "../../../assets/barysh/signin.jpg";
import register from "../../../assets/barysh/register.jpg";
import dashboard from "../../../assets/barysh/dashboard.jpg";

const Snapshot = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Application snapshots
      </h3>
      <div className="flex flex-col gap-6 mt-3">
        <figure className="flex flex-col items-center">
          <Image src={home} alt="sitex-home" className="shadow-md rounded-lg" />
          <figcaption className="text-muted-foreground text-sm">
            SITEX homepage
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center">
          <Image
            src={signin}
            alt="sitex-signin"
            className="shadow-md rounded-lg"
          />
          <figcaption className="text-muted-foreground text-sm">
            SITEX sign in page
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center">
          <Image
            src={register}
            alt="sitex-register"
            className="shadow-md rounded-lg"
          />
          <figcaption className="text-muted-foreground text-sm">
            SITEX register page
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center">
          <Image
            src={dashboard}
            alt="sitex-dashboard"
            className="shadow-md rounded-lg"
          />
          <figcaption className="text-muted-foreground text-sm">
            SITEX user dashboard
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Snapshot;
