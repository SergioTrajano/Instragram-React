import User from "./User";
import Suggestion from "./Suggestion";

export default function Sidebar() {
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
    ];

    return (
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
    );
}