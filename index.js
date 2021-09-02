document.querySelector("button#buttonhere").addEventListener("click", runfuction);

let counter = 0

function runfuction() {
    console.log("works")

    counter = counter + 1;
  
    const myTemplate = document.querySelector("template").content;
    const myCopy = myTemplate.cloneNode(true);

    myCopy.querySelector("h2").textContent = "Your Turn" + counter
    document.querySelector("section").appendChild(myCopy);
}