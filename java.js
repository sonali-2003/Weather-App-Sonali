const apiKey="20071b2114e381f97c217e22be7ec3c0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 402){
                document.querySelector(".error").style.display ="block";
                document.querySelector(".weather").style.display="none";
        }else{
                var data = await response.json();
                console.log(data);
        
                document.querySelector(".city").innerHTML=data.name;
                  document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
                  document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
                  document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";   
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display ="non"; 
}
searchBtn.addEventListener("click",()=>{checkWeather(searchBox.value);})
