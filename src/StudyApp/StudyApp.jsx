import Header from '../Header/Header.jsx';
import './StudyApp.css';
import {useState, useEffect} from 'react';

function StudyApp({setPage}){
    const [time, setTime] = useState(0);
    let totalTime;

    useEffect( () =>{ //useEffect runs every time its variable, or in this case, time, changes
        setTimeout( ()=>{
            if(time >=0){
                let totalTime = Number(document.getElementById('time-input').value) * 60000;
                document.title = getFormattedTime();
                setTime(time-1000);
                document.getElementById('progress-bar').style.background = `conic-gradient(#d5e7b8, ${(time/1000)*(360000/totalTime)}deg, #ededed 0deg)`;
            } else{
                timerDone();
            }
                
        },1000)
    },[time]);

    function timerDone(){
        document.getElementById('start-button').style.zIndex = 1;
        document.getElementById('time-input').style.zIndex = 1;
        //sound an alarm
    }

    function ifHitEnter(e){
        let tempTime = Number(document.getElementById('time-input').value)
        if(e.key == 'Enter'){
            if(isNaN(tempTime))
                alert('\"' + document.getElementById('time-input').value + '\" is not a valid time')
            else{
                document.getElementById('start-button').style.zIndex = -1;
                document.getElementById('time-input').style.zIndex = -1;
                convertToMilliseconds();
            }
        }   
    }

    

    function buttonStart(){
        let tempTime = Number(document.getElementById('time-input').value)
        if(isNaN(tempTime)){
            alert('\"' + document.getElementById('time-input').value + '\" is not a valid time')
        }else{
            document.getElementById('start-button').style.zIndex = -1;
            document.getElementById('time-input').style.zIndex = -1;
            convertToMilliseconds();
        }
        
    }

    function convertToMilliseconds(){
        setTime(Number(document.getElementById('time-input').value) * 60000);
        
    }

    const getFormattedTime = ()=>{
        let totalSeconds = parseInt(Math.floor(time/1000));
        let totalMinutes = parseInt(Math.floor(totalSeconds/60));

        let seconds = parseInt(totalSeconds%60);

        let stringMinutes = totalMinutes + "";
        let stringSeconds = seconds + "";
        if(totalMinutes < 0 || seconds < 0){
            document.title = '00 : 00';
            return '00 : 00'
        }if(stringMinutes.length < 2)
            stringMinutes = "0" + stringMinutes;
        if(stringSeconds.length < 2)
            stringSeconds = "0" + stringSeconds;
        document.title = stringMinutes + " : " + stringSeconds;
        return stringMinutes + " : " + stringSeconds;
    };

    return(
        <div id='app-wrapper'>
            <Header setPage={setPage}/>
            <div id='content'>
                <input id='time-input' type='text' placeholder='Minutes' onKeyDown={(e)=>ifHitEnter(e)}></input>
                <button id='start-button' onClick={()=>buttonStart()}>Start!</button>
                <div id='progress-bar'></div>
                <div id='middle-progress-bar'></div>
                <h1 id='time-display'>{getFormattedTime()}</h1>
            </div>
        </div>
    );
}
export default StudyApp