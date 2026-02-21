import kevinRushProfile from '../assets/kevinRushProfile.png'
import about from '../assets/about.jpg'
import conference from '../assets/certificates/conference.png';
import cybersecurity from '../assets/certificates/cybersecurity.png';
import datascience from '../assets/certificates/datascience.png';
import oci from '../assets/certificates/oci.png';
import oci_ai from '../assets/certificates/oci-ai.png';
import UiPath from '../assets/certificates/uipath.png';


export const HERO_CONTENT = `
Hi, I’m Karthikeyan M, a passionate Full Stack Java Developer with a strong foundation in both frontend and backend technologies. With over 1 year of hands-on experience, I’ve worked extensively with technologies like React.js, Spring Boot, Java, MySQL, HTML, CSS, and JavaScript to build end-to-end web applications. I have developed several real-world projects including a To-Do Application and a Student Record Management System, which demonstrate my ability to design and implement user-friendly, scalable, and secure systems. `;


export const SKILLS = [
  {
    title : `Mobile Application Development`,
    experience : 1,
    image:`https://community.nasscom.in/sites/default/files/media/images/Untitled%20design%20%2826%29_0.png`,
    technologies:['Flutter, ','React Native'],
    description : `I’m a passionate mobile app developer skilled in building cross-platform apps using React Native. I’ve developed projects like a WhatsApp clone with real-time messaging and intuitive UI. My strengths include smooth UI design, API integration, and state management. I focus on creating user-friendly, efficient, and scalable mobile experiences.`,
    project: ['Whatsapp clone,', 'Restaurant App,','Bus Booking App']
  },
    {
    title : `Frontend Development`,
    experience : 1,
    technologies:['HTML, ','CSS, ','Javascript '],
    image:`https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png`,
    description : `I’m a passionate mobile app developer skilled in building cross-platform apps using React Native. I’ve developed projects like a WhatsApp clone with real-time messaging and intuitive UI. My strengths include smooth UI design, API integration, and state management. I focus on creating user-friendly, efficient, and scalable mobile experiences.`,
    project: ['Amazon clone, ', 'Restaurant Menu App, ','Ecommerce Application']
  },
  {
    title:'Backend Development',
    experience: 1,
    image:`https://dac.digital/wp-content/uploads/2023/07/difference_between_frontednd_and_backend-optimized.jpeg`,
    technologies: ['Springboot, ','POSTMAN API, '],
    description : `I’m a passionate mobile app developer skilled in building cross-platform apps using React Native. I’ve developed projects like a WhatsApp clone with real-time messaging and intuitive UI. My strengths include smooth UI design, API integration, and state management. I focus on creating user-friendly, efficient, and scalable mobile experiences.`,
    project: ['Student Record Management, ','Todo Application, ', 'Email Writer using AI']
  }
]

// export const SKILLS = {
//    title : `Mobile Application Development`,
//     experience : 1,
//     technologies:['Flutter, ','React Native'],
//     image:`https://admin.12grids.com/uploads/blogs/original_cover_images/Webp/Best_Mobile_App_Development_Technologies_12Grids.webp`,
//     description : `I’m a passionate Mobile Application Developer skilled in building cross-platform apps using React Native. I’ve developed projects like a WhatsApp clone with real-time messaging and intuitive UI. My strengths include smooth UI design, API integration, and state management. I focus on creating user-friendly, efficient, and scalable mobile experiences.`,
//     project: ['Whatsapp clone, ', 'Restaurant App, ','Bus Booking App, ']
// }

export const TECH_STACK = [
  {
    name: `HTML`,
    image: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`
  },
  {
    name: `CSS`,
    image: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`
  },
  {
    name: `React`,
    image: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`
  },
  {
    name: `Java`,
    image: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg`
  },
  {
  name: "Bootstrap",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
},
{
  name: "Spring Boot",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
},
{
  name: "Node.js",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
},
{
  name: "Express",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
},
{
  name: "Tailwind CSS",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
},
{
  name: "Spring Boot",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
},
{
  name: "MySQL",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
}
];

export const PROJECTS = [
  {
    name: `Restaurant Menu`,
    image:`https://img.freepik.com/free-vector/gradient-dark-mode-app-template_52683-118059.jpg?semt=ais_hybrid&w=740`,
    technologies: ['HTML','CSS'],
    description: `I developed a restaurant menu website purely using HTML and CSS, focusing on clean design and proper use of semantic HTML elements. The layout includes sections for appetizers, main courses, and desserts, each styled for clarity and ease of navigation. This project reflects my strong foundation in web standards and accessibility, showcasing my ability to build structured, visually appealing interfaces using only core web technologies.`,
    duration: `1 week`
  },
  {
    name:`Amazon Clone`,
    technologies: ['HTML','CSS','Tailwind CSS'],
    image:`https://foolishdeveloper.com/wp-content/uploads/2024/05/thumbnail-5.png`,
    description: `I created an Amazon clone using HTML, CSS, and Tailwind CSS to replicate the layout and design of the Amazon homepage. The project features a responsive header with navigation, a promotional hero section, and a product grid displaying items with clean styling and hover effects. Using Tailwind’s utility-first classes, I efficiently built reusable components and ensured mobile responsiveness across devices. This project enhanced my front-end development skills and gave me practical experience in building modern, responsive UIs.`,
    duration: `1 week`
  },
  {
    name:`Portfolio`,
    technologies: [`React`,`CSS`,`Tailwind CSS`],
    image:`https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg`,
    description: `I built a personal portfolio website using React.js and Tailwind CSS, showcasing my projects, skills, and experience in a clean and responsive layout. The project demonstrates my strong understanding of React components, state management, and Tailwind’s utility-first approach to styling. It includes animated sections, reusable components, and responsive design, offering an engaging user experience across all devices. This portfolio not only highlights my technical abilities but also reflects my attention to design and frontend best practices.`,
    duration: `2 weeks`
  },
  {
    name:`MERN Stack E-Commerce`,
    technologies: [`React`,`Express`,`Mongo DB`,`Node.js`],
    image:`https://i.ytimg.com/vi/A_-fn_ij59c/maxresdefault.jpg`,
    description: `I built a full-fledged **MERN stack eCommerce application** using **MongoDB, Express.js, React.js, and Node.js**, which significantly deepened my understanding of JavaScript across both frontend and backend. The project features user authentication, product management, cart functionality, and secure payment integration. Working on this helped me strengthen concepts like API development, state management with React, and handling real-world database operations, enhancing my full-stack development skills.`,
    duration: `4 weeks`
  },
  {
    name: `Student Record Management System`,
    technologies: [`React`,`Spring Boot`,`MySQL`],
    image:`https://www.softwaresuggest.com/blog/wp-content/uploads/2024/01/best-student-record-management-system-for-schools-institutes.png`,
    description:`I developed a **Student Record Management System** using **React.js** for the frontend, **Spring Boot** for the backend, and **MySQL** as the database. The system allows users to perform CRUD operations—adding, viewing, updating, and deleting student records—with a clean and responsive interface. React handles dynamic form inputs and table rendering, while Spring Boot provides RESTful APIs to interact with the MySQL database. This project helped me gain hands-on experience in full-stack development, API integration, and building scalable, real-world web applications with a focus on modularity and performance.`,
    duration:`4 weeks`
  }
]

export const ACHIEVEMENTS = [{
  event:"Panimalar International Conference 2024",
  project:"Farm Cult",
  description:`Farm Cult is a UI/UX prototype designed in Figma for a modern, farmer-focused digital platform. The goal of the prototype is to provide a user-friendly interface that empowers farmers with tools to manage their crops, access farming knowledge, and connect with agricultural services efficiently.`,
  cert_path:conference,
  type: "png"
},
{
  event:"NASSCOM",
  project:"Datascience For Beginners",
  description:`Completed a Data Science certification program covering core concepts such as data preprocessing, exploratory data analysis (EDA), statistical analysis, and machine learning fundamentals.Gained hands-on experience in Python libraries including NumPy, Pandas, Matplotlib, and Scikit-learn.Worked on real-world datasets to perform data cleaning, visualization, and predictive modeling.Developed an understanding of supervised and unsupervised learning techniques.`,
  cert_path:datascience,
  type: "png"
},
{
  event:"NASSCOM",
  project:"Cybersecurity Fundamentals",
  description:`Completed certification covering core cybersecurity concepts including network security, cryptography basics, common cyber threats and attacks (phishing, malware, ransomware), risk management, secure coding practices, data protection principles, and fundamentals of information security governance.`,
  cert_path:cybersecurity,
  type: "png"
},
{
  event:"Oracle",
  project:"Oracle Cloud Infrastructure - Foundation Associate",
  description:`Earned the Oracle Cloud Infrastructure (OCI) Foundations Associate certification demonstrating knowledge of core cloud concepts and OCI services; gained understanding of compute, storage, networking, and security; learned AI and machine learning services in OCI; developed familiarity with cloud architecture principles, identity and access management (IAM), and cost management strategies.`,
  cert_path:oci,
  type: "png"
},
{
  event:"Oracle",
  project:"Oracle Cloud Infrastructure - AI Foundation Associate",
  description:`Oracle AI Foundations Associate: Earned certification demonstrating foundational knowledge of artificial intelligence concepts including machine learning, deep learning, neural networks, natural language processing (NLP), computer vision, generative AI, and the AI lifecycle, along with an understanding of AI services and deployment within Oracle Cloud Infrastructure (OCI).`,
  cert_path:oci_ai,
  type: "pdf"
},
{
  event:"UiPath",
  project:"UiPath Automation Developer Associate",
  description:`Earned certification demonstrating knowledge of Robotic Process Automation (RPA) concepts, workflow design, automation development using UiPath Studio, data manipulation, selectors, debugging techniques, exception handling, and deploying scalable automation solutions.`,
  cert_path:UiPath,
  type: "pdf"
},

]