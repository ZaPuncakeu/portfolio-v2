export interface ExperienceType {
    year: number,
    name: string
    date: string
    address: string
    website: string
    description: string
    institution: string
    bullets: string[]
}

export interface ResumeDataProps {
    mkey: string
    experiences: ExperienceType[]
}
