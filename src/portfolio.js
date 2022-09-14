/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Hunain Sajid",
  title: "Hi all, I'm Hunain",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having experience in building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Mw0NixbvpAZxTdOcGBBSMSMtN6D3lpfn/view",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HunnySajid",
  linkedin: "https://www.linkedin.com/in/HunainSajid/",
  gmail: "hunainbinsajid@gmail.com",
  medium: "https://medium.com/@hunainbinsajid",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A FULL STACK ENGINEER who can develop ",
  skills: [
    emoji(
      "⚡ Highly interactive Front end / User Interfaces for your Web applications in React Ecosystem"
    ),
    emoji(
      "⚡ Cross Platform mobile apps built in React Native"
    ),
    emoji("⚡ Progressive Web Applications ( PWA )/ Microfrontends in normal and SPA Stacks"),
    emoji("⚡ Business Logic implemetations and API Development in Express/Nestjs"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-mobile"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-mongo"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FAST - National University",
      logo: require("./assets/images/FastLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2013- May 2017",
      desc: "A foundational degree program in Comuputer Science",
      descBullets: [
        "Algorithem and Data Structures",
        "Web Development, Databases and Networking "
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile Apps", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Retailo Technologies",
      companylogo: require("./assets/images/retailo.png"),
      date: "July 2021 - Present",
      desc: "Provided technical guidance for software design and development activities for user onboarding and data collection in BNPL module. Delivered the feature 1.5 months a ahead of the schedule time.",
      descBullets: [
        "Defined, built, developed, and fixed new customer-facing features using React and React Native technologies, decreasing the number of errors reported by 12%.",
        "Performed a complete codebase revamp from JavaScript to TypeScript, which improved the development experience and reduced runtime errors by 70%.",
        "Led cross-functional engineering teams of 3 developers working on multiple functions, including a buy now, pay later (BNPL) plan, shopping cart experience, and platform optimization.",
        "Led efforts in maintaining and updating existing mobile and web app architecture.",
        "Headed the design system development from scratch in Storybook for React and React Native.",
        "Dedicately working with rest apis and business logic development for Back office",
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "Creative Chaos",
      companylogo: require("./assets/images/ccLogo.png"),
      date: "Aug 2020 - Present",
      desc: "Currently Working as Frontend Leaned Full Stack Developer",
      descBullets: [
        "Troubleshooting interface software and debugging application codes",
        "Developing and implementing front-end architecture to support user interface concepts",
        "Monitoring and improving front-end performance",
        "Building sustainable coding that may be used in future",
        "Ensuring feasibility of UI/UX designs",
        "Dedicately working with rest apis and business logic development for Back office",
        "Analyzing code, requirements, system risks, and software reliability"
      ]
    },
    {
      role: "Software Engineer",
      company: "Arbisoft",
      companylogo: require("./assets/images/arbisoftLogo.png"),
      date: "Dec 2019 – Aug 2020",
      desc: "Worked as a Lead Frontend Engineer",
      descBullets: [
        "Meeting with the dev team to discuss user interface ideas and applications",
        "Reviewing application requirements and interface designs",
        "Identifying web-based user interactions",
        "Developing and implementing highly-responsive user interface components using React concepts",
        "Writing application interface codes using JavaScript following React.js workflows",
        "Modifying designs and specifications of complex applications"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Iplex",
      companylogo: require("./assets/images/iplexLogo.jpeg"),
      date: "Sep 2018 – Dec 2019",
      desc:
        "One of the lead in a team of developers working in collaboration on large scale web application related to edTech",
      descBullets: [
        "Estimating effort and timelines and working to refine product roadmap",
        "Maintaining repositories and production CI/CD environment",
        "Developing and implementing front-end architecture to support user interface concepts",
        "Documenting application changes and developing updates",
        "Writing application interface codes using JavaScript following React.js workflows",
        "Deploying and maintaining software in cloud environments, on Heroku, AWS, and Google Cloud"
      ]
    },
    {
      role: "Software Engineer",
      company: "Cubix",
      companylogo: require("./assets/images/cubixLogo.png"),
      date: "Nov 2017 – Aug 2018",
      desc:
        "Collaborated in a team focused environment in pursuit of developing  best mobile game experience to be played world wide",
      descBullets: [
        "Developed a mobile game project in Unity 3D that was a 2D  platformer game named ​TimeForge, A run and gun 2d platformer mobile game available on  google play store",
        "NPC AI, Character  Controllers,inventory, leaderboard, facebook app invites  and mobile ads etc",
        "Created a battle particle system in a card based online multiplayer  game",
        "Performed unit testing on different modules of multiple projects  and assisted senior developers in delivering build"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "MAJOR PROFESSIONAL & PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/retailo.png"),
      projectName: "Retailo App",
      projectDesc: "B2B Ordering App For Retailers Retailo is an online ordering platform for retailers to buy day-to-day inventory for their shops.",
      footerLink: [
        {
          name: "Website",
          url: "https://retailo.co/"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/app/id1607963433"
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.app.retailerapp&hl=en&gl=US"
        },
        {
          name: "Video",
          url: "https://drive.google.com/file/d/1kiFvdtKzBw2AkARTqwjg9I5eGuVpRx84/view?usp=sharing"
        }
      ]
    },
    {
      projectName: "Quiz App",
      projectDesc: "Create Quizzes for revisions, or fun by driving theorey based Trivia",
      footerLink: [
        {
          name: "Video",
          url: "https://drive.google.com/file/d/1Z52jflz3sce4tBrp7-FW7GpPbg71GJYL/view"
        }
      ]
    },
    {
      image: require("./assets/images/quran.jpeg"),
      projectName: "Quranic Vocabulary",
      projectDesc: "Shows a random word from Quran in Arabic and its English meaning on a beautiful background when user opens a new tab.",
      footerLink: [
        {
          name: "Chrome Extension",
          url: "https://chrome.google.com/webstore/detail/quranic-vocabulary/ooelkkeojgepkgkiepifoijfidomhjmg?hl=en&authuser=2"
        }
      ]
    },
    {
      projectName: "Dev Studio",
      projectDesc: "A clean, beautiful and responsive portfolio template for Developers",
      footerLink: [
        {
          name: "website",
          url: "https://hunnysajid.github.io/"
        },
        {
          name: "github",
          url: "https://github.com/HunnySajid/devstudio"
        }
      ]
    },
    {
      image: require("./assets/images/litterati.png"),
      projectName: "Litterati Open Data",
      projectDesc: "Empower people to collect Litter Data & to empower people with access to that data so that anyone can help to create a litter-free world",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://opendata.litterati.org/"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/litterati.png"),
      projectName: "Litterati Backoffice",
      projectDesc: "Empowering people to create a cleaner planet by turning information into actionable insight.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.litterati.org/"
        },
        {
          name: 'Video',
          url: "https://drive.google.com/file/d/18tYh_AAvf8gEyf5fe2BsPiKbacmk5-pu/view"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/arbisoftLogo.png"),
      projectName: "HRIS | Workstream",
      projectDesc: "An enterprise management tool designed for organizations to manage all the core components of its business.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://arbisoft.com/solutions/hris/"
        }
      ]
    },
    {
      image: require("./assets/images/mprep.jpeg"),
      projectName: "Mastery Prep | Backoffice",
      projectDesc: "MasteryPrep is the ideal test prep program for schools looking to help their students achieve higher scores on the ACT, SAT, and more!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://arbisoft.com/solutions/hris/"
        },
        {
          name: 'Video',
          url: 'https://drive.google.com/file/d/1mHEsInZxCaUkwbulGdAqR3I71m4cBf-e/view'
        }
      ]
    },
    {
      image: require("./assets/images/cubixLogo.png"),
      projectName: "Timeforge",
      projectDesc: "A thrilling roleplay game for shooting enthusiasts and gaming lovers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.cubix.co/work/time-forge"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://devpub.hashnode.dev/useimperativehandle-react-hook-explained",
      title: "useImperativeHandle React Hook Explained!",
      description:
        "A way to trigger a change in a child from its parent component"
    },
    {
      url:
        "https://devpub.hashnode.dev/how-to-manage-a-node-version-within-a-specific-project",
      title: "How to manage a node version within a specific project?",
      description:
        "A way to use node version variants in different projects via nvm"
    },
    {
      url:
        "https://devpub.hashnode.dev/what-the-heck-is-node-js-12ae5639d22f",
      title: "What the heck is Node.js?",
      description:
        "Minimalist's introduction to Node js"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3218084122",
  email_address: "hunanbinsajid@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
