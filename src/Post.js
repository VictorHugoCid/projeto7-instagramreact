import React from "react"


function Post() {

    let arrayPost = [{
        HeaderImage: "assets/img/meowed.svg",
        HeaderUser: "meowed",
        ContentImage: "assets/img/gato-telefone.svg",
        LikesImage: "assets/img/respondeai.svg",
        NumLikes: 13.000,
        LikesUser: "respondeai"
    }, {
        HeaderImage: "assets/img/barked.svg",
        HedaerUser: "barked",
        ContentImage: "assets/img/dog.svg",
        LikesImage: "assets/img/adorable_animals.svg",
        NumLikes: 101.523,
        LikesUser: "adorable_animals"
    }
    ]

    // no map dps do => {postnão pode usar {}, tem q usar nada ou ()
    const post = arrayPost.map(post => (
        <div class="post">
            <PostHeader image={post.HeaderImage} user={post.HeaderUser}
            />
            <PostContent
                contentImage={post.ContentImage}
            />
            <PostFooter
                LikesUser={post.LikesUser}
                LikesImage={post.LikesImage}
            />
        </div>)
    )

    return (
        <div class="posts">
            {post}
        </div>
    )
}

function PostHeader(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.image} />
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function PostContent(props) {
    return (
        <div class="conteudo">
            <img src={props.contentImage} />
        </div>
    )
}

function PostFooter(props) {
    /* function likezin() {
        if (contador === ""){
            setLikeColor("like")
        }else{
            setLikeColor("")
        }
        
    } */

    const [likeColor, setLikeColor] = React.useState("like")
    const [heartColor , setHeartColor] = React.useState("heart")

    return (
        <div class="fundo">
            <div class="acoes" >
                <div >
                    <ion-icon class={likeColor} name={heartColor} onClick={() => {
                        setLikeColor("like");
                        setHeartColor("heart");
                    }}> 
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

/* function Actions() {
    return (
        
    )
}

function Likes(props) {
    return (
        
    )
} */

export default Post;