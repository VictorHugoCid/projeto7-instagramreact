function Sugestion(props) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">{props.userStatus}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default Sugestion;