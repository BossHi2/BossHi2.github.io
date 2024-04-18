
//to open up the website, in the terminal, type
//npm run dev
import WeatherApp from './WeatherApp.jsx';
import GradesApp from './GradesApp.jsx';
import React, {useState} from "react";
import './main.css';

function App() {
    const [page, setPage] = useState("home");

    const time =()=>{
        const t = document.getElementById('time');
        
            
        let date = new Date();
        let dateMinutes = date.getMinutes();
        if(dateMinutes < 10)
            dateMinutes = "0" + dateMinutes;

        if(t != null){
            if(date.getHours() > 11)
                t.innerHTML = date.getHours()-12 + ":" + dateMinutes + " PM";
            else
                t.innerHTML = date.getHours() + ":" + dateMinutes + " AM";
        }

        let x = 0;
        x++;
        if(x==1){
            setInterval(time, 20000);
            document.getElementById('dark-around-dialog').style.zIndex = -1;
            document.getElementById('welcome-card').open = false;
        }
            
    }
    
    

    return(
        <> 
            {page === 'weather' &&
                <WeatherApp setPage ={setPage}/>
            }
            {page === 'grades' &&
                <GradesApp setPage={setPage}/>
            }

            <div id='homeScreen'>
                <div id='top-bar'>
                    <p id='time'></p>
                </div>
                <div className='app-button'>
                    <button  id='weather-button' onClick={()=>setPage('weather')}></button>
                    <p>Weather</p>
                </div>

                <div className='app-button'>
                    <button  id='grades-button' onClick={()=>setPage('grades')}></button>
                    <p>Grades</p>
                </div>
            </div>

            <dialog id='welcome-card' open={true}>
                <h1>Welcome to SamOS</h1>
                <button onClick={()=>time()}>Explore</button>
            </dialog>
            <div id='dark-around-dialog'></div>
        </>
        
    );
}

export default App
