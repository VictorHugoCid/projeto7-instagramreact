import Post from './Post'



function ContainerPost() {

 /*  let arrayPost = [{
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

// no map dps do => não pode usar {}, tem q usar nada ou ()
const post = arrayPost.map(post => (
    <>
        <PostHeader image={post.HeaderImage} user={post.HeaderUser}
        />
        <PostContent
            contentImage={post.ContentImage}
        />
        <PostFooter
            LikesUser={post.LikesUser}
            LikesImage={post.LikesImage}
        />
    </>)
) */

  return (
    <>
      <Post />
    </>
  )
}

export default ContainerPost;


/* 
<div class="posts">
  <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src="assets/img/meowed.svg" />
        meowed
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src="assets/img/gato-telefone.svg" />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src="assets/img/respondeai.svg" />
        <div class="texto">
          Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
        </div>
      </div>
    </div>
  </div>




  <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src="assets/img/barked.svg" />
        barked
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src="assets/img/dog.svg" />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src="assets/img/adorable_animals.svg" />
        <div class="texto">
          Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
        </div>
      </div>
    </div>
  </div>
</div>
         */