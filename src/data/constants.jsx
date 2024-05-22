import orange_apps from '../images/work/orange-apps.webp'
import paydro from '../images/work/paydro.webp'
import globe_awards from '../images/work/globe-awards.webp'
import fortress from '../images/projects/fortress.webp'
import crud from '../images/projects/react-crud-toolkit.webp'
import tenzies from '../images/projects/tenzies.webp'
import msg from '../images/projects/web-messaging-firebase.webp'
import darbot from '../images/projects/darbot.png'
// import ecart from '../images/react-ecart.png'
import datastudio from '../images/projects/datastudio.webp'
import brainwave from '../images/projects/Brainwave Quiz Master.webp'

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

import acn from '../Images/work/acn.webp'
import globe from '../Images/work/globe.png'
import oa from '../Images/work/oa.png'

import me from '../Images/me.webp'

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
    picture: me,
    roles: [
        "Full Stack Developer",
        "Web Developer",
        "Programmer",
    ],
    description:
        "Eager and flexible, always up for new challenges. With a positive mindset and a thirst for growth, Always excited to learn and excel.",
    github: "https://github.com/What-a-tops",
    resume:
        "https://drive.google.com/file/d/1AHRd8DlB6pnwULOYwOfSYIe7C-y5eePZ/view?usp=sharing",
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
        img: acn,
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
        img: globe,
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
        img: oa,
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
        img: oa,
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
        date: "Jan 2024",
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
