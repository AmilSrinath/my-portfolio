import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  arduino,
  meta,
  starbucks,
  tesla,
  shopify,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  github, blender,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  }
] as const;

// Services
export const SERVICES = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  }
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "arduino",
    icon: arduino,
  },
  {
    name: "blender",
    icon: blender,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
  {
    testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
  {
    testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Highway Ticket Management System",
    description:
      "This project is a Highway Ticket Management System designed to manage users, vehicles, tickets, and payments. It is built using a microservices architecture with Spring Boot and communicates through REST APIs.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://aivision.asia/static/img/highway/toll%20gate-01.jpg',
    source_code_link: "https://github.com/AmilSrinath/Highway-Ticket-Management-System",
  },
  {
    name: "Chat Application",
    description:
      "This repository features a chat application built to facilitate real-time messaging between users. It includes both client-side and server-side code, showcasing how to implement chat functionalities with features like message sending, receiving, and user management.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Maven",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://media.designrush.com/tinymce_images/402688/conversions/messenger-chat-app-design-content.jpg',
    source_code_link: "https://github.com/AmilSrinath/ChatApplication",
  },
  {
    name: "Shoe Management System",
    description:
        "The AAD Course Work Front-End repository features a modern web application built with React and Material-UI. It highlights responsive design and reusable components, ensuring a smooth user experience across devices. Explore this project to see practical implementations of contemporary front-end technologies and best practices.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "white-text-gradient",
      },
    ],
    image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg',
    source_code_link: "https://github.com/AmilSrinath/AAD_Course_Work_Front-End/tree/main",
  },
  {
    name: "Connect 4 Game",
    description:
      "It includes the game logic and user interface for this classic two-player board game where players aim to connect four of their pieces in a row. The project demonstrates game development principles and provides a functional example of the Connect 4 game.",
    tags: [
      {
        name: "OOP",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      }
    ],
    image: 'https://i5.walmartimages.com/asr/68b095ca-0295-404c-97ab-0f4a74706b2e.332271406aadb09f155ae7c069904934.png',
    source_code_link: "https://github.com/AmilSrinath/Connect_4_Game",
  },
  {
    name: "Angular and Spring Boot Integration",
    description:
      "This repository showcases a full-stack web application built with Angular and Spring Boot. It features seamless integration between the front-end and back-end, demonstrating how to develop, connect, and manage data flow between a client-side Angular application and a server-side Spring Boot API.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot ",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://www.filepicker.io/api/file/fUQ7OU6CQxmF0pFCiNxu',
    source_code_link: "https://github.com/AmilSrinath/Angular_SpringBoot",
  },
  {
    name: "Arduino to JavaFX Integration",
    description:
      "This project demonstrates how to interface Arduino with JavaFX, allowing for real-time data visualization and control through a graphical user interface.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "JavaFX",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://miro.medium.com/v2/resize:fit:720/1*1zyxNq15vwHfXUKTqtFuvw.png',
    source_code_link: "https://github.com/AmilSrinath/Arduino_To_JavaFX",
  },
  {
    name: "React Native with Firebase",
    description:
      "This repository provides a React Native project integrated with Firebase services. It demonstrates how to utilize Firebase for authentication, real-time database interactions, and other backend functionalities within a React Native mobile application.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://www.mitrais.com/wp-content/uploads/2018/03/Firebase-React-Native-Integration.jpg',
    source_code_link: "https://github.com/AmilSrinath/React-Native-Project-With-Firebase",
  },
  {
    name: "Uber Eats Clone",
    description:
        "A responsive and feature-rich clone of Uber Eats built with React and Node.js. This project replicates the core functionalities of the popular food delivery service, including real-time order tracking, user authentication, and a streamlined UI for both customers and restaurant partners. Ideal for learning about full-stack development and API integration.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo-2018.png',
    source_code_link: "https://github.com/AmilSrinath/Uber-Eats-Clone",
  },
  {
    name: "AMS POS System",
    description:
        "A comprehensive Point of Sale (POS) system designed for retail and restaurant environments. This project utilizes Java for backend development and features robust functionalities such as inventory management, sales tracking, and reporting. The system offers a user-friendly interface for managing transactions, employee roles, and financial summaries, making it a practical solution for streamlining business operations.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/5a599058-0b6d-4d9e-8e8f-36430f4dc0a9.png',
    source_code_link: "https://github.com/AmilSrinath/AMS_POS_System",
  },
  {
    name: "Unical POS",
    description:
        "A versatile Point of Sale (POS) system developed to enhance retail and restaurant operations. Built with modern technologies, this project includes features such as sales processing, inventory management, and detailed reporting. Designed for ease of use and scalability, Unical POS provides a robust solution for managing transactions and business data efficiently.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java Swing",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://innoviti.com/wp-content/uploads/2022/08/POS-System.jpg',
    source_code_link: "https://github.com/AmilSrinath/Unical_POS",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://youtube.com/@as-code?si=ztgXm4bVMytkh3pN",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/amil-srinath-9498ba274/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/AmilSrinath",
  },
] as const;
