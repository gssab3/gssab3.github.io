import githubIcon from '../assets/github-sign.png'
import linkedinIcon from '../assets/linkedin.png'
import emailIcon from '../assets/email.png'
import locationIcon from '../assets/location-pin.png'
import profileImage from '../assets/1761393393074.jpg'

const profile = {
    name: "Giuseppe Sabetta",
    label: "Software Engineer & Requirements Analyst",
    image: profileImage,
    location: {
        location: "Italy",
        icon: locationIcon
    },
    social : [
        {
            name: "GitHub",
            url: "https://github.com/gssab3",
            icon: githubIcon
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/giuseppesabetta/",
            icon: linkedinIcon
        },
        {
            name: "Mail",
            url: "mailto:email@example.com",
            icon: emailIcon
        }
    ]
}

{/*
    type: CourseProject | PersonalProject | ThesisProject
    */}
const projects = [
    {
        name: "UniClass",
        description: "UniClass is a system designed to streamline the management of university courses, enhancing both administrative efficiency and student experience. It offers a comprehensive suite of tools for course scheduling, enrollment, and communication between faculty and students. UniClass is built for being presented for academic use and is open-source, specifically for Software Engineering course and Software Dependability course.",
        link: "https://github.com/gssab3/UniClass",
        technologies: "Jakarta, Javascript, HTML, CSS, PostgreSQL, Docker, LaTeX",
        dateStarted: "2024-10-13",
        dateEnded: "Present",
        type: "CourseProject"
    },
    {
        name: "AIMm",
        description: "AIMm is a project that aims to comprehensively balance online video game matches, ensuring a proactive, progressive and enjoyable experience for all types of users, from beginners to experts. The idea for this project arose from the ineffectiveness of many balancing systems on the internet or from excessive balancing which, with large amounts of data, tends to make people play with their “mirror image”, resulting in static games that lack evolution, as they are full of users with the same identical skills. AIMm provides a balance that is neither too low nor too high, ensuring that matches remain dynamic.",
        link: "https://github.com/gssab3/AIMm",
        technologies: "Python - Jupyter Notebook",
        dateStarted: "2025-02-6",
        dateEnded: "2025-06-11",
        type: "CourseProject"
    },
    {
        name: "llm_for_vulnerability",
        description: "This thesis project uses Retrieval-Augmented Generation (RAG) to produce precise security requirements for softwares. It leverages a defined Problem Statement to guide the generation process, ensuring requirements address specific security needs systematically. By combining authoritative sources with RAG, the project delivers clear, traceable, and actionable security measures tailored to the application's context.",
        link: "https://github.com/gssab3/llm_for_vulnerability",
        technologies: "Python",
        dateStarted: "2025-09-22",
        dateEnded: "Present",
        type: "ThesisProject"
    },
    {
        name: "DND4School",
        description: "DND4School non è altro che un progetto che mira a migliorare l'interazione interpersonale in ambienti didattici, scoprendo la creatività, pensiero critico e personalità degli studenti in un mondo dove il pensiero critico sta svanendo. Può sembrare banale ma è proprio la creatività che stimola il cervello e sono fermamente convinto che giochi di ruolo basati sui puzzle, scoperte o tesori siano il massimo.",
        link: "https://github.com/gssab3/DND4School",
        technologies: "To Define",
        dateStarted: "To Define",
        dateEnded: "To Define",
        type: "PersonalProject"
    }
]

export { profile, projects };