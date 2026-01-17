export interface Skill {
    name: string;
    icon: string;
    color: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Profile {
    name: string;
    title: string;
    photoUrl: string;
    available: boolean;
    availableText: string;
    cvUrl: string;
    l_skills: Skill[];
    l_stats: Stat[];
    l_roles: string[];
}

export const skillsData: Record<string, Skill> = {
    // Front-end languages and frameworks
    'Vue.js': { name: 'Vue.js', icon: 'simple-icons:vuedotjs', color: '#4FC08D' },
    'Nuxt': { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs', color: '#00DC82' },
    'React': { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
    'React Native': { name: 'React Native', icon: 'simple-icons:react', color: '#61DAFB' },
    'Astro': { name: 'Astro', icon: 'simple-icons:astro', color: '#BC52EE' },
    'Tailwind': { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
    'D3.js': { name: 'D3.js', icon: 'simple-icons:d3', color: '#F9A03C' },

    // Back-end languages and frameworks
    'TypeScript': { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
    'Python': { name: 'Python', icon: 'simple-icons:python', color: '#3776AB' },
    'Django': { name: 'Django', icon: 'simple-icons:django', color: '#092E20' },
    'FastAPI': { name: 'FastAPI', icon: 'simple-icons:fastapi', color: '#009688' },
    'Node.js': { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#339933' },
    'Java': { name: 'Java', icon: 'fa-brands:java', color: '#ED8B00' },
    'C#': { name: 'C#', icon: 'simple-icons:csharp', color: '#512BD4' },

    // Database and tools
    'PostgreSQL': { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
    'MongoDB': { name: 'MongoDB', icon: 'simple-icons:mongodb', color: '#47A248' },
    'Firebase': { name: 'Firebase', icon: 'simple-icons:firebase', color: '#FFCA28' },
    'Redis': { name: 'Redis', icon: 'simple-icons:redis', color: '#DC382D' },
    'Docker': { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
    'Stripe': { name: 'Stripe', icon: 'simple-icons:stripe', color: '#635BFF' },

    // APIs
    'Notion API': { name: 'Notion API', icon: 'simple-icons:notion', color: '#000000' },
    'Chrome API': { name: 'Chrome API', icon: 'simple-icons:googlechrome', color: '#4285F4' },
    'IndexedDB': { name: 'IndexedDB', icon: 'mdi:database-outline', color: '#C7C7C7' },
};

export const profile: Profile = {
    name: 'Tristan',
    title: 'Développeur Full Stack',
    photoUrl: '/images/photo.png',
    available: true,
    availableText: 'Disponible pour de nouveaux projets',
    cvUrl: '/pdf/CV.pdf',
    l_skills: [
        skillsData['Vue.js'],
        skillsData['Nuxt'],
        skillsData['TypeScript'],
        skillsData['Python'],
        skillsData['Django'],
        skillsData['PostgreSQL'],
        skillsData['Java'],
        skillsData['C#'],
    ],
    l_stats: [
        { value: '2', label: "Années d'expérience" },
        { value: '6', label: 'Projets réalisés' },
        { value: '3', label: 'Projets en cours' },
    ],
    l_roles: [
        'Développeur Full Stack',
        'Développeur Front-end',
        'Développeur Back-end',
    ],
};