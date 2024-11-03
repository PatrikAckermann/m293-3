import Project from "../../Components/Project/Project";
import "./Projects.css";
import { useEffect, useState } from "react";

var projects = [
    {
        title: "Project 1",
        description: "This is the first project",
        image: "https://www.wordstream.com/wp-content/uploads/2022/07/website-examples-feature.jpg",
        table: [
            ["Year", "2021"],
            ["Client", "Client 1"],
            ["Tech", "React, Node.js, MongoDB"]
        ]
    },
    {
        title: "Project 2",
        description: "This is the second project",
        image: "https://i0.wp.com/pediaa.com/wp-content/uploads/2019/02/Difference-Between-Landing-Page-and-Website.jpg?fit=1200%2C696&ssl=1",
        table: [
            ["Year", "2020"],
            ["Client", "Client 2"],
            ["Tech", "React, Node.js, MongoDB"]
        ]
    },
    {
        title: "Project 3",
        description: "This is the third project",
        image: "https://t3.ftcdn.net/jpg/01/05/89/34/360_F_105893434_cRc486XaP12mz8dh9tAV9kFJ6l9xuXSM.jpg",
        table: [
            ["Year", "2019"],
            ["Client", "Client 3"],
            ["Tech", "React, Node.js, MongoDB"]
        ]
    },
    {
        title: "Project 4",
        description: "This is the fourth project",
        image: "https://www.itseeze-stevenage.co.uk/_webedit/cached-images/510.png",
        table: [
            ["Year", "2018"],
            ["Client", "Client 4"],
            ["Tech", "React, Node.js, MongoDB"]
        ]
    }
]

export default function Projects() {
    var [index, setIndex] = useState(0);

    function slideTo() {
        console.log("slideTo", index);
        var elem = document.getElementById("Projects-Slider")
        if (elem) {
            console.log("scrollLeft", index * elem.clientWidth);
            elem.scroll({ left: index * elem.clientWidth, behavior: "smooth" });
        }
    }

    function next() {
        if (index < projects.length - 1) {
            setIndex(x => x + 1);
        } else {
            setIndex(0);
        }
    }

    function previous() {
        if (index > 0) {
            setIndex(x => x - 1);
        } else {
            setIndex(projects.length - 1);
        }
    }

    useEffect(() => {
        slideTo();
    }, [index]);

    return <div className="Projects Page">
        <h2 className="Projects-Title">projects</h2>
        <div className="Projects-Container">
            <button onClick={previous} className="Projects-Button">{"<"}</button>
            <div className="Projects-Slider" id="Projects-Slider">
                {projects.map((project, index) => {
                    return <Project key={index} title={project.title} description={project.description} table={project.table} image={project.image}/>
                })}
            </div>
            <button onClick={next} className="Projects-Button">{">"}</button>
        </div>
    </div>
}