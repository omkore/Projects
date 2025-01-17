let api = "https://official-joke-api.appspot.com/jokes/programming/ten"
let p = document.getElementById("joke")
let button = document.getElementById("btn")
let counter =0;
btn.addEventListener("click",()=>{
   counter++
   fetchJoke()
})
window.addEventListener("load",fetchJoke)


async function fetchJoke(){
    let data = await fetch(api)
    let joke = await data.json()
    console.log(joke);
    p.innerHTML=joke[counter].setup+"<br>"+joke[counter].punchline
}


