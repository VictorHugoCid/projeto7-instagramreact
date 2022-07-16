import Story from './Story'

function ContainerStory() {

    const arrayStory = [{
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
    ]

    /* let newStory = arrayStory.map(story => <Story image = {story.image} user ={story.user}/>) */

    return (
        <div class="stories">
            {/* <Story
                image="assets/img/9gag.svg"

                user="9gag"
            /> */}
            {arrayStory.map(story => <Story image = {story.image} user ={story.user}/>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

export default ContainerStory;