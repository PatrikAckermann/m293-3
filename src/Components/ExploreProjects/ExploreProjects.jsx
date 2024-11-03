import "./ExploreProjects.css";
import { Link } from "react-router-dom";

export default function ExploreProjects(props) {
    return <div className={"Explore GreyBox Container "}>
                <h3 className="Explore-Title"><span className="bold">Explore</span> our projects</h3>
                <Link to="/projects" className="Explore-Button">></Link>
            </div>
            }