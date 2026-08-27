interface SkillCardProps {
    title: string
    description: string
}

const categoryIcons: Record<string, string> = {
    Frontend: 'devicon-html5-plain colored',
    'Backend & Data': 'devicon-nodejs-plain colored',
    Tools: 'devicon-git-plain colored',
}

const skillIcons: Record<string, string> = {
    React: 'devicon-react-original colored',
    'Next.js': 'devicon-nextjs-plain colored',
    'Vue.js': 'devicon-vuejs-plain colored',
    Redux: 'devicon-redux-original colored',
    Vite: 'devicon-vitejs-plain colored',
    'Tailwind CSS': 'devicon-tailwindcss-original colored',
    Bootstrap: 'devicon-bootstrap-plain colored',
    'Ant Design': 'devicon-antdesign-plain colored',
    Mantine: 'devicon-mantine-original colored',
    MUI: 'devicon-materialui-plain colored',

    'Node.js': 'devicon-nodejs-plain colored',
    'Express.js': 'devicon-express-original colored',
    Java: 'devicon-java-plain colored',
    'Spring Boot': 'devicon-spring-original colored',

    PostgreSQL: 'devicon-postgresql-plain colored',
    'SQL Server': 'devicon-microsoftsqlserver-plain colored',
    MySQL: 'devicon-mysql-original colored',
    MongoDB: 'devicon-mongodb-plain colored',

    Firebase: 'devicon-firebase-plain colored',
    'Realtime Database': 'devicon-firebase-plain colored',
    'Firebase Realtime Database': 'devicon-firebase-plain colored',

    JavaScript: 'devicon-javascript-plain colored',
    TypeScript: 'devicon-typescript-plain colored',

    Git: 'devicon-git-plain colored',
    GitHub: 'devicon-github-original colored',
    Docker: 'devicon-docker-plain colored',

    'RESTful API': 'devicon-nodejs-plain colored',
    Swagger: 'devicon-swagger-plain colored',
    Figma: 'devicon-figma-plain colored',
    Postman: 'devicon-postman-plain colored',
    Cloudinary: 'devicon-cloudinary-plain colored',
}

const lightBackgroundSkills = new Set([
    'Next.js',
    'Mantine',
    'Cloudinary',
    'Firebase Realtime Database',
])

const skillIconSources: Record<string, string> = {
    Mantine: 'https://cdn.simpleicons.org/mantine/151816',
    Cloudinary: 'https://cdn.simpleicons.org/cloudinary/151816',
}

function getSkillParts(skill: string) {
    return skill
        .split(' / ')
        .map((part) => (part === 'React.js' ? 'React' : part))
}

export function SkillCard({
    title,
    description,
}: SkillCardProps) {
    return (
        <div
            className="skill-row"
            tabIndex={0}
        >
            <span
                className="skill-row-icon"
                tabIndex={0}
                title={title}
                aria-label={title}
            >
                <i
                    className={categoryIcons[title]}
                    aria-hidden="true"
                />

                <b>{title}</b>
            </span>

            <span className="skill-details">
                {description
                    .split('\n')
                    .flatMap(getSkillParts)
                    .map((skill) => (
                        <span
                            key={skill}
                            className={`${lightBackgroundSkills.has(skill)
                                    ? 'has-light-background '
                                    : ''
                                }${skill === 'Firebase Realtime Database'
                                    ? 'firebase-icon'
                                    : ''
                                }`}
                            title={skill}
                            aria-label={skill}
                        >
                            {skillIconSources[skill] ? (
                                <img
                                    src={skillIconSources[skill]}
                                    alt=""
                                />
                            ) : (
                                <i
                                    className={
                                        skillIcons[skill] ??
                                        'devicon-code-plain'
                                    }
                                    aria-hidden="true"
                                />
                            )}

                            <b>{skill}</b>
                        </span>
                    ))}
            </span>
        </div>
    )
}