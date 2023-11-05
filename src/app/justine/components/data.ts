import home from "../../../assets/justine/home.jpg";
import record from "../../../assets/justine/record.jpg";
import appointment from "../../../assets/justine/appointment.jpg";
import confirmation from "../../../assets/justine/confirmation.jpg";
import reminder from "../../../assets/justine/reminder.jpg";
import about from "../../../assets/justine/about.jpg";
import members from "../../../assets/justine/members.jpg";
import faq from "../../../assets/justine/faq.jpg";

export const solutions = [
  {
    feature: "Implement an Online Appointment System",
    description:
      "Create a user-friendly online appointment booking system that allows students to schedule dental appointments from their devices.",
  },
  {
    feature: "Real-time Queue Status",
    description:
      "Display real-time updates on the number of patients in the queue and expected wait times.",
  },
  {
    feature: "Appointment Confirmation Notifications",
    description:
      "Send automated appointment confirmation messages to students, ensuring they are aware of their scheduled appointments.",
  },
  {
    feature: "Waitlist and Notification System",
    description:
      "Introduce a waitlist for students who can't secure immediate appointments. When a slot becomes available, students are notified.",
  },
  {
    feature: "Digital Record Keeping",
    description:
      "Implement a secure and centralized digital system for maintaining patient records and histories.",
  },
];

export const header = {
  title: "DentaBook: A Digital Dental Appointment Solution",
  author: " Justine Elorde",
  lastUpdated: "03/11/2023",
};

export const summaryContent =
  "This project centers on the creation of a digital dental appointment solution aimed at streamlining the process of booking dental appointments for university dental clinics. The existing manual appointment system often leads to extended waiting times and uncertainty about appointment availability, causing inconvenience for students. This project was developed to address these challenges, making it easy for students to schedule dental appointments online. The primary objective is to enhance the overall dental care experience for university students while improving the operational efficiency of the dental clinic. Through this project, I sought to provide a user-friendly solution that simplifies clinic visits and optimizes appointment management.";
export const statementContent =
  "Most of the university dental clinics operate on a first-come, first-served basis for student dental appointments, resulting in extended waiting times, uncertainty, and inefficiency. This approach hinders accessibility for students with varying schedules and has led to a preference among students for an online appointment system. Implementing such a system is expected to streamline the booking process, reduce physical queuing, and improve the overall clinic experience for students, making dental care more convenient and secure.";

export const snapshots = [
  {
    image: home,
    caption: "Login page",
    alt: "login-page",
  },
  {
    image: record,
    caption: "Record form",
    alt: "record-form",
  },
  {
    image: appointment,
    caption: "Appointment form",
    alt: "appointment-form",
  },
  {
    image: confirmation,
    caption: "Appointment confirmation",
    alt: "appointment-confirmation",
  },
  {
    image: reminder,
    caption: "Reminder notification",
    alt: "reminder-notification",
  },
  {
    image: about,
    caption: "About page",
    alt: "about-page",
  },
  {
    image: members,
    caption: "Dentabook members",
    alt: "dentabook-members",
  },
  {
    image: faq,
    caption: "FAQs",
    alt: "faqs",
  },
];
