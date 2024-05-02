import './GradesApp.css';
import Draggable from 'react-draggable';
import grades from './grades.json'
import React, {useState, useEffect} from "react";
import Header from '../Header/Header.jsx';

function GradesApp({setPage}){
    const [view, setView] = useState('home');
    const [whatIf, setWhatIf] = useState('no');

    const [showAverages, setShowAverages] = useState(false);
    let x = 0;

    
    function openFirst(){
        setView('firstGrades');
        setInterval( () => {
            if(x == 0){
                setShowAverages(true);
                x++
            }
            
        },10);
    }
    function openSecond(){
        setView('secondGrades');
        setInterval( () => {
            if(x == 0){
                setShowAverages(true);
                x++
            }
            
        },10);
    }
    function openThird(){
        setView('thirdGrades');
        setInterval( () => {
            if(x == 0){
                setShowAverages(true);
                x++
            }
            
        },10);
    }
    function openFourth(){
        setView('fourthGrades');
        setInterval( () => {
            if(x == 0){
                setShowAverages(true);
                x++
            }
            
        },10);
    }
    function openFifth(){
        setView('fifthGrades');
        setInterval( () => {
            if(x == 0){
                setShowAverages(true);
                x++
            }
            
        },10);
    }
    function openSixth(){
        setView('sixthGrades');
        setInterval( () => {
            if(x == 0){
                setShowAverages(true);
                x++
            }
            
        },10);
    }
    function openSeventh(){
        setView('seventhGrades');
        setInterval( () => {
            if(x == 0){
                setShowAverages(true);
                x++
            }
            
        },10);
    }


    function isAP(pathToName){
        if(pathToName.indexOf('AP') == 0){
            return true;
        } else
            return false;
    }

    function calculateAP(other, minor, major){
        let otherGrade = other; //10
        let minorGrade = minor; //20
        let majorGrade = major; //70

        if(otherGrade != 0 && minorGrade == 0 && majorGrade == 0)
            return (otherGrade);
        else if(otherGrade == 0 && minorGrade != 0 && majorGrade == 0)
            return (minorGrade);
        else if(otherGrade == 0 && minorGrade == 0 && majorGrade != 0)
            return (majorGrade);
        else if(otherGrade != 0 && minorGrade != 0 && majorGrade == 0)
            return (((otherGrade*.01*10) + (minorGrade*.01*20))/30)*100;
        else if(otherGrade != 0 && minorGrade == 0 && majorGrade != 0)
            return (((otherGrade*.01*10) + (majorGrade*.01*70))/80)*100;
        else if(otherGrade == 0 && minorGrade != 0 && majorGrade != 0)
            return (((minorGrade*.01*20) + (majorGrade*.01*70))/90)*100;
        else
            return (otherGrade*.01*10) + (minorGrade*.01*20) + (majorGrade*.01*70);
    }

    function calculateNoAP(other, minor, major){
        let otherGrade = other;
        let minorGrade = minor;
        let majorGrade = major;

        if(otherGrade != 0 && minorGrade == 0 && majorGrade == 0)
            return (otherGrade);
        else if(otherGrade == 0 && minorGrade != 0 && majorGrade == 0)
            return (minorGrade);
        else if(otherGrade == 0 && minorGrade == 0 && majorGrade != 0)
            return (majorGrade);
        else if(otherGrade != 0 && minorGrade != 0 && majorGrade == 0)
            return (((otherGrade*.01*10) + (minorGrade*.01*30))/40)*100;
        else if(otherGrade != 0 && minorGrade == 0 && majorGrade != 0)
            return (((otherGrade*.01*10) + (majorGrade*.01*60))/70)*100;
        else if(otherGrade == 0 && minorGrade != 0 && majorGrade != 0)
            return (((minorGrade*.01*30) + (majorGrade*.01*60))/90)*100;

        return ((otherGrade*.01*10) + (minorGrade*.01*30) + (majorGrade*.01*60));
    }

    const calculateWhatIf = ()=>{
        const dropDown = document.getElementById('grade-type-select');
        const input = document.getElementById('input-grade');

        const selectedIndex = dropDown.selectedIndex;
        const userInput = Number(input.value);

        

        if(isNaN(userInput))
            alert("\""+ input.value + "\""+ ' is not valid grade');
        else if(userInput == ""){
            alert('Please input a grade');
        } else{
            let otherAverage = average(document.getElementsByClassName('Other-grades'));
            let minorAverage = average(document.getElementsByClassName('Minor-grades'));
            let majorAverage = average(document.getElementsByClassName('Major-grades'));
            let  classAverage;
            if(selectedIndex == 0)
                otherAverage = ((otherAverage * getNumOfGrades(document.getElementsByClassName('Other-grades'))) + userInput)/(getNumOfGrades(document.getElementsByClassName('Other-grades'))+1);
            else if(selectedIndex == 1)
                minorAverage = ((minorAverage * getNumOfGrades(document.getElementsByClassName('Minor-grades'))) + userInput)/(getNumOfGrades(document.getElementsByClassName('Minor-grades'))+1);
            else if(selectedIndex == 2){
                majorAverage = ((majorAverage * getNumOfGrades(document.getElementsByClassName('Major-grades'))) + userInput)/(getNumOfGrades(document.getElementsByClassName('Major-grades'))+1);
            }
            if(view === 'firstGrades'){
                if(isAP(grades.first.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'secondGrades'){
                if(isAP(grades.second.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'thirdGrades'){
                if(isAP(grades.third.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'fourthGrades'){
                if(isAP(grades.fourth.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'fifthGrades'){
                if(isAP(grades.fifth.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'sixthGrades'){
                if(isAP(grades.sixth.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'seventhGrades'){
                if(isAP(grades.seventh.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }


            alert('Your class average will be ' + classAverage + " if you get " + userInput + " on a " + dropDown[selectedIndex].value.toLowerCase() + " grade");
        }
        


        input.value = "";
    }


    function getNumOfGrades(elements){
        let numOfGrades = 0;
        for(var i = 0; i<elements.length; i++){
            if(isNaN(parseInt(elements[i].querySelectorAll('span')[0].textContent)) == false){
                numOfGrades++;
            }
        }
        return numOfGrades;
    }
    
    function average(elements){
        let sum = 0;
        let numOfGrades = 0;
        if(elements == null)
            return 0;
        for(var i = 0; i<elements.length; i++){
            if(isNaN(parseInt(elements[i].querySelectorAll('span')[0].textContent)) == false){
                sum += parseInt(elements[i].querySelectorAll('span')[0].textContent)
                numOfGrades++;
            }
        }
        let average = Math.round(sum/numOfGrades);
        if(numOfGrades == 0)
            return 0;
        else
            return average
    }

    function ifHitEnterKey(event){
        if(event.key == 'Enter')
            calculateWhatIf();
    }
    return(
        <Draggable handle='#header'>
            
            
            <div id='appWrapper'>
                <Header setPage={setPage}/>
               
                {whatIf === 'yes' && 
                <>
                    <dialog open={true} id='what-if-container'>
                        <div id='select-grade-type-container'>
                            <label id='grade-type-label'>Grade Type: </label>
                            <select name='gradeType' id='grade-type-select'>
                                <option value='Other'>Other</option>
                                <option value='Minor'>Minor</option>
                                <option value='Major'>Major</option>
                            </select>
                        </div>
                        
                        <div id='input-grade-container'>
                            <label id='input-grade-label'>Grade:</label>
                            <input id='input-grade' type='text' onKeyDown={()=>ifHitEnterKey(event)}/>
                        </div>

                        <button id='calculate' onClick={()=>calculateWhatIf()}>Calculate Grade</button>

                        <button id='close-what-if-calculator' onClick={()=>setWhatIf('no')}>close</button>
                    </dialog>
                </>
            }
                    
                {view === 'firstGrades' &&
                    <>
                        <div className='grades-header'>
                            <button className='back-button' onClick={()=>{setView('home'); setShowAverages(false); x=0}}></button>
                            <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                            <h1 className='title'>{grades.first.name}</h1>
                            <h1 className='individual-class-average'>{grades.first.average}</h1>
                        </div>

                        {showAverages == true && 
                            <>
                                <div className='average-display'>
                                    <h1>Other</h1>
                                    <h1>{average(document.getElementsByClassName('Other-grades'))}</h1>
                                    <div className='other-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Minor</h1>
                                    <h1>{average(document.getElementsByClassName('Minor-grades'))}</h1>
                                    <div className='minor-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Major</h1>
                                    <h1>{average(document.getElementsByClassName('Major-grades'))}</h1>
                                    <div className='major-color-average'></div>
                                </div>
                            </>
                        }
                        
                        
                        <div className='grade-display'>
                            <ol id='first-grade-display' className='grade-container'>
                                {grades.first.Grades.map((item, key) => (
                                    <li key={key} className={`${item.type}-grades`}>{item.name}<div className={`${item.type}-color`}></div><span>{item.score}</span><br></br><span className='grade-date'>{item.date}</span></li>
                                ))}
                            </ol>
                        </div>
                        
                    </>
                }
                {view === 'secondGrades' &&
                    <>
                        <div className='grades-header'>
                            <button className='back-button' onClick={()=>{setView('home'); setShowAverages(false); x=0}}></button>
                            <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                            <h1 className='title'>{grades.second.name}</h1>
                            <h1 className='individual-class-average'>{grades.second.average}</h1>
                        </div>
                        {showAverages == true && 
                            <>
                                <div className='average-display'>
                                    <h1>Other</h1>
                                    <h1>{average(document.getElementsByClassName('Other-grades'))}</h1>
                                    <div className='other-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Minor</h1>
                                    <h1>{average(document.getElementsByClassName('Minor-grades'))}</h1>
                                    <div className='minor-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Major</h1>
                                    <h1>{average(document.getElementsByClassName('Major-grades'))}</h1>
                                    <div className='major-color-average'></div>
                                </div>
                            </>
                        }
                        
                        
                        <div className='grade-display'>
                            <ol id='second-grade-display' className='grade-container'>
                                {grades.second.Grades.map((item, key) => (
                                    <li key={key} className={`${item.type}-grades`}>{item.name}<div className={`${item.type}-color`}></div><span>{item.score}</span><br></br><span className='grade-date'>{item.date}</span></li>
                                ))}
                            </ol>
                        </div>
                        
                    </>
                }
                {view === 'thirdGrades' &&
                    <>
                        <div className='grades-header'>
                            <button className='back-button' onClick={()=>{setView('home'); setShowAverages(false); x=0}}></button>
                            <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                            <h1 className='title'>{grades.third.name}</h1>
                            <h1 className='individual-class-average'>{grades.third.average}</h1>
                        </div>
                        {showAverages == true && 
                            <>
                                <div className='average-display'>
                                    <h1>Other</h1>
                                    <h1>{average(document.getElementsByClassName('Other-grades'))}</h1>
                                    <div className='other-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Minor</h1>
                                    <h1>{average(document.getElementsByClassName('Minor-grades'))}</h1>
                                    <div className='minor-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Major</h1>
                                    <h1>{average(document.getElementsByClassName('Major-grades'))}</h1>
                                    <div className='major-color-average'></div>
                                </div>
                            </>
                        }
                        
                        
                        <div className='grade-display'>
                            <ol id='third-grade-display' className='grade-container'>
                                {grades.third.Grades.map((item, key) => (
                                    <li key={key} className={`${item.type}-grades`}>{item.name}<div className={`${item.type}-color`}></div><span>{item.score}</span><br></br><span className='grade-date'>{item.date}</span></li>
                                ))}
                            </ol>
                        </div>
                        
                    </>
                }
                {view === 'fourthGrades' &&
                    <>
                        <div className='grades-header'>
                            <button className='back-button' onClick={()=>{setView('home'); setShowAverages(false); x=0}}></button>
                            <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                            <h1 className='title'>{grades.fourth.name}</h1>
                            <h1 className='individual-class-average'>{grades.fourth.average}</h1>
                        </div>
                        {showAverages == true && 
                            <>
                                <div className='average-display'>
                                    <h1>Other</h1>
                                    <h1>{average(document.getElementsByClassName('Other-grades'))}</h1>
                                    <div className='other-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Minor</h1>
                                    <h1>{average(document.getElementsByClassName('Minor-grades'))}</h1>
                                    <div className='minor-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Major</h1>
                                    <h1>{average(document.getElementsByClassName('Major-grades'))}</h1>
                                    <div className='major-color-average'></div>
                                </div>
                            </>
                        }
                        
                        
                        <div className='grade-display'>
                            <ol id='fourth-grade-display' className='grade-container'>
                                {grades.fourth.Grades.map((item, key) => (
                                    <li key={key} className={`${item.type}-grades`}>{item.name}<div className={`${item.type}-color`}></div><span>{item.score}</span><br></br><span className='grade-date'>{item.date}</span></li>
                                ))}
                            </ol>
                        </div>
                        
                    </>
                }
                {view === 'fifthGrades' &&
                    <>
                        <div className='grades-header'>
                            <button className='back-button' onClick={()=>{setView('home'); setShowAverages(false); x=0}}></button>
                            <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                            <h1 className='title'>{grades.fifth.name}</h1>
                            <h1 className='individual-class-average'>{grades.fifth.average}</h1>
                        </div>
                        {showAverages == true && 
                            <>
                                <div className='average-display'>
                                    <h1>Other</h1>
                                    <h1>{average(document.getElementsByClassName('Other-grades'))}</h1>
                                    <div className='other-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Minor</h1>
                                    <h1>{average(document.getElementsByClassName('Minor-grades'))}</h1>
                                    <div className='minor-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Major</h1>
                                    <h1>{average(document.getElementsByClassName('Major-grades'))}</h1>
                                    <div className='major-color-average'></div>
                                </div>
                            </>
                        }
                        
                        
                        <div className='grade-display'>
                            <ol id='fifth-grade-display' className='grade-container'>
                                {grades.fifth.Grades.map((item, key) => (
                                    <li key={key} className={`${item.type}-grades`}>{item.name}<div className={`${item.type}-color`}></div><span>{item.score}</span><br></br><span className='grade-date'>{item.date}</span></li>
                                ))}
                            </ol>
                        </div>
                        
                    </>
                }
                {view === 'sixthGrades' &&
                    <>
                        <div className='grades-header'>
                            <button className='back-button' onClick={()=>{setView('home'); setShowAverages(false); x=0}}></button>
                            <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                            <h1 className='title'>{grades.sixth.name}</h1>
                            <h1 className='individual-class-average'>{grades.sixth.average}</h1>
                        </div>
                        {showAverages == true && 
                            <>
                                <div className='average-display'>
                                    <h1>Other</h1>
                                    <h1>{average(document.getElementsByClassName('Other-grades'))}</h1>
                                    <div className='other-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Minor</h1>
                                    <h1>{average(document.getElementsByClassName('Minor-grades'))}</h1>
                                    <div className='minor-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Major</h1>
                                    <h1>{average(document.getElementsByClassName('Major-grades'))}</h1>
                                    <div className='major-color-average'></div>
                                </div>
                            </>
                        }
                        
                        
                        <div className='grade-display'>
                            <ol id='sixth-grade-display' className='grade-container'>
                                {grades.sixth.Grades.map((item, key) => (
                                    <li key={key} className={`${item.type}-grades`}>{item.name}<div className={`${item.type}-color`}></div><span>{item.score}</span><br></br><span className='grade-date'>{item.date}</span></li>
                                ))}
                            </ol>
                        </div>
                        
                    </>
                }
                {view === 'seventhGrades' &&
                    <>
                        <div className='grades-header'>
                            <button className='back-button' onClick={()=>{setView('home'); setShowAverages(false); x=0}}></button>
                            <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                            <h1 className='title'>{grades.seventh.name}</h1>
                            <h1 className='individual-class-average'>{grades.seventh.average}</h1>
                        </div>
                        {showAverages == true && 
                            <>
                                <div className='average-display'>
                                    <h1>Other</h1>
                                    <h1>{average(document.getElementsByClassName('Other-grades'))}</h1>
                                    <div className='other-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Minor</h1>
                                    <h1>{average(document.getElementsByClassName('Minor-grades'))}</h1>
                                    <div className='minor-color-average'></div>
                                </div>
                                <div className='average-display'>
                                    <h1>Major</h1>
                                    <h1>{average(document.getElementsByClassName('Major-grades'))}</h1>
                                    <div className='major-color-average'></div>
                                </div>
                            </>
                        }
                        
                        
                        <div className='grade-display'>
                            <ol id='seventh-grade-display' className='grade-container'>
                                {grades.seventh.Grades.map((item, key) => (
                                    <li key={key} className={`${item.type}-grades`}>{item.name}<div className={`${item.type}-color`}></div><span>{item.score}</span><br></br><span className='grade-date'>{item.date}</span></li>
                                ))}
                            </ol>
                        </div>
                        
                    </>
                }


                {view ==='home' &&
                    <>
                    <h1 className='title'>Grades</h1>
                    <div className='class'>
                        
                        <h1 className='class-name'>{grades.first.name}</h1>
                        {grades.first.average != 0 ? (
                            <>
                                <button className='view-grades' onClick={()=>openFirst()}></button>
                                <h1 className='class-average'><span>{grades.first.average}</span></h1>
                            </>
                            
                        ) : (
                            <h1 className='no-class-average'><span>{grades.first.average}</span></h1>
                        )}
                    </div>
                    <div className='class'>
                        
                        <h1 className='class-name'>{grades.second.name}</h1>
                        {grades.second.average != 0 ? (
                            <>
                                <button className='view-grades' onClick={()=>openSecond()}></button>
                                <h1 className='class-average'><span>{grades.second.average}</span></h1>
                            </>
                            
                        ) : (
                            <h1 className='no-class-average'><span>{grades.second.average}</span></h1>
                        )}
                    </div>
                    
                    <div className='class'>
                        
                        <h1 className='class-name'>{grades.third.name}</h1>
                        {grades.third.average != 0 ? (
                            <>
                                <button className='view-grades' onClick={()=>openThird()}></button>
                                <h1 className='class-average'><span>{grades.third.average}</span></h1>
                            </>
                            
                        ) : (
                            <h1 className='no-class-average'><span>{grades.third.average}</span></h1>
                        )}
                    </div>
                    <div className='class'>
                        
                        <h1 className='class-name'>{grades.fourth.name}</h1>
                        {grades.fourth.average != 0 ? (
                            <>
                                <button className='view-grades' onClick={()=>openFourth()}></button>
                                <h1 className='class-average'><span>{grades.fourth.average}</span></h1>
                            </>
                            
                        ) : (
                            <h1 className='no-class-average'><span>{grades.fourth.average}</span></h1>
                        )}
                    </div>
                    <div className='class'>
                        
                        <h1 className='class-name'>{grades.fifth.name}</h1>
                        {grades.fifth.average != 0 ? (
                            <>
                                <button className='view-grades' onClick={()=>openFifth()}></button>
                                <h1 className='class-average'><span>{grades.fifth.average}</span></h1>
                            </>
                            
                            
                        ) : (
                            <h1 className='no-class-average'><span>{grades.fifth.average}</span></h1>
                        )}
                    </div>
                    <div className='class'>
                        
                        <h1 className='class-name'>{grades.sixth.name}</h1>
                        {grades.sixth.average != 0 ? (
                            <>
                                <button className='view-grades' onClick={()=>openSixth()}></button>
                                <h1 className='class-average'><span>{grades.sixth.average}</span></h1>
                            </>
                            
                        ) : (
                            <h1 className='no-class-average'><span>{grades.sixth.average}</span></h1>
                        )}
                    </div>
                    <div className='class'>
                        
                        <h1 className='class-name'>{grades.seventh.name}</h1>
                        {grades.seventh.average != 0 ? (
                            <>
                                <button className='view-grades' onClick={()=>openSeventh()}></button>
                                <h1 className='class-average'><span>{grades.seventh.average}</span></h1>
                            </>
                            
                        ) : (
                            <h1 className='no-class-average'><span>{grades.seventh.average}</span></h1>
                        )}
                    </div>
                    </>
                }  
                </div>
        </Draggable>
    );
}
export default GradesApp