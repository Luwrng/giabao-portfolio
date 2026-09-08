export const navigationLinks = [
    { id: 'top', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
] as const

export const navigationContent = {
    brand: 'Gia Bao',
    brandMark: 'GB',
    talkAction: "Let's talk",
}

export const personalInfo = {
    name: 'Truong Nguyen Gia Bao',
    title: 'Front-end Developer',
    phone: '0865411146',
    email: 'baotng8502@gmail.com',
    github: 'https://github.com/Luwrng',
    location: 'District 9, Thu Duc City, Ho Chi Minh City',
}

export const heroContent = {
    greeting: "Hi, I'm Gia Bao 👋",
    role: 'Web Developer',
    description: 'I build modern and responsive web applications and enjoy turning ideas into real-world products. Currently focusing on React, Next.js, JavaScript, and Backend Development with Java & Spring Boot as I work toward becoming a Fullstack Developer.',
    location: 'Based in Vietnam',
    availability: '',
    imageAlt: 'Portrait of Gia Bao',
    primaryAction: 'View my work',
    secondaryAction: 'Contact me',
    scrollLabel: 'Scroll to explore',
}

export const aboutContent = {
    eyebrow: 'About',
    title: 'Frontend developer who cares about the details.',
    lead: 'Frontend Developer with 6+ months of internship experience in a professional environment, passionate about creating clean, responsive and user-friendly web applications.',
    paragraphs: [
        'Hands-on experience building web applications with HTML, CSS, JavaScript, React and Next.js, from implementing UI designs to integrating RESTful APIs.',
        'Comfortable working with Git, Swagger, Figma, Ant Design, Mantine, Cloudinary and Firebase, with basic knowledge of Docker and backend integration.',
    ],
}

export const skillsContent = {
    eyebrow: 'Skills',
    title: '',
    cards: [
        { number: '01', title: 'Frontend', description: 'React.js\nNext.js / Vue.js\nRedux / Vite\nTailwind CSS / Bootstrap\nAnt Design / Mantine / MUI' },
        { number: '02', title: 'Backend & Data', description: 'Node.js / Express.js\nJava / Spring Boot\nPostgreSQL / SQL Server\nMySQL / MongoDB\nFirebase Realtime Database' },
        { number: '03', title: 'Tools', description: 'JavaScript / TypeScript\nGit / GitHub / Docker\nRESTful API / Swagger\nFigma / Postman\nCloudinary / Firebase' },
    ],
}

export const educationContent = {
    school: 'FPT University',
    period: '2020 - 2025',
    major: 'Software Engineering',
    description: 'Focused on Web Development, including React, Next.js and RESTful APIs. Participated in multiple web application development projects during academic studies.',
}

export const experienceContent = {
    eyebrow: 'Experience',
    title: '',
    items: [
        { year: '10/06/2025 - 10/07/2025', position: 'IT Staff - Fresher', company: 'NGUYEN LONG Furniture', description: 'Developed Excel data processing scripts, contributed to the official website UI and feature integration, and researched Bazis software for design tasks.' },
        { year: '20/03/2025 - 20/05/2025', position: 'IT Intern', company: 'Anh Quan Tech', description: 'Designed ReactJS interfaces, built reusable components, integrated APIs, created responsive Mantine UI, and implemented validation, routing and dynamic data updates.' },
    ],
}

export const contactContent = {
    eyebrow: 'Contact',
    title: 'Have a good idea?',
    accentTitle: "Let's make it real.",
    email: personalInfo.email,
}

export const projectContent = {
    githubLabel: 'GitHub',
    demoLabel: 'Live demo',
    allProjectsLabel: 'See all projects',
}

export const footerContent = {
    copyright: '© 2026 Gia Bao',
    note: 'Designed & built with care',
    backToTop: 'Back to top ↑',
}
