export default function WayToTaech(props) {
    return (
        <li>
            <p>
                <strong>{props.title}</strong>
                <br></br>
                {props.description}
            </p>
        </li>
    );
}
