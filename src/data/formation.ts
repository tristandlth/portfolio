export interface formation {
    id: string;
    date: string;
    title: string;
    school: string;
    description?: string;
    l_skills?: string[];
    current?: boolean;
}

export const l_formations: formation[] = [
    {
        id: 'master-dev',
        date: '2025 - 2027',
        title: 'Master MIAGE',
        school: 'Université Toulouse Capitole',
        l_skills: [
            'Systèmes d’information',
            'Architecture logicielle',
            'Développement applicatif',
            'Bases de données avancées',
            'DevOps',
            'Gestion de projet',
            'Méthodes agiles'
        ],
        current: false,
    },
    {
        id: 'but-info',
        date: '2022 - 2025',
        title: 'BUT Informatique',
        school: 'IUT de Blagnac',
        l_skills: [
            'Algorithmique',
            'Programmation orientée objet',
            'Java',
            'SQL',
            'Bases de données',
            'Réseaux',
            'Développement web'
        ],
    },
    {
        id: 'certification-maui',
        date: 'Octobre 2024',
        title: 'Formation .NET MAUI',
        school: 'Themanis',
        l_skills: [
            '.NET',
            'C#',
            '.NET MAUI',
            'Développement mobile',
            'Applications multiplateformes',
            'MVVM'
        ],
    },
    {
        id: 'bac',
        date: '2022',
        title: 'Baccalauréat STI2D',
        school: 'Lycée Antoine Bourdelle',
        l_skills: [
            'Mathématiques',
            'Physique',
            'Sciences de l’ingénieur',
            'Innovation technologique',
            'I2D'
        ],
    },
];