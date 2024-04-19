export interface GlobalInterface {
    resume: string;
    "check-repo": string;
    "check-website": string;
    fr: string;
    en: string;
    close: string;
};

export interface NavItemInterface {
    icon: string;
    text: string;
};

export interface NavbarInterface {
    "nav-items": NavItemInterface[];
};

export interface WorkExperience {
    year: number;
    name: string;
    institution: string;
    date: string;
    address: string;
    website: string;
    description: string;
    bullets: string[];
};

export interface EducationInterface {
    year: number;
    name: string;
    institution: string;
    date: string;
    address: string;
    website: string;
    description: string;
    bullets: string[];
};

export interface HackathonInterface {
    year: number;
    name: string;
    institution: string;
    date: string;
    address: string;
    website: string;
    description: string;
    bullets: string[];
};

export interface ResumeInterface {
    title: string;
    work_experience: {
        title: string;
        work: WorkExperience[];
    };
    education: {
        title: string;
        edu: EducationInterface[];
    };
    hackathons: {
        title: string;
        hacks: HackathonInterface[];
    };
};

export interface Skill {
    name: string;
    icon: string;
    color: string;
};

export interface SkillsCategoriesInterface { 
    name: string; 
    key: string;
}

export interface SkillsInterface {
    title: string;
    description: string;
    glimpse: string;
    categories: SkillsCategoriesInterface[];
    skills: { [key: string]: Skill[] };
};

export interface PortfolioCategory {
    name: string;
    key: string;
};

export interface PortfolioWorkInterface {
    title: string;
    description: string;
    tools: { title: string; tools: string[] };
    img: string;
    github: string;
    website: string;
};

export interface PortfolioInterface {
    title: string;
    description: string;
    categories: PortfolioCategory[];
    works: { [key: string]: PortfolioWorkInterface[] };
};

export interface SocialContact {
    name: string;
    icon: string;
    value: string;
    url?: string;
};

export interface ContactInterface {
    title: string;
    description: string;
    socials: SocialContact[];
};

export interface LocaleInterface {
    Global: GlobalInterface;
    Navbar: NavbarInterface;
    Home: { [key: string]: string };
    Resume: ResumeInterface;
    Skills: SkillsInterface;
    Portfolio: PortfolioInterface;
    Contact: ContactInterface;
};