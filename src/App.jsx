
//to open up the website, in the terminal, type
//npm run dev
import WeatherApp from './WeatherApp.jsx';
import GradesApp from './GradesApp.jsx';
import React, {useState} from "react";
import './main.css';

function App() {
    const [page, setPage] = useState("home");
    
    

    return(
        <> 
            {page === 'weather' &&
                <WeatherApp setPage ={setPage}/>
            }
            {page === 'grades' &&
                <GradesApp setPage={setPage}/>
            }

            <div id='homeScreen'>
                
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
                <button id='welcome-card-button' onClick={()=>{document.getElementById('welcome-card').style.zIndex = -100; document.getElementById('dark-around-dialog').style.zIndex = -100}}>Explore</button>
            </dialog>
            <div id='dark-around-dialog'></div>
        </>
        
    );
}

export default App
