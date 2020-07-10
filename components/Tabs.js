// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

function getTabs(){
//API call -- retrieve data
    const url = "https://lambda-times-backend.herokuapp.com/topics"
    axios.get(url)
    .then(function(response) {
        const topicList = response.data.topics
        topicList.forEach(topic => {
           const htmlTopic =  tabArchitect(topic) //build out tab structure for each topic

            const entryPoint = document.querySelector(".topics")    //declare entrypoint 
            entryPoint.appendChild(htmlTopic)

        })
    }).catch(error => 
        console.log(error)
    )
}

getTabs()

function tabArchitect(topic){
    //instantiate new div with tab class and dynamically retreived inner-text 
        const tab = document.createElement("div")
        tab.classList.add("tab")
        tab.innerText = topic

        tab.addEventListener("click", function(){
            const articleList = Array.from(document.querySelectorAll(".card"))
            articleList.forEach(article =>{
                let classes = article.classList
                let result = classes.contains(tab.innerText.toLocaleLowerCase())
                if (result === false){
                    article.style.display = "none"
                } else {
                    article.style.display = "block"
                }
            })
        })

        return tab
}