import "./SideBySide.css";

export default function SideBySide(props) {
    return (<div className={"SideBySide-Container Container " + (props.className ?? "")}>
        {!props.invert ? props.left : props.right}
        {!props.invert ? props.right : props.left}
</div>)
}