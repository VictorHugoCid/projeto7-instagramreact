import Sugestion from './Sugestion'

function Sidebar() {
    let arraySugestions = [{
        image: "assets/img/bad.vibes.memes.svg", 
        user: "bad.vibes.memes",
        userStatus:"Segue você<"
    },{
        image: "assets/img/chibirdart.svg", 
        user: "chibirdart",
        userStatus:"Segue você<"
    },{
        image: "assets/img/razoesparaacreditar.svg", 
        user: "razoesparaacreditar",
        userStatus:"Novo no Instagram<"
    },{
        image: "assets/img/adorable_animals.svg", 
        user: "adorable_animals",
        userStatus:"Segue você<"
    },{
        image: "assets/img/smallcutecats.svg", 
        user: "smallcutecats",
        userStatus:"Segue você<"
    },
    ]

    /* let bolinha = arraySugestions.map(sugestion => <Sugestion image ={sugestion.image} user = {sugestion.user} userStatus ={sugestion.userStatus}/>) */

    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {arraySugestions.map(sugestion => <Sugestion image ={sugestion.image} user = {sugestion.user} userStatus ={sugestion.userStatus}/>)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export default Sidebar;