import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rene Prince | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rene Prince',
  subtitle: 'Full-Stack Web Developer',
  cta: 'View Projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profileren.jpg',
  paragraphOne:
    'I am a Full Stack Developer who has recently qualified with a Diploma in Software Development from Code Institute. I am proficient with Python, JavaScript, SQL, HTML and CSS. Analytical thinking and working to strict deadlines are a few of my strengths from past experience in the Supply Chain sector. I love creating web applications from scratch using Python and JavaScript jumping back and forth from front-end to back-end. I’m an advocate of minimalist web design and development and try to implement as much as I can with my projects.',
  paragraphTwo:
    'Currently seeking a Junior Developer role where I can showcase my existing skills and progress further.',
  paragraphThree:
    'Python, JavaScript, Django, Flask, React, Gatsby, MySQL, MongoDB, JQuery, HTML and CSS',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'eaglefitness.jpg',
    title: 'Eagle Fitness',
    info: 'A website for a local gym in Wembley.',
    info2: 'HTML | CSS | JavaScript | Bootstrap',
    url: 'https://r-prince.github.io/Eagle-Fitness/',
    repo: 'https://github.com/R-Prince/Eagle-Fitness', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'traveltime.jpg',
    title: 'Travel Time',
    info:
      'A holiday inspiring website that allows you to search for your next holiday destination or choose a destination from our hand-picked selection.',
    info2: 'HTML | CSS | JavaScript | Bootstrap | JQuery | Google Place/Map API | EmailJS',
    url: 'https://r-prince.github.io/TravelTime/',
    repo: 'https://github.com/R-Prince/TravelTime', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dinochat.jpg',
    title: 'Dino Chat App',
    info:
      'A simple chat app that allows users to instantly message each other using Python with a Flask Framework.',
    info2: 'Python | JavaScript | Flask | HTML | CSS | BootStrap',
    url: 'https://flask-dino-chat-app.herokuapp.com/',
    repo: 'https://github.com/R-Prince/flask-chat', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'prince.reneldn@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rene-prince-03a875127/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/R-Prince',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
