export interface NavLink {
    href: string;
    label: string;
}

export const l_navLinks: NavLink[] = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#formation', label: 'Formations' },
    { href: '#contact', label: 'Contact' },
];