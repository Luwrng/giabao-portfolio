export type Project = {
    number: string
    title: string
    type: string
    role: string
    period: string
    description: string
    tags: string[]
    github: string

}

export const projects: Project[] = [
    {
        number: '01',
        title: 'Clean Food Viet',
        type: 'Graduation Project',
        role: 'Front-end Dev',
        period: '15/05/2025 - 05/09/2025',
        description: 'A healthy food platform with customer and admin flows, Cloudinary and Firebase data management, and OTP authentication.',
        tags: ['React.js', 'Firebase', 'Cloudinary', 'REST API'],
        github: 'https://github.com/Luwrng/muse-ant-design-dashboard',

    },
    {
        number: '02',
        title: 'Pregnancy Growth Tracking System',
        type: 'Academic Project',
        role: 'Front-end Dev',
        period: '06/01/2025 - 31/03/2025',
        description: 'A website for pregnancy health tracking, comparison charts, knowledge sharing, service packages and online payments.',
        tags: ['React.js', 'Swagger UI', 'Figma'],
        github: 'https://github.com/trungne08/SWP391-Group4',

    },
    {
        number: '03',
        title: 'Pawtime',
        type: 'Academic Project',
        role: 'Front-end Dev',
        period: '06/09/2024 - 02/12/2024',
        description: 'A pet care services website covering pet hotel and training center features.',
        tags: ['JavaScript', 'Node.js', 'Figma'],
        github: 'https://github.com/Luwrng/PawTime',

    },
    {
        number: '04',
        title: 'SRU Management',
        type: 'FPT Software Project',
        role: 'Front-end Dev',
        period: '05/09/2023 - 18/12/2023',
        description: 'A human resource management web application with attendance tracking and leave request management.',
        tags: ['Node.js', 'Vite.js', 'Figma', 'Postman'],
        github: 'https://github.com/Luwrng',

    },
]
