import React from "react"


function Post(props) {
    const [heart, setHeart] = React.useState("heart-outline")

    // no map dps do => não pode usar {}, tem q usar nada ou ()

    return (
        <div class="post">
            <PostHeader {...props} />

            <PostContent {...props} heart={heart} setHeart={setHeart} />

            <PostFooter {...props} heart={heart} setHeart={setHeart} />
        </div>
    )
}

function PostHeader(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.HeaderImage} />
                {props.HeaderUser}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function PostContent(props) {

    function toggleLike() {
        if (props.heart === "heart-outline") {
            props.setHeart("heart");
        } else {
            props.setHeart("heart-outline");
        }
    }

    return (
        <div class="conteudo"  onDoubleClick={toggleLike}  >
            <img src={props.ContentImage} />
        </div>
    )
}

function PostFooter(props) {

    function toggleLike() {
        if (props.heart === "heart-outline") {
            props.setHeart("heart");
        } else {
            props.setHeart("heart-outline");
        }
    }

    return (
        <div class="fundo">
            <div class="acoes" >
                <div >
                    <ion-icon  name={props.heart} onClick={toggleLike} >
                    </ion-icon>
                    <ion-icon name="chatbubble-outline" ></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.LikesImage} />
                <div class="texto">
                    Curtido por <strong>{props.LikesUser}</strong> e <strong>outras {props.Numlikes} pessoas</strong>
                </div>
            </div>

        </div>

    )
}

export default Post;