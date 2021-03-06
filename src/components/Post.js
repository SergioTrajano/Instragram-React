import React from "react";

export default function Post(props) {
    const [heart, setHeart] = React.useState("heart-outline");
    const [marker, setMarker] = React.useState("bookmark-outline");
    const [color, setColor] = React.useState("initial");

    function Like() {
        setHeart("heart");
        setColor("red");  
    }

    function ToggleLike() {
        heart === "heart" ? setHeart("heart-outline") : setHeart("heart");
        heart === "heart" ? setColor("initial") : setColor("red");
    }

    function Marker() {
        marker === "bookmark" ? setMarker("bookmark-outline") : setMarker("bookmark");
    }

    return (
    <div className="post">
        <div className="topo">
            <div className="usuario">
                <img src={props.userImage} alt="" />
                {props.user}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img src={props.postImage} alt="" onDoubleClick={Like}/>
        </div>

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon style={{color: color}} name={heart} onClick={ToggleLike}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name={marker} onClick={Marker}></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={props.commentImage} alt=""/>
                <div className="texto">
                    Curtido por <strong>{props.comment}</strong> e <strong>outras {props.number} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    );
}