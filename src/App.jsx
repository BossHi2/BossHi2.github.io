
//to open up the website, in the terminal, type
//npm run dev
import WeatherApp from './WeatherApp.jsx';
import React, {useState} from "react";
import './main.css';

function App() {
    const [page, setPage] = useState("home");
    const time = function(){
        console.log("hi");
        const time = document.getElementById('time');
        
        let date = new Date()
        let dateMinutes = date.getMinutes();
        if(dateMinutes < 10)
            dateMinutes = "0" + dateMinutes;
        if(date.getHours() > 12)
            time.innerHTML = date.getHours()-12 + ":" + dateMinutes + " PM";
        else
            time.innerHTML = date.getHours() + ":" + dateMinutes + " AM";
    }
    //FIX TIME

    

    return(
        <> 
            {page === 'weather' &&
                <WeatherApp setPage ={setPage}/>
            }
            <div id='homeScreen'>
                <div id='top-bar'>
                    <p id='time'>hi</p>
                </div>
                <div className='app-button'>
                    <button  id='weather-button' onClick={()=>setPage('weather')}></button>
                    <p>Weather</p>
                </div>
                
            </div>
        </>
        
    );
}

export default App
