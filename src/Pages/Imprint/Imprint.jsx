import "./Imprint.css";

export default function Imprint() {
    return <div className="Imprint Page">
        <h2 className="Imprint-Title">imprint</h2>
        <div className="Imprint-Text-Container">
            <p className="Imprint-Text">ackermann web design AG</p>
            <p className="Imprint-Text">Examplestreet 123</p>
            <p className="Imprint-Text">4500 Solothurn</p>
            <p className="Imprint-Text">Email: <a className="Link" href="mailto:contact@example.com">contact@example.com</a></p>
        </div>
    </div>
}