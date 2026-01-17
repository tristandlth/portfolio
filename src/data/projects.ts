export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    l_tags: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export const l_projects: Project[] = [
    {
        id: 'inrae-mobile-app',
        title: 'Application mobile .NET MAUI',
        description:
            'Application mobile pour la gestion de données sur des animaux. Utilisation hors connexion avec SQLite et synchronisation avec une base de données centrale PostgreSQL.',
        imageUrl: '/images/projects/maui.png',
        category: 'Web App',
        l_tags: ['.NET Maui', 'C#', 'Gestion de projet', 'SQLite', 'PostgreSQL']
    },
    {
        id: 'animationboxd-app',
        title: 'Animationboxd',
        description:
            'Plateforme communautaire dédiée à l\'animation permettant de découvrir, noter et critiquer films et séries animés.',
        imageUrl: '/images/projects/animationboxd.png',
        category: 'Web App',
        l_tags: ['Django', 'Nuxt', 'Vue.js', 'PostgreSQL', 'API AniList'],
        liveUrl: 'https://animationboxd.com',
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        description:
            'Mon portfolio personnel présentant mes projets, compétences et expériences.',
        imageUrl: '/images/projects/portfolio.png',
        category: 'Web App',
        l_tags: ['Astro', 'TypeScript'],
        liveUrl: 'https://tristandelthil.fr',
    },
];