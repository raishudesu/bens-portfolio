import reverie from "../../../assets/barysh/reverie.jpg";
import quillify from "../../../assets/barysh/quillify.jpg";
import home from "../../../assets/barysh/homepage.jpg";
import signin from "../../../assets/barysh/signin.jpg";
import register from "../../../assets/barysh/register.jpg";
import dashboard from "../../../assets/barysh/dashboard.jpg";

export const solutions = [
  {
    content:
      "Survey respondents struggle to find helpful learning materials. The solution is to integrate relevant materials from various sources, including user-generated content.",
  },
  {
    content:
      "Learners use online platforms and AI but often can't find specific answers. Create a tailored learning community for tech enthusiasts to connect with individuals who can provide the needed answers.",
  },
  {
    content:
      "Integrate an AI Chatbot Assistant to help students in their learning journey.",
  },
  {
    content:
      "Students lack collaboration due to skill level concerns. Implement open-source forums and collaboration features like blogs and forums.",
  },
  {
    content:
      "These problems are interconnected, leading to a single solution: creating a specialized learning community platform for tech enthusiast students to guide them in their learning journey.",
  },
];

export const libraries = [
  {
    library: "Authentication",
    content:
      "I have implemented user authentication using Next-Auth, which provides a secure and customizable authentication solution, making user management hassle-free.",
  },
  {
    library: "Database",
    content:
      "My application relies on MongoDB Atlas, a reliable cloud-based database, ensuring scalability, flexibility, and high data security.",
  },
  {
    library: "Firebase Storage",
    content:
      "I utilize Firebase Storage for storing and managing learning materials, providing a secure and scalable solution for easy access to educational resources.",
  },
  {
    library: "ODM (Object Data Modeling)",
    content:
      "I use Mongoose, an ODM library for MongoDB, to simplify database interactions and schema management, enhancing the efficiency of our application.",
  },
  {
    library: "Form Validation",
    content:
      "For form validation, I utilize React Hook Form and Zod, ensuring that user inputs are accurate and secure.",
  },
  {
    library: "Data Validation",
    content:
      "For data validation, I maximize the usage of Typescript and Zod for layers of validation in client and server codebases.",
  },
  {
    library: "Server Requests",
    content:
      "To manage server requests efficiently, I incorporate React Query and Fetch, optimizing data retrieval and updates.",
  },
  {
    library: "State Management",
    content:
      "Zustand is our choice for state management, allowing us to manage application state with ease and performance in mind.",
  },
  {
    library: "Text Editor",
    content:
      "My web app features a user-friendly text editor powered by React Quill, offering rich text editing capabilities.",
  },
  {
    library: "Encryption",
    content:
      "Security is a priority, and I employ BcryptJS to hash and encrypt sensitive data, providing a robust security layer.",
  },
  {
    library: "PDF Viewer",
    content:
      "I have integrated pdf-viewer-reactjs to allow users to seamlessly view and interact with PDF documents.",
  },
  {
    library: "Date Parsing",
    content:
      "For date handling, I have chosen Luxon, which simplifies date and time manipulation, enhancing the application's usability.",
  },
  {
    library: "OpenAI API",
    content:
      "I also utilize the OpenAI API for specific functionality, enhancing the capabilities of our application.",
  },
  {
    library: "Hosting",
    content:
      "The prototype is hosted via Vercel, and the planned deployment of the actual web application will be in Amazon Web Services (AWS).",
  },
];

export const features = ["Blogs", "Forums", "Materials", "AI Chat"];

export const themes = [
  "Custom themes (light and dark)",
  " All of the features of SITEX are seen at the navigation, which addresses the pain points of the problem by learning through collaboration, viewing materials, open forums and AI assistance",
  "By default, non-signed in users can only preview Blogs, Forums, and Material sections, but will be not able to interact with it such as commenting and liking the content unless they register and sign in. Additionally, AI Assistance is exclusive for signed in users.",
  "After signing in, the user will be redirected to user dashboard. Users can create blogs, post forums, upload pdf materials, use the AI Assistant and start collaborating with other users.",
];

export const header = {
  title: "SITE Experience (SITEX): AI Enhanced Community Learning Platform",
  author: "Barysh Nikov Bacaltos",
  lastUpdated: "03/11/2023",
};

export const summaryContent =
  "The project's primary goal is to create a student community that fosters collaboration and support. Inspired by my college experience, where many technological students lacked direction, SITEX is a unified platform, drawing inspiration from platforms like Dev Community, GitHub, StackOverflow, and ChatGPT. It offers features like digital learning materials, Q&A forums, knowledge sharing, and an AI Assistant to enhance learning and collaboration in technological fields.";

export const statementContent =
  "The project is inspired by a common issue in the student community, where students often lack a clear focus within their technological field due to a lack of collaborative opportunities and difficulties in finding suitable online learning resources. This lack of direction leads to disinterest and fatigue in their academic programs, hindering their education and career development.";

export const projects = [
  {
    title: "Reverie",
    summary:
      "Reverie functions as a diary application that's accessible from both desktop and mobile browsers.",
    image: reverie,
    links: {
      github: "https://github.com/raishudesu/Reverie",
      live: "https://reverie-notes.web.app",
    },
  },
  {
    title: "Quillify",
    summary:
      "Your source for tech insights, tutorials, and community discussions.",
    image: quillify,
    links: {
      github: "https://github.com/raishudesu/quillify-client",
      live: "https://quillify.vercel.app",
    },
  },
];

export const links = [
  {
    name: "Github",
    link: "https://github.com/raishudesu",
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~01f820ee60c225abf9",
  },
  {
    name: "Website",
    link: "https://baryshnikov.vercel.app",
  },
];

export const snapshots = [
  {
    image: home,
    caption: "Hompage",
    alt: "homepage",
  },
  {
    image: dashboard,
    caption: "Dashboard",
    alt: "dashboard",
  },
  {
    image: signin,
    caption: "Sign in page",
    alt: "signin-page",
  },
  {
    image: register,
    caption: "Register page",
    alt: "register-page",
  },
];
