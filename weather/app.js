const apiKey="&appid=3ead716415c5f990183b3e171b1c15d3"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(cityName) {
    const resp=await fetch(apiUrl+cityName+apiKey);
    var data=await resp.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humid").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
     
}
searchBtn.addEventListener("click",()=>{
    // cityName=;
    checkWeather(searchBox.value);
})
