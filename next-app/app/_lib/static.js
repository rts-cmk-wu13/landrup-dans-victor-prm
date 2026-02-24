import { FaHome } from "react-icons/fa"
import { FaList } from "react-icons/fa"
import { FaUser } from "react-icons/fa"

export const footerLinks = [
    {
        title: "Forside",
        href: "/",
        icon: FaHome
    },
    {
        title: "Aktiviteter",
        href: "/home/activities",
        icon: FaList
    },
    {
        title: "Profil",
        href: "/home/profile",
        icon: FaUser
    }
]

export const danceClasses = [
    {
        title: "Børnehold",
        description: "På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi. Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer. Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med.",
        img: "boernedans.jpg"
    },
    {
        title: "Selskabs- og seniordans",
        description: "Selskabs- og seniordans kombinerer hyggeligt samvær med skånsom motion. Vi danser klassiske pardanse i et tempo, hvor alle kan følge med. Undervisningen styrker balance, koordination og kondition, samtidig med at fællesskabet og danseglæden er i centrum.",
        img: "seniordans.jpg"
    },
    {
        title: "Moderne dans og ballet",
        description: "Moderne dans og ballet forener teknik, kropskontrol og musikalsk udtryk. Træningen forbedrer styrke, smidighed og holdning gennem varierede øvelser. Undervisningen foregår i en positiv atmosfære, hvor bevægelsesglæde og koncentration skaber både fordybelse og effektiv motion.",
        img: "modernedans.jpg"
    },
    {
        title: "Streetdance og hiphop",
        description: "Streetdance og hiphop er energifyldt træning med fokus på rytme, attitude og fællesskab. Vi arbejder med grooves, koreografier og grundtrin, der styrker kondition og koordination. Stemningen er uformel og motiverende, så motion og danseglæde går hånd i hånd.",
        img: "streethiphop.jpg"
    },
]

export const pageTitles = [
    {
        identifier: "/home/activities",
        title: "Holdoversigt",
    },
    {
        identifier: "/activity",
        title: "Holddetaljer",
    },
    {
        identifier: "/home/profile",
        title: "Profil",
    },
    {
        identifier: "/auth/login",
        title: "Log ind"
    },
    {
        identifier: "/auth/signup",
        title: "Opret Bruger"
    }
]
