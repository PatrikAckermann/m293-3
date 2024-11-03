import "./Project.css";

export default function Project(props) {
    return <div className={"Project"}>
        <img className="Project-Image" src={props.image} alt={props.title} />
        <h3 className="Project-Title">{props.title}</h3>
        <p className="Project-Text">{props.description}</p>
        <table className="Project-Table">
            {props.table.map((row, index) => {
                return <tr key={index} className="Project-Row">
                    <th className="Project-Header">{row[0]}</th>
                    <td className="Project-Data">{row[1]}</td>
                </tr>
            })}
        </table>
    </div>
}