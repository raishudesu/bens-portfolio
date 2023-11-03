const metrics = [
  {
    heading: "Enhanced Accessibility:",
    subheading:
      "DentaBook ensures that students no longer need to endure long queues. They can conveniently schedule appointments online, saving them valuable time and effort",
  },
  {
    heading: "Improved User Experience:",
    subheading:
      "Students, such as Jane and Christian, have found the digital system easy to use, and the appointment reminders have made dental care a more manageable part of their schedules",
  },
  {
    heading: "Streamlined Clinic Operations:",
    subheading:
      "From Linda's perspective, the implementation of DentaBook has significantly reduced administrative workload, allowing more time for patient care and service improvements. There has been a reduction in appointment no-shows due to reminders",
  },
];

const Results = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Results/Conclusions
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        At the conclusion of this project, we have taken significant steps
        toward simplifying dental care university students through DentaBook.
        The critical success metrics achieved include:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {metrics.map(({ heading, subheading }, index) => (
          <li key={index}>
            <span className="font-bold">{heading}</span> {subheading}
          </li>
        ))}
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In summary, DentaBook simplifies the dental care experience for
        university students by offering a user-friendly, digital appointment
        solution. It addresses the pain points identified, such as inconvenient
        queueing and limited accessibility, and enhances the overall quality of
        dental care. This project&apos;s success metrics reveal that DentaBook
        not only improves the experience for students but also streamlines
        clinic operations, offering a win-win solution. As we move forward,
        we&apos;ll continue to gather feedback and refine DentaBook to ensure it
        remains an asset for both students and clinic administrators
      </p>
    </>
  );
};

export default Results;
