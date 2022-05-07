import Storie from "./Storie";
import Post from "./Post";
import User from "./User";
import Suggestion from "./Suggestion";

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
        {
            userImage: "assets/img/meowed.svg",
            user: "meowed",
            postImage: "assets/img/gato-telefone.svg",
            commentImage: "assets/img/respondeai.svg",
            comment: "respondeai",
            number: "101.523"
        },
        {
            userImage: "assets/img/barked.svg",
            user: "barked",
            postImage: "assets/img/dog.svg",
            commentImage: "assets/img/adorable_animals.svg",
            comment: "adorable_animals",
            number: "99.159"
        }
    ];

    const suggestions = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            user: "bad.vibes.memes"
        },
        {
            image: "assets/img/chibirdart.svg",
            user: "chibirdart"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar"
        },
        {
            image: "assets/img/adorable_animals.svg",
            user: "adorable_animals"
        },
        {
            image: "assets/img/smallcutecats.svg",
            user: "smallcutecats"
        }
    ]

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

                    {posts.map(p => <Post userImage={p.userImage} user={p.user} postImage={p.postImage} commentImage={p.commentImage} comment={p.comment} number={p.number} />)}

                </div>
            </div>
            
            <div className="sidebar">
                <User image="assets/img/catanacomics.svg" user="catanacomics" nick="Catana" />

                <div className="sugestoes">
                    <div className="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    {suggestions.map(s => <Suggestion image={s.image} user={s.user} />)}

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