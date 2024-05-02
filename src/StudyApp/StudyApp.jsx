import Header from '../Header/Header.jsx';
import './StudyApp.css';
import {useState, useEffect} from 'react';
import AlarmSound from '../assets/alarm.mp3';

//CODE BREAK TIME

function StudyApp({setPage}){
    const [time, setTime] = useState(-1);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [timeStudied, setTimeStudied] = useState(0); //tracks time studied for one session
    const [isTimerPlaying, setIsTimerPlaying] = useState(false)

    if(localStorage.getItem('workTime') == null)
        localStorage.setItem('workTime',1500000) //25 minutes
    if(localStorage.getItem('breakTime') == null)
        localStorage.setItem('breakTime', 300000) //5 minutes
    if(localStorage.getItem('totalTimeStudied') == null)
        localStorage.setItem('totalTimeStudied', 0)

    useEffect( () =>{ //useEffect runs every time its variable, or in this case, time, changes
        setTimeout( ()=>{
            if(time >=0 && isTimerPlaying == true){
                document.title = getFormattedTime();
                setTime(time-1000);
                console.log('time: ' +time)                
                if(time == 1000 )
                    timerDone()
            }
            else if(time == -1){
                document.title = 'SamOS';
                document.getElementById('time-display').innerHTML = getFormattedTime();
            }
                
        },1000)
    },[time]);


    function timerDone(){
        playAlarm();
        if(isTimerPlaying == true){
            setTimeout(() => {
                if(isBreak == true){
                    setIsBreak(false);
                    setTime(localStorage.getItem('workTime'));
                } else if(isBreak == false){
                    setIsBreak(true);
                    setTime(localStorage.getItem('breakTime'));
                    setTimeStudied(timeStudied + convertToMinute(Number(localStorage.getItem('workTime'))));
                }
            }, 2000);
        }
        
    }

    function stopTimer(){
        setTime(-1);
        localStorage.setItem('totalTimeStudied', Number(localStorage.getItem('totalTimeStudied')) + timeStudied)
        setTimeStudied(0);
        setIsBreak(false);
        setIsTimerPlaying(false);
    }

    function playAlarm(){
        var audio = new Audio(AlarmSound);
        audio.play()
    }

    function startTimer(){
        setTime(localStorage.getItem('workTime'))
        setIsTimerPlaying(true);
    }

    function workInput(e){
        if(document.getElementById('work-time-input').value == 0 || document.getElementById('work-time-input').value == convertToMinute(localStorage.getItem('workTime')))
            document.getElementById('work-time-input').style.backgroundColor='transparent';
        else
            document.getElementById('work-time-input').style.backgroundColor='red';
        if(e.key == 'Enter'){
            if(Number(document.getElementById('work-time-input').value) > 60)
                alert('It is recommended that you work for less than one hour to avoid burnout')
            else if(Number(document.getElementById('work-time-input').value) == 0)
                alert('Please enter a time')
            else if(isNaN(Number(document.getElementById('work-time-input').value)) == false){
                document.getElementById('work-time-input').style.backgroundColor='transparent';
                localStorage.setItem('workTime', convertToMilliseconds(Number(document.getElementById('work-time-input').value)))
            }
            else
                alert(document.getElementById('work-time-input').value + ' is not a valid time')
        }
    }

    function breakInput(e){
        if(document.getElementById('break-time-input').value == 0 || document.getElementById('break-time-input').value == convertToMinute(localStorage.getItem('breakTime')))
            document.getElementById('break-time-input').style.backgroundColor='transparent';
        else
            document.getElementById('break-time-input').style.backgroundColor='red';
        if(e.key == 'Enter'){
            if(Number(document.getElementById('break-time-input').value) > 60)
                alert('Your break time is too long')
            else if(Number(document.getElementById('break-time-input').value) == 0)
                alert('Please enter a time')
            else if(isNaN(Number(document.getElementById('break-time-input').value)) == false){
                document.getElementById('break-time-input').style.backgroundColor='transparent';
                localStorage.setItem('breakTime', convertToMilliseconds(Number(document.getElementById('break-time-input').value)))
            }
            else
                alert(document.getElementById('break-time-input').value + ' is not a valid time')
        }
    }

    function closeSettings(){
        const workInput = Number(document.getElementById('work-time-input').value);
        const breakInput = Number(document.getElementById('break-time-input').value);
        if( (workInput == 0 || workInput == convertToMinute(localStorage.getItem('workTime'))) && (breakInput == 0 || breakInput == convertToMinute(localStorage.getItem('breakTime'))) ){
            document.getElementById('settings-background').className='fade-out';
            setTimeout(()=>{
                setIsSettingsOpen(false); 
            }, 250);
        } else{
            if(workInput != convertToMinute(localStorage.getItem('workTime')) && workInput != 0)
                alert('Save your work time!\nTip: hit enter to save')
            else if(breakInput != convertToMinute(localStorage.getItem('breakTime')) && breakInput != 0)
                alert('Save your break time!\nTip: hit enter to save')
        }
        
    }
    function openSettings(){
        

        setIsSettingsOpen(true); 

        document.getElementById('settings-background').className='fade-in'
    }

    function convertToMilliseconds(minute){
        return minute * 60000;
    }

    function convertToMinute(milliseconds){
        return milliseconds/60000
    }

    const getFormattedTime = ()=>{
        let totalSeconds = parseInt(Math.floor(time/1000));
        let totalMinutes = parseInt(Math.floor(totalSeconds/60));

        let seconds = parseInt(totalSeconds%60);

        let stringMinutes = totalMinutes + "";
        let stringSeconds = seconds + "";

        let workTimeInMinutes = convertToMinute(localStorage.getItem('workTime'));

        if(time == -1){
            if(workTimeInMinutes%1 != 0 && workTimeInMinutes >= 10)
                return `${workTimeInMinutes - workTimeInMinutes%1} : ${Math.round((workTimeInMinutes%1)*60)}`
            else if(workTimeInMinutes%1 != 0 && workTimeInMinutes ==.1)
                return `00 : 0${Math.round((workTimeInMinutes%1)*60)}`
            else if(workTimeInMinutes%1 != 0 && workTimeInMinutes<1)
                return `00 : ${Math.round((workTimeInMinutes%1)*60)}`
            else if(workTimeInMinutes%1 != 0 && workTimeInMinutes<10 && workTimeInMinutes>1 && (Math.round((workTimeInMinutes%1)*60)) >= 10)
                return `0${workTimeInMinutes-(workTimeInMinutes%1)} : ${Math.round((workTimeInMinutes%1)*60)}`
            else if(workTimeInMinutes%1 != 0 && workTimeInMinutes<10 && workTimeInMinutes>1 && (Math.round((workTimeInMinutes%1)*60)) < 10)
                return `0${workTimeInMinutes-(workTimeInMinutes%1)} : 0${Math.round((workTimeInMinutes%1)*60)}`
            else if(workTimeInMinutes >= 10)
                return `${workTimeInMinutes} : 00`
            
            else
                return `0${workTimeInMinutes} : 00`
        }

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
                <h1 id='time-display' className='fade-in'>{getFormattedTime()}</h1>

                {isBreak === true && 
                    <>
                        <button id='stop-timer' onClick={()=>stopTimer()} className={time >= 2000 ? 'fade-in':'fade-out'}>End Study Session</button>
                        <h1 id='display-session-time' className={time >= 2000 ? 'fade-in':'fade-out'}>In this study session, you studied for {timeStudied} {timeStudied > 1 ? 'minutes' : 'minute'}</h1>
                    </>
                }
                
                <button id='delete-this-element' onClick={()=>localStorage.setItem('totalTimeStudied', 0)}>set total time studied to 0</button>



                {isTimerPlaying == false && 
                    <>
                        <button id='start-button' onClick={()=>startTimer()} className='fade-in'>Start</button>
                        <h1 id='display-total-time' className='fade-in'>In total, you studied for {localStorage.getItem('totalTimeStudied')} {localStorage.getItem('totalTimeStudied') > 1 ? 'minutes' : 'minute'}</h1>        
                        <button id='settings-icon' onClick={() =>openSettings()} className='fade-in'></button>                
                    </>
                }

                {isSettingsOpen === true && 
                    <div id='settings-background' className='fade-in'>
                        <button id='settings-back-icon' onClick={()=>closeSettings()}></button>
                        <h1 id='settings-title'>Settings</h1>

                        <h1 id='work-time-label'>Work Time</h1>
                        <input type='text' id='work-time-input' onKeyUp={(e)=>workInput(e)} placeholder={convertToMinute(localStorage.getItem('workTime'))}></input>

                        <br></br><br></br><br></br>

                        <h1 id='break-time-label'>Break Time</h1>
                        <input type='text' id='break-time-input' onKeyUp={(e)=>breakInput(e)} placeholder={convertToMinute(localStorage.getItem('breakTime'))}></input>
                    </div>
                }
            </div>
        </div>
    );
}
export default StudyApp