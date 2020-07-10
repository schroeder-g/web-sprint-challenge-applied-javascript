// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

function getArticles(){
const url = "https://lambda-times-backend.herokuapp.com/articles"
axios.get(url)
.then(response => {
    const entryPoint = document.querySelector(".cards-container")
    const topicList = response.data.articles
    for (let topic in topicList){
        let articleList = topicList[topic]

        articleList.forEach(article => {
            const htmlCard = cardArchitect(article)
            htmlCard.classList.add(topic) //for filtering by topic
            entryPoint.appendChild(htmlCard)
        })
    }
    // topicList.forEach(topic => {
    //     console.log(topic)
    // })
    })
.catch(error => {
    console.log(error)
})
}

getArticles()
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardArchitect(article){
//instantiate cards with classes and text
    const card = document.createElement("div")
    card.classList.add("card")

    const headLine = document.createElement("div")
    headLine.classList.add("headline")
    headLine.innerText = article.headline

    const author =document.createElement("div")
    author.classList.add("author")

    const authImgCon = document.createElement("div")
    authImgCon.classList.add("img-container")

    const authImg = document.createElement("img")
    authImg.src = article.authorPhoto

    const authName = document.createElement("span")
    authName.innerText = `By ${article.authorName}`

//compose card el hierarchy
    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(authImgCon)
    authImgCon.appendChild(authImg)
    author.appendChild(authName)

//add card event listener
    card.addEventListener("click", () => console.log(article.headline))

    return card
}
