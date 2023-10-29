import Image from "next/image";
import bg from "../../../assets/raven/bg.jpg";
import form1 from "../../../assets/raven/form1.jpg";
import form2 from "../../../assets/raven/form2.jpg";
import welcome from "../../../assets/raven/welcome.jpg";
import pick from "../../../assets/raven/pick.jpg";

const Visual = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Visual UI Design
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Color white and black are mostly used for my fonts and border so that
        they would match the color of my chosen colors and background, aiming
        for an appealing interface that doesn&apos;t give an eyesore for the
        users. I picked Blue because it&apos;s one of the primary colors in the
        visible spectrum of light and is often described as a color that is
        soothing, calming, and serene. It is a fundamental element of our
        perception of the world and has many cultural and psychological
        associations.
      </p>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Background image
      </h4>
      <figure className="flex flex-col items-center mt-3">
        <Image src={bg} alt="bg-image" className="shadow-md rounded-lg" />
        <figcaption className="text-muted-foreground text-sm">
          Background image
        </figcaption>
      </figure>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Forms
      </h4>
      <div className="flex flex-col justify-center items-center gap-6 mt-3">
        <figure className="flex flex-col items-center">
          <Image
            src={form1}
            alt="login-form"
            className="shadow-md rounded-lg"
          />
          <figcaption className="text-muted-foreground text-sm">
            Login form
          </figcaption>
        </figure>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The development of a login page is an essential feature for users,
          allowing them to access and utilize our platform seamlessly. This
          login page serves as a gateway to their personalized experience,
          enabling them to sign in and access their accounts securely.
          Furthermore, users have the option to save their progress on the
          webpage by linking their email addresses to their profiles. This
          convenient feature ensures that their work and achievements are
          securely stored and easily accessible, providing a seamless and
          user-friendly experience on our website.
        </p>
        <figure className="flex flex-col items-center mt-3">
          <Image
            src={form2}
            alt="register-form"
            className="shadow-md rounded-lg"
          />
          <figcaption className="text-muted-foreground text-sm">
            Register form
          </figcaption>
        </figure>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          For those who are new to the webpage and have yet to establish an
          account, there is a straightforward option available. At the bottom of
          the page, users can find the &quot;Don&apos;t have an account?&quot;
          link. By clicking on this link, individuals can initiate the
          registration process. This will guide them through the necessary steps
          to create their own account, granting access to the full range of
          features and content on the webpage. It&apos; a simple and convenient
          way to embark on their journey with the site.
        </p>
      </div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Welcome page
      </h4>
      <div className="flex flex-col justify-center items-center gap-6 mt-3">
        <figure className="flex flex-col items-center">
          <Image
            src={welcome}
            alt="welcome-page"
            className="shadow-md rounded-lg"
          />
          <figcaption className="text-muted-foreground text-sm">
            Welcome page
          </figcaption>
        </figure>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Once users successfully sign in or log in to the webpage, they will be
          automatically redirected to the second page, where a variety of
          courses awaits. Here, all they need to do is select their preferred
          course to kickstart their journey. This user-friendly process ensures
          a seamless transition and empowers them to embark on their learning
          adventure with ease, making education and exploration just a click
          away.
        </p>
      </div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Picking difficulty
      </h4>
      <div className="flex flex-col justify-center items-center gap-6 mt-3">
        <figure className="flex flex-col items-center">
          <Image src={pick} alt="user-flow" className="shadow-md rounded-lg" />
          <figcaption className="text-muted-foreground text-sm">
            Choosing difficulty
          </figcaption>
        </figure>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          After users have made their choice of the preferred course, their
          learning journey will introduce them to a rich tapestry of challenges.
          They will encounter three engaging difficulties: Multiple Choice, Fill
          in the Blank, and Alternative Response (True or False). These diverse
          formats promise to not only impart knowledge but also offer an
          enjoyable and interactive learning experience. With these challenges,
          users can dive deep into the subject matter, test their understanding,
          and hone their skills, ensuring a rewarding and intellectually
          stimulating journey ahead.
        </p>
      </div>
    </>
  );
};

export default Visual;
