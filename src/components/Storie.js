export default function Storie(props) {
    return (
    <div className="story">
        <div className="imagem">
            <img src={props.image} alt="" />
        </div>
        <div className="usuario">
            {props.user}
        </div>
    </div>
    );
}