let icons = document.querySelectorAll(".icons");
icons.forEach((icon) => {
  icon.addEventListener("mouseenter",function () {
    icons.forEach((item)=>{
      item.classList.remove("active")
    })
    icon.classList.add("active")
  })
});

let time = document.querySelector(".time h3");
let clock = document.querySelector(".timers");
let needle = document.querySelector(".needle");

  
  function updateclock(param) {
    let now = new Date();
     
     let hours = now.getHours(); 
     let minutes = now.getMinutes(); 
     let seconds = now.getSeconds(); 
     let secdeg = seconds * 6;
     
     
     hours = hours.toString().padStart(2, "0")
     minutes = minutes.toString().padStart(2, "0")
     seconds = seconds.toString().padStart(2, "0")
     
     let currentTime = `${hours}:${minutes}:${seconds}`;
      
      time.innerHTML = currentTime;
      clock.innerHTML = currentTime;
      
      
needle.style.transform = `translateX(-50%) rotate(${secdeg}deg)`;
  }
   setInterval(updateclock, 1000);
    updateclock();
    
// fetch(`974538b001724b958b4133802261805`)
const apiKey = "974538b001724b958b4133802261805";

let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let condition = document.querySelector("#condition");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let feelsLike = document.querySelector("#feelsLike");
let weatherIcon = document.querySelector("#weatherIcon"); 
let input = document.querySelector("#inputweather");
let btn = document.querySelector("#btnweather");

async function getWeather(cityName) {
  
  let response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`
  );
  
  let data = await response.json();
  
  console.log(data);
  
  city.innerHTML = data.location.name;
  
  temp.innerHTML = `${data.current.temp_c}°C`;
  
  condition.innerHTML = data.current.condition.text;
  
  humidity.innerHTML = `${data.current.humidity}%`;
  
  wind.innerHTML = `${data.current.wind_kph} km/h`;
  
  feelsLike.innerHTML = `${data.current.feelslike_c}°C`;
  
  weatherIcon.src = "https:" + data.current.condition.icon;
}

btn.addEventListener("click", function() {
  
  getWeather(input.value);
  
});
fetch(URL,{
 method:"POST",

 headers:{
  "Content-Type":"application/json"
 },

 body:JSON.stringify({
   contents:[
    {
      parts:[
        {
          text:userPrompt
        }
      ]
    }
   ]
 })

})
