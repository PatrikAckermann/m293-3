import "./TextElement.css";

export default function TextElement(props) {
    return <div className={"TextElement" + props.className}>
        <h3 className="TextElement-Title">{props.title}</h3>
        <p className="TextElement-Text">{props.text}</p>
    </div>
}