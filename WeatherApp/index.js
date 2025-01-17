let btn = document.getElementById("Search-btn")
console.log(btn);
let apiKey = "264e379f1ded7d2882f6a3b2f55dfcf2";
let city_name=document.getElementById("city_name")
let img=document.getElementById("img")
let temp=document.getElementById("temp")
let wind=document.getElementById("wind")
let humidity=document.getElementById("humidity")
let cords=document.getElementById("cords")

let city;
async function getdata(){
     city = document.getElementById("input").value
    console.log(city);
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    console.log(res);
    
    let data = await res.json();
    
    console.log(data);

    
    
    city_name.innerText=data.name+", "+data.sys.country
    temp.innerText=data.main.temp+"°C"
    wind.innerText=data.wind.speed
    humidity.innerText=data.main.humidity
    cords.innerText=`Lon:${Math.round(data.coord["lon"])} | Lat${Math.round(data.coord["lat"])}:`
}
btn.addEventListener("click", getdata)

