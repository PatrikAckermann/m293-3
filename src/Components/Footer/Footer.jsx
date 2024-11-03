import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    var navigate = useNavigate();

    function click() {
        navigate("/imprint");
    }

    return (
        <div className="Footer FullWidth">
            <p className="Footer-Text">© {new Date().getFullYear()} - ackermann web design</p>
            <a onClick={click} className="Footer-Text Footer-Link">imprint</a>
        </div>
    )
}