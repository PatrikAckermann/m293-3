import "./Home.css";
import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import SideBySide from "../../Components/SideBySide/SideBySide";
import ExploreProjects from "../../Components/ExploreProjects/ExploreProjects";

export default function Home(props) {
    var [input, setInput] = useState("");
    var [warning, setWarning] = useState(null);
    var [input, setInput] = useState("");
    var context = useOutletContext();

    var setText = function(event) {
        setInput(event.target.value);
    }

    var send = function(e) {
        e.preventDefault();
        if (input.length < 100) {
            setWarning("Your message must be at least 100 characters long.");
            return;
        }
        window.location = "mailto:patrik_ackermann@outlook.com?subject=Inquiry&body=" + input;
    }

    return (
        <div className="Home Page">
            <div className="Home-Container Container Home-Title-Container ">
                <h2 className="Home-Title-Title">web design agency</h2>
                <p className="Home-Title-Text">crafting stunning web solutions for your brand.</p>
            </div>
            <SideBySide className={"Home-Container"} invert={false} mobile={context.mobile} left={<h3 className="SideBySide-Item SideBySide-Title">Our <span className="colored">Craft</span></h3>} right={<p className="SideBySide-Item SideBySide-Text">We develop your custom website in a professional tech-stack consisting of cutting edge technology for beautiful front-end and lightning fast back-end products.</p>} />
            <SideBySide className={"Home-Container"} invert={!context.mobile} mobile={context.mobile} left={<h3 className="SideBySide-Item SideBySide-Title">Why <span className="colored">Us</span></h3>} right={<p className="SideBySide-Item SideBySide-Text">By getting a website from us, you support a young team which is aspiring to be successful in the web development world by offering great products.</p>} />
            <ExploreProjects />
            <form className="Home-Contact Home-Container GreyBox Container">
                <h3 className="Home-Contact-Title">Make an <span className="bold">inquiry</span></h3>
                <p className={"Home-Contact-Warning"}>{warning}</p>
                <textarea onChange={setText} value={input} className="Home-Contact-Input" placeholder="Your message here..."></textarea>
                <button onClick={send} className="Home-Contact-Button">Send</button>
            </form>
        </div>
    )
}