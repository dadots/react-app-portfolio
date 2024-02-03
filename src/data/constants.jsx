import orange_apps from '../images/orange-apps.webp'
import paydro from '../images/paydro.webp'
import globe_awards from '../images/globe-awards.webp'
import fortress from '../images/fortress.webp'
import crud from '../images/react-crud-toolkit.webp'
import tenzies from '../images/tenzies.webp'
import msg from '../images/web-messaging-firebase.webp'
import darbot from '../images/darbot.png'
// import ecart from '../images/react-ecart.png'
import datastudio from '../images/datastudio.webp'
import brainwave from '../images/Brainwave Quiz Master.webp'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import react_svg from '../Images/icons/react-svgrepo-com.svg'
import vite_svg from '../Images/icons/vite-svgrepo-com.svg'
import rt_svg from '../Images/icons/redux-svgrepo-com.svg'
import html_svg from '../Images/icons/html-5-svgrepo-com.svg'
import css_svg from '../Images/icons/css-3-svgrepo-com.svg'
import js_svg from '../Images/icons/javascript-svgrepo-com.svg'
import jquery_svg from '../Images/icons/jquery-svgrepo-com.svg'
import bootstrap_svg from '../Images/icons/bootstrap-svgrepo-com.svg'
import material_svg from '../Images/icons/material-ui-svgrepo-com.svg'
import tailwind_svg from '../Images/icons/tailwind-svgrepo-com.svg'

import php_svg from '../Images/icons/php-svgrepo-com.svg'
import ci_svg from '../Images/icons/codeigniter-svgrepo-com.svg'
import laravel_svg from '../Images/icons/laravel-logo-svgrepo-com.svg'
import mysql_svg from '../Images/icons/mysql-logo-svgrepo-com.svg'
import firebase_svg from '../Images/icons/firebase-svgrepo-com.svg'
import nodejs_svg from '../Images/icons/nodejs-svgrepo-com.svg'
import json_svg from '../Images/icons/json2-svgrepo-com.svg'
import swift_svg from '../Images/icons/swift-svgrepo-com.svg'
import obj_svg from '../Images/icons/apple_objectivec-icon.svg'

import git_svg from '../Images/icons/git-svgrepo-com.svg'
import gitkraken_svg from '../Images/icons/gitkraken-svgrepo-com.svg'
import bitbucket_svg from '../Images/icons/bitbucket-svgrepo-com.svg'
import github_svg from '../Images/icons/github-octocat-svgrepo-com.svg'
import vscode_svg from '../Images/icons/vscode3-svgrepo-com.svg'
import phpstorm_svg from '../Images/icons/jb-phpstorm-svgrepo-com.svg'
import postman_svg from '../Images/icons/postman-icon-svgrepo-com.svg'
import trello_svg from '../Images/icons/trello-color-svgrepo-com.svg'
import slack_svg from '../Images/icons/slack-svgrepo-com.svg'
import ds_svg from '../Images/icons/google-data-studio.svg'

// eslint-disable-next-line react-refresh/only-export-components
export const menu = [
    {
        id: 1,
        name: 'Home',
        link: 'home',
        icon: <HomeOutlinedIcon style={{fontSize: '20px'}} />,
        isActive: 'active',
    },
    {
        id: 2,
        name: 'Skills',
        link: 'skills',
        icon: <PsychologyOutlinedIcon style={{fontSize: '20px'}} />,
        isActive: 'active'
    },
    {
        id: 3,
        name: 'Experience',
        link: 'experience',
        icon: <ArticleOutlinedIcon style={{fontSize: '20px'}} />,
        isActive: 'active'
    },
    {
        id: 4,
        name: 'Projects',
        link: 'projects',
        icon: <HomeRepairServiceOutlinedIcon style={{fontSize: '20px'}}/>,
        isActive: 'active'
    },
]

export const Bio = {
    name: "Darius Paul Bacate",
    roles: [
        "Full Stack Developer",
        "Web Developer",
        // "UI/UX Designer",
        "Programmer",
    ],
    description:
        "A motivated and a versatile individual, always eager to take on new challenges. A positive attitude and a growth mindset, Always ready excited to learn new just to achieve great things.",
    github: "https://github.com/What-a-tops",
    resume:
        "https://drive.google.com/file/d/1WE964I4tK827KtXLR-bKbGGm4roLVo5Q/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/darius-paul-bacate-03805813a/",
    facebook: "https://www.facebook.com/iezbay",
};

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React Js",
                image: react_svg
            },
            {
                name: "Vite",
                image: vite_svg
            },
            {
                name: "Redux Toolkit",
                image: rt_svg
            },
            {
                name: "HTML 5",
                image: html_svg
            },
            {
                name: "CSS 3",
                image: css_svg
            },
            {
                name: "JavaScript",
                image: js_svg
            },
            {
                name: "JQuery",
                image: jquery_svg
            },
            {
                name: "Bootstrap",
                image: bootstrap_svg
            },
            {
                name: "Material UI",
                image: material_svg
            },
            {
                name: "Tailwind",
                image: tailwind_svg
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "PHP",
                image: php_svg
            },
            {
                name: "Codeigniter",
                image: ci_svg
            },
            {
                name: "Laravel",
                image: laravel_svg
            },
            {
                name: "MySQL",
                image: mysql_svg
            },
            {
                name: "Firebase",
                image: firebase_svg
            },
            {
                name: "NodeJS",
                image: nodejs_svg
            },
            {
                name: "JsonServer",
                image: json_svg
            },
        ],
    },
    {
        title: "Mobile (IOS)",
        skills: [
            {
                name: "Swift",
                image: swift_svg
            },
            {
                name: "Objective C",
                image: obj_svg
            },
        ],
    },
    {
        title: "Others",
        skills: [
            {
                name: "Git",
                image: git_svg
            },
            {
                name: "Git Kraken",
                image: gitkraken_svg
            },
            {
                name: "Bitbucket",
                image: bitbucket_svg
            },
            {
                name: "GitHub",
                image: github_svg
            },
            {
                name: "VS Code",
                image: vscode_svg
            },
            {
                name: "PHP Storm",
                image: phpstorm_svg
            },
            {
                name: "Postman",
                image: postman_svg
            },
            {
                name: "Data Studio",
                image: ds_svg
            },
            {
                name: "Trello",
                image: trello_svg
            },
            {
                name: "Slack",
                image: slack_svg
            },
        ],
    },
];

// eslint-disable-next-line react-refresh/only-export-components
export const experiences = [
    {
        id: 0,
        img: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-logo-768x768?qlt=85&wid=1200&ts=1689116843273&$auto-png-alpha$&fit=constrain&dpr=off",
        role: "Full-Stack Developer",
        company: "Accenture Inc.",
        date: "Nov 2022 - Present",
        desc: "Working on the frontend of the web application using ReactJS, Redux, and Tailwind.",
        skills: [
            "React JS",
            "Azure",
            "AWS",
            "PHP",
            "JavaScript",
            "Redux Tookit",
            "MySQL",
            "Node Js",
            "Next Js",
            "PostMan",
            "Tailwind"
        ],
    },
    {
        id: 0,
        img: "https://e7.pngegg.com/pngimages/66/112/png-clipart-globe-telecom-other-telecommunications-cebu-mobile-phones-globe-telecoms-logo-globe-text.png",
        role: "Full-Stack Developer",
        company: "Globe Telecom Inc.",
        date: "September 2019 - November 2022",
        desc: "Working on automation tool, managing databases, provide chart reports, and storing of files freely with secured interface.",
        skills: [
            "PHP",
            "Codeigniter",
            "Nginx",
            "NodeJS",
            "Bootstrap",
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL",
            "BitBucket",
            "PostMan",
            "Data Studio"
        ],
        doc: globe_awards,
    },
    {
        id: 1,
        img: "data:image/png;base64,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",
        role: "Mobile Developer (IOS)",
        company: "OVP Technologies Inc.",
        date: "March 2019 - June 2019",
        desc: "Develop a student monitoring system that display charts with notification.",
        skills: [
            "Swift",
            "Objective C",
            "PostMan",
            "Github"
        ],
        doc: paydro,
    },
    {
        id: 2,
        img: "data:image/png;base64,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",
        role: "Web Developer ",
        company: "Orange Apps Inc.",
        date: "November 2016 - March 2019",
        desc: "Develop a student learning management system (LMS) by contributing and managing system that enables students to create a social interaction within school app.",
        skills: [
            "PHP",
            "Codeigniter",
            "Bootstrap",
            "NodeJS",
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase",
            "MySQL",
            "GitHub",
            "PostMan"
        ],
        doc: orange_apps,

    }
];


export const projects = [
    {
        id: 3,
        title: "Brainwave Quiz Master",
        date: "June 2015 - Feb 2016",
        description:
            "My Thesis Project wherein it is browser based game that enables player competes each other with categories for easy, medium and hard. It is the most interesting game based on realtime functions where the players prompts the buzzer enables to answer the question with ranking up basis based on the questions answered.",
        image: brainwave,
        tags: ["PHP", "MVC", "OOP", "CSS", "MYSQL", "Materialized CSS"],
        category: "web app",
        github: "https://github.com/What-a-tops/brainwave",
        webapp: ""
    },
    {
        id: 9,
        title: "Fortress",
        date: "Sep 2019 - Present",
        description:
            "A website that unifies all database to every departments, it enables to access via account that provides a user friendly interface that displays chart reports, automated computation of datas and dumping and storing of files.",
        image: fortress,
        tags: [
            "PHP",
            "Codeigniter",
            "Nginx",
            "JavasScript",
            "JQuery",
            "Chart JS",
            "FullCalendar JS",
            "MySQL",
            "Node Js",
            "Bit Bucket",
            "GitKraken",
            "Google Email Login"
        ],
        category: "web app",
        github: "",
        webapp: "https://docs.google.com/presentation/d/1jWMntWIKQ_N0aCt7C-9z31_4szewIBVF/edit?usp=sharing&ouid=109611579478848088730&rtpof=true&sd=true",
    },
    {
        id: 10,
        title: "Bagyong Odette Monitoring Dashboard",
        date: "Jan 2021 - Mar 2021",
        description:
            "A dashboard that monitors the numbers of affected cell sites within Cebu. The purposes of this task is to identify the damages and possible restorations upon assessed onsite.",
        image: datastudio,
        tags: [
            "Data Studio",
            "Spreadsheet",
            "MySQL",
            "Google Email Login"
        ],
        category: "web app",
        github: "",
        webapp: "",
    },
    {
        id: 0,
        title: "Tenzies",
        date: "Jan 2023 - Feb 2023",
        description:
            "A simple game created from React.",
        image: tenzies,
        tags: ["React Js" , "CSS" , "ES6"],
        category: "web app",
        github: "https://github.com/What-a-tops/react-tenzies-game",
        webapp: "https://64f1a990e5326045a42093b6--bejewelled-kleicha-4f81d2.netlify.app/",

    },
    {
        id: 1,
        title: "React CRUD",
        date: "Feb 2023 - Mar 2023",
        description:
            "An simple create update and delete wherein it is save through JSON-server as backend.",
        image: crud,
        tags: [
            "React Js",
            "Vite",
            "Json Server",
            "Node Js",
            "Redux Toolkit",
            "Tailwind",
            "HeroIcons"
        ],
        category: "web app",
        github: "https://github.com/What-a-tops/vite-redux-json",
        webapp: "https://what-a-tops.github.io/vite-redux-json/",
    },
    {
        id: 2,
        title: "Message Web App",
        date: "April 2023 - May 2023",
        description:
            "A simple messaging app that it is realtime through Firebase with realtime chats between user accounts.",
        image: msg,
        tags: ["React", "Vite", "MUI", "Firebase"],
        category: "web app",
        github: "https://github.com/What-a-tops/react-firebase-chat",
        webapp: "https://main--ornate-kleicha-79f9ba.netlify.app/",

    },
    {
        id: 3,
        title: "DarBot",
        date: "Jan 2023",
        description:
            "A simple Chatbot created in vite - react support by the library of React-Chatbot-Kit.",
        image: darbot,
        tags: ["React", "Vite", "CSS", "ES6", "React Chabot-Kit"],
        category: "web app",
        github: "https://github.com/What-a-tops/darbot",
        webapp: "https://precious-cassata-8d3fdb.netlify.app/"
    },
    // {
    //     id: 3,
    //     title: "ECart",
    //     date: "Dec 2021 - Apr 2022",
    //     description:
    //         "A simple ecommerce app that displays the products with actions of adding and removing by items.",
    //     image: ecart,
    //     tags: ["React", "Vite", "CSS", "ES6"],
    //     category: "web app",
    //     github: "https://github.com/What-a-tops/react-ecart",
    //     webapp: "https://main--unique-biscochitos-97cf49.netlify.app/"
    // },
];
