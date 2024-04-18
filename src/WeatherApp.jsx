import './WeatherApp.css';
import Draggable from 'react-draggable';

function WeatherApp({setPage}){
    let api_key = 'd4f74fc7639011ca08916ea88320b24b';
    let location = "Katy";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location},us&units=Imperial&appid=${api_key}`;
    let img_src = "01n";

    const search = async()=>{
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location},us&units=Imperial&appid=${api_key}`;
        let response = await fetch(apiURL);
        let data = await response.json();

        if(data.name != location){
            if(location == ""){
                alert('Please enter a city');
            } else{
                alert(location + ' is not a city in the database.\nPlease try another city.');
            }
            location = 'Katy';
            document.getElementById('location-title').innerHTML = location;
            apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location},us&units=Imperial&appid=${api_key}`;
            response = await fetch(apiURL);
            data = await response.json();
        }

        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');
        const icon = document.getElementById('icon');
        const sunset = document.getElementById('sunset');
        const sunrise = document.getElementById('sunrise');
        const humidity = document.getElementById('humidity');

        

        img_src = data.weather[0].icon;
        icon.src = `http://openweathermap.org/img/w/${img_src}.png`;

        description.innerHTML = data.weather[0].main;
        temperature.innerHTML = Math.round(data.main.temp) + "&deg;"; 
        humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
        const sunsetTime = new Date(data.sys.sunset * 1000);
        const sunriseTime = new Date(data.sys.sunrise * 1000);

        let sunsetMinutes = sunsetTime.getMinutes();
        if(sunsetMinutes < 10)
            sunsetMinutes = "0" + (sunsetTime.getMinutes());
        if(sunsetTime.getHours() > 12)
            sunset.innerHTML = "Sunset: " + (sunsetTime.getHours()-12) + ":" + sunsetMinutes + " PM";
        else
            sunset.innerHTML = "Sunset: " + (sunsetTime.getHours()) + ":" + sunsetMinutes + "AM";

        let sunriseMinutes = sunsetTime.getMinutes();
        if(sunriseTime.getMinutes() < 10)
            sunriseMinutes = "0" + (sunriseTime.getMinutes());
        if(sunriseTime.getHours() > 12)
            sunrise.innerHTML = "Sunrise: " + (sunriseTime.getHours() - 12) + ":" + sunriseMinutes + " PM";
        else
            sunrise.innerHTML = "Sunrise: " + (sunriseTime.getHours()) + ":" + sunriseMinutes + " AM";

        
        if(description.innerHTML == 'Rain' || (description.innerHTML == 'Thunderstorm')){
            document.getElementById('background').classList += ' toRain';
        } else{
            document.getElementById('background').classList = 'toCloud';
        }
    }

    const formatLocation = function(){
        location = location.toLowerCase();
        let firstLetter = location.substring(0,1);
        firstLetter = firstLetter.toUpperCase();

        if(location === 'washington dc'){
            let secondWord = location.substring(location.indexOf(" ") + 1);
            secondWord = secondWord.toUpperCase();
            location = firstLetter + location.substring(1,location.indexOf(" ") + 1) + secondWord;
        } else if(location.indexOf(" ") != -1){
            let firstLetterofSecondWord = location.substring(location.indexOf(" ") + 1, location.indexOf(" ") + 2);
            firstLetterofSecondWord = firstLetterofSecondWord.toUpperCase();
            
            location = firstLetter + location.substring(1,location.indexOf(" ") + 1) + firstLetterofSecondWord + location.substring(location.indexOf(" ") + 2);        
        }else{
            location = firstLetter + location.substring(1);
        }

        
    }

    search();


  return(
    <Draggable handle='#header'>
        <div id='appWrapper'>
            <div id='background'>
            <div id='header'>
                <button id='delete' onClick={()=>setPage('home')}>x</button>
            </div>
            <input onKeyDown={(e) => {
                if(e.key === 'Enter'){
                    location = document.getElementById('search-bar').value
                    document.getElementById('search-bar').value = "";
                    formatLocation();
                    document.getElementById('location-title').innerHTML = location;
                    search();
                }         
            }} id="search-bar" placeholder="Search Location"></input>

            <div id='cursor'></div>

            <div id='weather-app'>
                <h1 id='location-title'>{location}</h1>
                <h1 id='temperature' className='weather-data'>null</h1>

                <h1 id='description' className='weather-data'>null</h1>

                <img className='weather-data' id="icon"src={`http://openweathermap.org/img/w/${img_src}.png`}></img>

                <h1 id='humidity' className='weather-data weather-extra-info'>Humidity: </h1>

                <h1 id='sunrise' className='weather-data weather-extra-info'>Sunrise:</h1>

                <h1 id='sunset' className='weather-data weather-extra-info'>Sunset:</h1>
            </div>
            </div>
        </div>
    </Draggable>
  );
}

export default WeatherApp;