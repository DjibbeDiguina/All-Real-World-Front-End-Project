const keyApi="756491eaf601544f7b3cce1cbb819574";
const weatherData=document.querySelector("#weather-data");
const inputText=document.querySelector("#city-input");
const formEl=document.querySelector("form");

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const values=inputText.value;
    getDataApi(values)
})

async function getDataApi(values){
    try {
        const reponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${values}&appid=${keyApi}&units=metric`);
     if(!reponse.ok){
        throw new Error("network problems");
      }
        const data= await reponse.json();
        console.log(data);

        const temperatur=Math.round(data.main.temp);
        const description=data.weather[0].description;
        const icon=data.weather[0].icon;

        const details=[
            `Temp max:${Math.round(data.main.temp_max )}°C`,
            `Humidity:${data.main.humidity}%`,
            `Wind speed:${data.wind.speed} m/s`
        ]
        weatherData.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
        weatherData.querySelector(".temperature").innerHTML=temperatur+"°C";
        weatherData.querySelector(".description").innerHTML=description;
        weatherData.querySelector(".details").innerHTML=details.map((detail)=>{
            return `<div>${detail}</div>`;
        }).join("");

    } catch (error) {
        weatherData.querySelector(".icon").innerHTML=""
        weatherData.querySelector(".temperature").innerHTML=""
        weatherData.querySelector(".description").innerHTML="Sorry, an error has occurred. Please check the name of the city or country you have entered. "
        weatherData.querySelector(".details").innerHTML=""
       

    }
}