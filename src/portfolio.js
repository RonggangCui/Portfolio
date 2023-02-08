/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ronggang's Portfolio",
  description:
    "A software developer who always thrives to work on projects which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ronggang's Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Ronggang Cui",
  logo_name: "RonggangCui",
  subTitle:
    "A software developer who always thrives to work on projects which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1U54w9ydRyzzEkWbSafGX5bPpWREYiMLR/view?usp=sharing",
  portfolio_repository: "https://github.com/RonggangCui/Portfolio.git",
  githubProfile: "https://github.com/RonggangCui",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/RonggangCui",
  // linkedin: "https://www.linkedin.com/in/ronggang-cui/",

  {
    name: "Github",
    link: "https://github.com/RonggangCui",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ronggang-cui/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React and solo android apps using Java",
        "⚡ Creating application backend in Node, and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed models and training methods for visual recognition deeplearning use cases",
        "⚡ Experience of working with Computer Vision projects",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};
const degrees = {
  degrees: [
    {
      title: "University of Alberta",
      subtitle: "BSc Honors in Computer Science",
      logo_path: "ualberta.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - present",
      descriptions: [
        "⚡ •Relevant Coursework: Algorithm, Object-Oriented Programming, Web Development, Mobile Development, Database Management, Agile Principles",
        "⚡ •Received First Class Standing",
        "⚡ •Received Scholarship of $15,000.",
      ],
      website_link: "http://iiitk.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "iOS App Development",
      subtitle: "-- Dr. Angela Yu",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-71e2691e-adc1-43aa-8e2d-403e51fe47c0/",
      alt_name: "Dr. Angela Yu",
      color_code: "#8C151599",
    },
    {
      title: "Linux",
      subtitle: "-- Jason Cannon",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-66507676-552f-452f-ac7d-18cc0e0e72ce/",
      alt_name: "Jason Cannon",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked a startup as a software Developer. I also have volunteer experience at University of Alberta",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer",
          company: "Zero Rampup Technologies",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "Sep 2022 - Dec 2022",
          location: "Remote",
          description:
            "Translate client specifications into clear user stories, high-level software design, and made project sprint plans. Design and develop a website portal for clients to purchase services and manage payments, Developed RESTful API with NestJS, and PostgreSQL. Developed the frontend with React and Material-UI. Managed service purchase payments with Stripe API. Managed Accounts and login with Google OAuth API",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteer Experience",
      experiences: [
        {
          title: "Event Assistant",
          company: "University of Alberta International Student Services",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "Aug 2022 – present",
          location: "Edmonton, Alberta",
          description:
            "Running events throughout the year (field trips, student orientation, info sessions)",
          color: "#4285F4",
        },
        {
          title: "Education Mentor",
          company: "Engineering Students' Society, University of Alberta",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Sep 2020 – May 2021",
          location: "Edmonton, Alberta",
          description:
            "Offered guidance, provided feedback, shared experiences and insights with first-year students. Helped first-year students develop skills and set goals",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I contributed to web and mobile apps, as well as ML projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Ronggang Cui",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am open to Software Developer and Data Science Intership starting from May 1, 2023. You can email me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Contact Me",
    subtitle: "Email: rongcuidev@gmail.com | Mobile Number: 289-556-6464",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
