// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
//instantiate elements
    const header = document.createElement("div")
    header.classList.add("header")

    const date = document.createElement("span")
    date.classList.add("date")
    date.innerText = "MARCH 28, 2020"

    const title = document.createElement("h1")
    title.innerText = "Lambda Times"

    const temp = document.createElement("span")
    temp.classList.add("temp")
    temp.innerText = "98°"

//formulate header hierarchy
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

//append to document
    const hContainer = document.querySelector(".header-container")
    hContainer.appendChild(header)
}

Header()