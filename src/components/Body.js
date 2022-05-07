function Storie(props) {
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

function Post(props) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userImage} />
                    {props.user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postImage} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.commentImage} />
                    <div className="texto">
                        Curtido por <strong>{props.comment}</strong> e <strong>outras {props.number} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function Corpo() {
    const stories = [
        {
            image: "assets/img/9gag.svg",
            user: "9gag"
        },
        {
            image: "assets/img/meowed.svg",
            user: "meowed"
        },
        {
            image: "assets/img/barked.svg",
            user: "barked"
        },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg",
            user: "nathanwpylestrangeplanet"
        },
        {
            image: "assets/img/wawawicomics.svg",
            user: "wawawicomics"
        },
        {
            image: "assets/img/respondeai.svg",
            user: "respondeai"
        },
        {
            image: "assets/img/filomoderna.svg",
            user: "filomoderna"
        },
        {
            image: "assets/img/memeriagourmet.svg",
            user: "memeriagourmet"
        }
    ];

    const posts = [
        {}
    ];

    return (
        <div className="corpo">
            <div className="esquerda">

                <div className="stories">
                    {stories.map(s => <Storie image={s.image} user={s.user} />)}
                    
                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
            
                
                <div className="posts">
                    <Post userImage="assets/img/meowed.svg" user="meowed" postImage="assets/img/gato-telefone.svg" commentImage="assets/img/respondeai.svg" comment="respondeai" number="101.523" />

                    <Post userImage="assets/img/barked.svg" user="barked" postImage="assets/img/dog.svg" commentImage="assets/img/adorable_animals.svg" comment="adorable_animals" number="99.159" />
                </div>
            </div>
            
            <div className="sidebar">
                <div className="usuario">
                    <img src="assets/img/catanacomics.svg" />
                    <div className="texto">
                    <strong>catanacomics</strong>
                    Catana
                    </div>
                </div>

                <div className="sugestoes">
                    <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                    </div>

                    <div className="sugestao">
                    <div className="usuario">
                        <img src="assets/img/bad.vibes.memes.svg" />
                        <div className="texto">
                        <div className="nome">bad.vibes.memes</div>
                        <div className="razao">Segue você</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                    <div className="usuario">
                        <img src="assets/img/chibirdart.svg" />
                        <div className="texto">
                        <div className="nome">chibirdart</div>
                        <div className="razao">Segue você</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                    <div className="usuario">
                        <img src="assets/img/razoesparaacreditar.svg" />
                        <div className="texto">
                        <div className="nome">razoesparaacreditar</div>
                        <div className="razao">Novo no Instagram</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                    <div className="usuario">
                        <img src="assets/img/adorable_animals.svg" />
                        <div className="texto">
                        <div className="nome">adorable_animals</div>
                        <div className="razao">Segue você</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                    <div className="usuario">
                        <img src="assets/img/smallcutecats.svg" />
                        <div className="texto">
                        <div className="nome">smallcutecats</div>
                        <div className="razao">Segue você</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                    </div>
                </div>

                <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}