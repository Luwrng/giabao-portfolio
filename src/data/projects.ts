import projectImage from '../assets/HomePic.jpg'

export type Project = {
    number: string
    title: string
    category: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
}

export const projects: Project[] = [
    {
        number: '01',
        title: 'Clean Food Viet',
        category: 'Featured Project',
        description: 'A healthy food platform with customer and admin flows, Cloudinary and Firebase data management, and OTP authentication.',
        image: projectImage,
        technologies: ['React', 'Firebase', 'Cloudinary', 'REST API'],
        liveUrl: 'https://github.com/Luwrng/muse-ant-design-dashboard',
        githubUrl: 'https://github.com/Luwrng/muse-ant-design-dashboard',
    },
    {
        number: '02',
        title: 'Pregnancy Growth Tracking System',
        category: 'Academic Project',
        description: 'A website for pregnancy health tracking, comparison charts, knowledge sharing, service packages and online payments.',
        image: projectImage,
        technologies: ['React', 'Swagger UI', 'Figma'],
        liveUrl: 'https://github.com/trungne08/SWP391-Group4',
        githubUrl: 'https://github.com/trungne08/SWP391-Group4',
    },
    {
        number: '03',
        title: 'Pawtime',
        category: 'Academic Project',
        description: 'A pet care services website covering pet hotel and training center features.',
        image: projectImage,
        technologies: ['JavaScript', 'Node.js', 'Figma'],
        liveUrl: 'https://github.com/Luwrng/PawTime',
        githubUrl: 'https://github.com/Luwrng/PawTime',
    },
    {
        number: '04',
        title: 'SRU Management',
        category: 'FPT Software Project',
        description: 'A human resource management web application with attendance tracking and leave request management.',
        image: projectImage,
        technologies: ['Node.js', 'Vite.js', 'Figma', 'Postman'],
        liveUrl: 'https://github.com/Luwrng',
        githubUrl: 'https://github.com/Luwrng',
    },
]
