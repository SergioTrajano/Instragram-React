export default function User(props) {
    return (
        <div className="usuario">
            <img src={props.image} />
            <div className="texto">
            <strong>{props.user}</strong>
            {props.nick}
            </div>
        </div>
    );
}