const api = {
    key: "357d8d07cfd039f6f30935714c184d4f",
    base: "https://api.openweathermap.org/data/2.5/"
}

document.addEventListener('readystatechange', function(){
    if (document.readyState == "complete"){
        const searchbox = document.getElementsByClassName("search-box")[0];
        searchbox.addEventListener("keyup", function(event) {
            if (event.keyCode == 13) {
                console.log(searchbox.value)
                if (searchbox.value != null){
                    getResults(searchbox.value);
                }
            }
        });
    }
});

function getResults (query) {
    fetch(`${api.base}forecast?q=${query}&US&units=imperial&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.city.name}, ${weather.city.country}`;
    let city1 = document.querySelector('.location .city1');
    city1.innerText = `${weather.city.name}, ${weather.city.country}`;
    let city2 = document.querySelector('.location .city2');
    city2.innerText = `${weather.city.name}, ${weather.city.country}`;
    let city3 = document.querySelector('.location .city3');
    city3.innerText = `${weather.city.name}, ${weather.city.country}`;
    let city4 = document.querySelector('.location .city4');
    city4.innerText = `${weather.city.name}, ${weather.city.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now, 0);
    let date1 = document.querySelector('.location .date1');
    date1.innerText = dateBuilder(now, 1);
    let date2 = document.querySelector('.location .date2');
    date2.innerText = dateBuilder(now, 2);
    let date3 = document.querySelector('.location .date3');
    date3.innerText = dateBuilder(now, 3);
    let date4 = document.querySelector('.location .date4');
    date4.innerText = dateBuilder(now, 4);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.list[0].main.temp)}<span>°F</span>`;
    let temp1 = document.querySelector('.current .temp1');
    temp1.innerHTML = `${Math.round(weather.list[8].main.temp)}<span>°F</span>`;
    let temp2 = document.querySelector('.current .temp2');
    temp2.innerHTML = `${Math.round(weather.list[16].main.temp)}<span>°F</span>`;
    let temp3 = document.querySelector('.current .temp3');
    temp3.innerHTML = `${Math.round(weather.list[24].main.temp)}<span>°F</span>`;
    let temp4 = document.querySelector('.current .temp4');
    temp4.innerHTML = `${Math.round(weather.list[32].main.temp)}<span>°F</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = `${weather.list[0].weather[0].main}`;
    let weather_el1 = document.querySelector('.current .weather1');
    weather_el1.innerText = `${weather.list[8].weather[0].main}`;
    let weather_el2 = document.querySelector('.current .weather2');
    weather_el2.innerText = `${weather.list[16].weather[0].main}`;
    let weather_el3 = document.querySelector('.current .weather3');
    weather_el3.innerText = `${weather.list[24].weather[0].main}`;
    let weather_el4 = document.querySelector('.current .weather4');
    weather_el4.innerText = `${weather.list[32].weather[0].main}`;

    let icon = document.querySelector('.current .icon');
    icon.src = "https://openweathermap.org/img/wn/" + `${weather.list[0].weather[0].icon}` + "@2x.png";
    let icon1 = document.querySelector('.current .icon1');
    icon1.src = "https://openweathermap.org/img/wn/" + `${weather.list[8].weather[0].icon}` + "@2x.png";
    let icon2 = document.querySelector('.current .icon2');
    icon2.src = "https://openweathermap.org/img/wn/" + `${weather.list[16].weather[0].icon}` + "@2x.png";
    let icon3 = document.querySelector('.current .icon3');
    icon3.src = "https://openweathermap.org/img/wn/" + `${weather.list[24].weather[0].icon}` + "@2x.png";
    let icon4 = document.querySelector('.current .icon4');
    icon4.src = "https://openweathermap.org/img/wn/" + `${weather.list[32].weather[0].icon}` + "@2x.png";
    

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.list[0].main.temp_min)}°F / ${Math.round(weather.list[0].main.temp_max)}°F`;
    let hilow1 = document.querySelector('.hi-low1');
    hilow1.innerText = `${Math.round(weather.list[8].main.temp_min)}°F / ${Math.round(weather.list[8].main.temp_max)}°F`;
    let hilow2 = document.querySelector('.hi-low2');
    hilow2.innerText = `${Math.round(weather.list[16].main.temp_min)}°F / ${Math.round(weather.list[16].main.temp_max)}°F`;
    let hilow3 = document.querySelector('.hi-low3');
    hilow3.innerText = `${Math.round(weather.list[24].main.temp_min)}°F / ${Math.round(weather.list[24].main.temp_max)}°F`;
    let hilow4 = document.querySelector('.hi-low4');
    hilow4.innerText = `${Math.round(weather.list[32].main.temp_min)}°F / ${Math.round(weather.list[32].main.temp_max)}°F`;
    
}

function dateBuilder(d, i) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay() + i];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date + i}, ${year}`;
}