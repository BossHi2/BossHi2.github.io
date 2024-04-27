import './GradesApp.css';
import Draggable from 'react-draggable';
import grades from './grades.json'
import React, {useState, useEffect} from "react";
import Header from '../Header/Header.jsx';

function GradesApp({setPage}){
    const [view, setView] = useState('home');
    const [whatIf, setWhatIf] = useState('no');
    const firstOtherNames = [];
    const firstOtherGrades = [];
    const firstMinorNames = [];
    const firstMinorGrades = [];
    const firstMajorNames = [];
    const firstMajorGrades = [];

    const secondOtherNames = [];
    const secondOtherGrades = [];
    const secondMinorNames = [];
    const secondMinorGrades = [];
    const secondMajorNames = [];
    const secondMajorGrades = [];

    const thirdOtherNames = [];
    const thirdOtherGrades = [];
    const thirdMinorNames = [];
    const thirdMinorGrades = [];
    const thirdMajorNames = [];
    const thirdMajorGrades = [];

    const fourthOtherNames = [];
    const fourthOtherGrades = [];
    const fourthMinorNames = [];
    const fourthMinorGrades = [];
    const fourthMajorNames = [];
    const fourthMajorGrades = [];

    const fifthOtherNames = [];
    const fifthOtherGrades = [];
    const fifthMinorNames = [];
    const fifthMinorGrades = [];
    const fifthMajorNames = [];
    const fifthMajorGrades = [];

    const sixthOtherNames = [];
    const sixthOtherGrades = [];
    const sixthMinorNames = [];
    const sixthMinorGrades = [];
    const sixthMajorNames = [];
    const sixthMajorGrades = [];

    const seventhOtherNames = [];
    const seventhOtherGrades = [];
    const seventhMinorNames = [];
    const seventhMinorGrades = [];
    const seventhMajorNames = [];
    const seventhMajorGrades = [];

    function setOther(){
        if(view == 'firstGrades'){
            for(var i = 0; i<grades.first.Other.length; i++){
                firstOtherNames.push(grades.first.Other[i].substring(grades.first.Other[i].indexOf('#') + 1));
                firstOtherGrades.push(grades.first.Other[i].substring(0,grades.first.Other[i].indexOf('#')));  
            }
        } else if(view =='secondGrades'){
            for(var i = 0; i<grades.second.Other.length; i++){
                secondOtherNames.push(grades.second.Other[i].substring(grades.second.Other[i].indexOf('#') + 1));
                secondOtherGrades.push(grades.second.Other[i].substring(0,grades.second.Other[i].indexOf('#')));
            }
        } else if(view =='thirdGrades'){
            for(var i = 0; i<grades.third.Other.length; i++){
                thirdOtherNames.push(grades.third.Other[i].substring(grades.third.Other[i].indexOf('#') + 1));
                thirdOtherGrades.push(grades.third.Other[i].substring(0,grades.third.Other[i].indexOf('#')));
            }
        } else if(view =='fourthGrades'){
            for(var i = 0; i<grades.fourth.Other.length; i++){
                fourthOtherNames.push(grades.fourth.Other[i].substring(grades.fourth.Other[i].indexOf('#') + 1));
                fourthOtherGrades.push(grades.fourth.Other[i].substring(0,grades.fourth.Other[i].indexOf('#')));
            }
        } else if(view =='fifthGrades'){
            for(var i = 0; i<grades.fifth.Other.length; i++){
                fifthOtherNames.push(grades.fifth.Other[i].substring(grades.fifth.Other[i].indexOf('#') + 1));
                fifthOtherGrades.push(grades.fifth.Other[i].substring(0,grades.fifth.Other[i].indexOf('#')));
            }
        } else if(view =='sixthGrades'){
            for(var i = 0; i<grades.sixth.Other.length; i++){
                sixthOtherNames.push(grades.sixth.Other[i].substring(grades.sixth.Other[i].indexOf('#') + 1));
                sixthOtherGrades.push(grades.sixth.Other[i].substring(0,grades.sixth.Other[i].indexOf('#')));
            }
        } else if(view =='seventhGrades'){
            for(var i = 0; i<grades.seventh.Other.length; i++){
                seventhOtherNames.push(grades.seventh.Other[i].substring(grades.seventh.Other[i].indexOf('#') + 1));
                seventhOtherGrades.push(grades.seventh.Other[i].substring(0,grades.seventh.Other[i].indexOf('#')));
            }
        } 
    }
    function setMinor(){
        if(view == 'firstGrades'){
            for(var i = 0; i<grades.first.Minor.length; i++){
                firstMinorNames.push(grades.first.Minor[i].substring(grades.first.Minor[i].indexOf('#') + 1));
                firstMinorGrades.push(grades.first.Minor[i].substring(0,grades.first.Minor[i].indexOf('#')));
            }
        } else if(view == 'secondGrades'){
            for(var i = 0; i<grades.second.Minor.length; i++){
                secondMinorNames.push(grades.second.Minor[i].substring(grades.second.Minor[i].indexOf('#') + 1));
                secondMinorGrades.push(grades.second.Minor[i].substring(0,grades.second.Minor[i].indexOf('#')));
            }
        } else if(view == 'thirdGrades'){
            for(var i = 0; i<grades.third.Minor.length; i++){
                thirdMinorNames.push(grades.third.Minor[i].substring(grades.third.Minor[i].indexOf('#') + 1));
                thirdMinorGrades.push(grades.third.Minor[i].substring(0,grades.third.Minor[i].indexOf('#')));
            }
        } else if(view == 'fourthGrades'){
            for(var i = 0; i<grades.fourth.Minor.length; i++){
                fourthMinorNames.push(grades.fourth.Minor[i].substring(grades.fourth.Minor[i].indexOf('#') + 1));
                fourthMinorGrades.push(grades.fourth.Minor[i].substring(0,grades.fourth.Minor[i].indexOf('#')));
            }
        } else if(view == 'fifthGrades'){
            for(var i = 0; i<grades.fifth.Minor.length; i++){
                fifthMinorNames.push(grades.fifth.Minor[i].substring(grades.fifth.Minor[i].indexOf('#') + 1));
                fifthMinorGrades.push(grades.fifth.Minor[i].substring(0,grades.fifth.Minor[i].indexOf('#')));
            }
        } else if(view == 'sixthGrades'){
            for(var i = 0; i<grades.sixth.Minor.length; i++){
                sixthMinorNames.push(grades.sixth.Minor[i].substring(grades.sixth.Minor[i].indexOf('#') + 1));
                sixthMinorGrades.push(grades.sixth.Minor[i].substring(0,grades.sixth.Minor[i].indexOf('#')));
            }
        } else if(view == 'seventhGrades'){
            for(var i = 0; i<grades.seventh.Minor.length; i++){
                seventhMinorNames.push(grades.seventh.Minor[i].substring(grades.seventh.Minor[i].indexOf('#') + 1));
                seventhMinorGrades.push(grades.seventh.Minor[i].substring(0,grades.seventh.Minor[i].indexOf('#')));
            }
        }
    }

    function setMajor(){
        if(view == 'firstGrades'){
            for(var i = 0; i<grades.first.Major.length; i++){
                firstMajorNames.push(grades.first.Minor[i].substring(grades.first.Major[i].indexOf('#') + 1));
                firstMajorGrades.push(grades.first.Minor[i].substring(0,grades.first.Major[i].indexOf('#')));
            }
        } else if(view == 'secondGrades'){
            for(var i = 0; i<grades.second.Major.length; i++){
                secondMajorNames.push(grades.second.Major[i].substring(grades.second.Major[i].indexOf('#') + 1));
                secondMajorGrades.push(grades.second.Major[i].substring(0,grades.second.Major[i].indexOf('#')));
            }
        } else if(view == 'thirdGrades'){
            for(var i = 0; i<grades.third.Major.length; i++){
                thirdMajorNames.push(grades.third.Major[i].substring(grades.third.Major[i].indexOf('#') + 1));
                thirdMajorGrades.push(grades.third.Major[i].substring(0,grades.third.Major[i].indexOf('#')));
            }
        } else if(view == 'fourthGrades'){
            for(var i = 0; i<grades.fourth.Major.length; i++){
                fourthMajorNames.push(grades.fourth.Major[i].substring(grades.fourth.Major[i].indexOf('#') + 1));
                fourthMajorGrades.push(grades.fourth.Major[i].substring(0,grades.fourth.Major[i].indexOf('#')));
            }
        } else if(view == 'fifthGrades'){
            for(var i = 0; i<grades.fifth.Major.length; i++){
                fifthMajorNames.push(grades.fifth.Major[i].substring(grades.fifth.Major[i].indexOf('#') + 1));
                fifthMajorGrades.push(grades.fifth.Major[i].substring(0,grades.fifth.Major[i].indexOf('#')));
            }
        } else if(view == 'sixthGrades'){
            for(var i = 0; i<grades.sixth.Major.length; i++){
                sixthMajorNames.push(grades.sixth.Major[i].substring(grades.sixth.Major[i].indexOf('#') + 1));
                sixthMajorGrades.push(grades.sixth.Major[i].substring(0,grades.sixth.Major[i].indexOf('#')));
            }
        } else if(view == 'seventhGrades'){
            for(var i = 0; i<grades.seventh.Major.length; i++){
                seventhMajorNames.push(grades.seventh.Major[i].substring(grades.seventh.Major[i].indexOf('#') + 1));
                seventhMajorGrades.push(grades.seventh.Major[i].substring(0,grades.seventh.Major[i].indexOf('#')));
            }
        }
    }
    function setArrays(){
        setOther();
        setMinor();
        setMajor();
    }

    function isAP(pathToName){
        if(pathToName.indexOf('AP') == 0){
            return true;
        } else
            return false;
    }

    function calculateAP(other, minor, major){
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
            return (otherGrade*(.3333) + minorGrade*(.6666));
        else if(otherGrade != 0 && minorGrade == 0 && majorGrade != 0)
            return (otherGrade*.125 + majorGrade*.875);
        else if(otherGrade == 0 && minorGrade != 0 && majorGrade != 0)
            return (minorGrade*.2222 + majorGrade*.7777);
        else
            return (otherGrade*.1) + (minorGrade*.2) + (majorGrade*.7);
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
            return (otherGrade*(.25) + minorGrade*(.75));
        else if(otherGrade != 0 && minorGrade == 0 && majorGrade != 0)
            return (otherGrade*.1428 + majorGrade*.8568);
        else if(otherGrade == 0 && minorGrade != 0 && majorGrade != 0)
            return (minorGrade*.3333 + majorGrade*.6666);

        return (otherGrade*.1) + (minorGrade*.3) + (majorGrade*.6);
    }

    const calculateWhatIf = ()=>{
        const dropDown = document.getElementById('grade-type-select');
        const input = document.getElementById('input-grade');

        const selectedIndex = dropDown.selectedIndex;
        const userInput = Number(input.value);

        let otherAverage, minorAverage, majorAverage, classAverage;

        if(isNaN(userInput))
            alert("\""+ input.value + "\""+ ' is not valid grade');
        else if(userInput == ""){
            alert('Please input a grade');
        } else{
            if(view === 'firstGrades'){
                otherAverage = average(grades.first.Other);
                minorAverage = average(grades.first.Minor);
                majorAverage = average(grades.first.Major);

                if(selectedIndex == 0)
                    otherAverage = ((otherAverage * getNumOfGrades(grades.first.Other)) + userInput)/(getNumOfGrades(grades.first.Other)+1);
                else if(selectedIndex == 1)
                    minorAverage = ((minorAverage * getNumOfGrades(grades.first.Minor)) + userInput)/(getNumOfGrades(grades.first.Minor)+1);
                else if(selectedIndex == 2){
                    majorAverage = ((majorAverage * getNumOfGrades(grades.first.Major)) + userInput)/(getNumOfGrades(grades.first.Major)+1);
                }

                if(isAP(grades.first.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'secondGrades'){
                otherAverage = average(grades.second.Other);
                minorAverage = average(grades.second.Minor);
                majorAverage = average(grades.second.Major);

                if(selectedIndex == 0)
                    otherAverage = ((otherAverage * getNumOfGrades(grades.second.Other)) + userInput)/(getNumOfGrades(grades.second.Other)+1);
                else if(selectedIndex == 1)
                    minorAverage = ((minorAverage * getNumOfGrades(grades.second.Minor)) + userInput)/(getNumOfGrades(grades.second.Minor)+1);
                else if(selectedIndex == 2){
                    majorAverage = ((majorAverage * getNumOfGrades(grades.second.Major)) + userInput)/(getNumOfGrades(grades.second.Major)+1);
                }

                if(isAP(grades.second.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'thirdGrades'){
                otherAverage = average(grades.third.Other);
                minorAverage = average(grades.third.Minor);
                majorAverage = average(grades.third.Major);

                if(selectedIndex == 0)
                    otherAverage = ((otherAverage * getNumOfGrades(grades.third.Other)) + userInput)/(getNumOfGrades(grades.third.Other)+1);
                else if(selectedIndex == 1)
                    minorAverage = ((minorAverage * getNumOfGrades(grades.third.Minor)) + userInput)/(getNumOfGrades(grades.third.Minor)+1);
                else if(selectedIndex == 2){
                    majorAverage = ((majorAverage * getNumOfGrades(grades.third.Major)) + userInput)/(getNumOfGrades(grades.third.Major)+1);
                }

                if(isAP(grades.third.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'fourthGrades'){
                otherAverage = average(grades.fourth.Other);
                minorAverage = average(grades.fourth.Minor);
                majorAverage = average(grades.fourth.Major);

                if(selectedIndex == 0)
                    otherAverage = ((otherAverage * getNumOfGrades(grades.fourth.Other)) + userInput)/(getNumOfGrades(grades.fourth.Other)+1);
                else if(selectedIndex == 1)
                    minorAverage = ((minorAverage * getNumOfGrades(grades.fourth.Minor)) + userInput)/(getNumOfGrades(grades.fourth.Minor)+1);
                else if(selectedIndex == 2){
                    majorAverage = ((majorAverage * getNumOfGrades(grades.fourth.Major)) + userInput)/(getNumOfGrades(grades.fourth.Major)+1);
                }

                if(isAP(grades.fourth.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'fifthGrades'){
                otherAverage = average(grades.fifth.Other);
                minorAverage = average(grades.fifth.Minor);
                majorAverage = average(grades.fifth.Major);

                if(selectedIndex == 0)
                    otherAverage = ((otherAverage * getNumOfGrades(grades.fifth.Other)) + userInput)/(getNumOfGrades(grades.fifth.Other)+1);
                else if(selectedIndex == 1)
                    minorAverage = ((minorAverage * getNumOfGrades(grades.fifth.Minor)) + userInput)/(getNumOfGrades(grades.fifth.Minor)+1);
                else if(selectedIndex == 2){
                    majorAverage = ((majorAverage * getNumOfGrades(grades.fifth.Major)) + userInput)/(getNumOfGrades(grades.fifth.Major)+1);
                }

                if(isAP(grades.fifth.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'sixthGrades'){
                otherAverage = average(grades.sixth.Other);
                minorAverage = average(grades.sixth.Minor);
                majorAverage = average(grades.sixth.Major);

                if(selectedIndex == 0)
                    otherAverage = ((otherAverage * getNumOfGrades(grades.sixth.Other)) + userInput)/(getNumOfGrades(grades.sixth.Other)+1);
                else if(selectedIndex == 1)
                    minorAverage = ((minorAverage * getNumOfGrades(grades.sixth.Minor)) + userInput)/(getNumOfGrades(grades.sixth.Minor)+1);
                else if(selectedIndex == 2){
                    majorAverage = ((majorAverage * getNumOfGrades(grades.sixth.Major)) + userInput)/(getNumOfGrades(grades.sixth.Major)+1);
                }

                if(isAP(grades.sixth.name)){
                    classAverage = calculateAP(otherAverage, minorAverage, majorAverage);
                } else{
                    classAverage = calculateNoAP(otherAverage, minorAverage, majorAverage);
                }
            }
            if(view === 'seventhGrades'){
                otherAverage = average(grades.seventh.Other);
                minorAverage = average(grades.seventh.Minor);
                majorAverage = average(grades.seventh.Major);

                if(selectedIndex == 0)
                    otherAverage = ((otherAverage * getNumOfGrades(grades.seventh.Other)) + userInput)/(getNumOfGrades(grades.seventh.Other)+1);
                else if(selectedIndex == 1)
                    minorAverage = ((minorAverage * getNumOfGrades(grades.seventh.Minor)) + userInput)/(getNumOfGrades(grades.seventh.Minor)+1);
                else if(selectedIndex == 2){
                    majorAverage = ((majorAverage * getNumOfGrades(grades.seventh.Major)) + userInput)/(getNumOfGrades(grades.seventh.Major)+1);
                }

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

    setArrays();

    function getNumOfGrades(gradePath){
        let numOfGrades = 0;
        for(var i = 0; i<gradePath.length; i++){
            if(gradePath[i].indexOf('#') != 0){
                numOfGrades++;
            }
        }
        return numOfGrades;
    }
    
    function average(gradePath){
        let sum = 0;
        let numOfGrades = 0;
        for(var i = 0; i<gradePath.length; i++){
            if(gradePath[i].indexOf('#') != 0){
                sum += parseInt(gradePath[i].substring(0, gradePath[i].indexOf('#')))
                numOfGrades++;
            }
        }
        let average = Math.round(sum/numOfGrades);
        if(numOfGrades == 0)
            return 0;
        else
            return average;
    }

    function ifHitEnterKey(event){
        console.log(event.key);
        if(event.key == 'Enter')
            calculateWhatIf();
    }

    return(
        <Draggable handle='#header'>
            
            
            <div id='appWrapper'>
                <Header setPage={setPage}/>
                <div id='content'>
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
                                <button className='back-button' onClick={()=>setView('home')}></button>
                                <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                                <h1 className='title'>{grades.first.name}</h1>
                                <h1 className='individual-class-average'>{grades.first.average}</h1>
                            </div>
                            <div className='other-average'>
                                {grades.first.Other.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Other</h1>
                                        <h1>{average(grades.first.Other)}</h1>
                                        <div className='other-color-average'></div>
                                    </div>
                                ):(<></>)}
                                
                            </div>
                            <div className='minor-average'>
                                {grades.first.Minor.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Minor</h1>
                                        <h1>{average(grades.first.Minor)}</h1>
                                        <div className='minor-color-average'></div>
                                    </div>
                                    
                                ):<></>}
                            </div>
                            
                            <div className='major-average'>
                                {grades.first.Major.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Major</h1>
                                        <h1>{average(grades.first.Major)}</h1>
                                        <div className='major-color-average'></div>
                                    </div>
                                ):(<></>)}
                            </div>

                           
                                <div className='grade-display'>
                                    {grades.first.Major.length > 0 ? (
                                        <ol className='major-container'>
                                            {firstMajorNames.map((item, index) => <li className='major-grades' key={index}>{item}<div className='major-color'></div><span>{firstMajorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.first.Minor.length > 0 ? (
                                        <ol className='minor-container'>
                                            {firstMinorNames.map((item, index) => <li className='minor-grades' key={index}>{item}<div className='minor-color'></div><span>{firstMinorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.first.Other.length > 0 ? (
                                        <ol className='other-container'>
                                            {firstOtherNames.map((item, index) => <li className='other-grades' key={index}>{item}<div className='other-color'></div><span>{firstOtherGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                </div>
                            
                        </>
                    }
                    {view === 'secondGrades' &&
                        <>
                            <div className='grades-header'>
                                <button className='back-button' onClick={()=>setView('home')}></button>
                                <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                                <h1 className='title'>{grades.second.name}</h1>
                                <h1 className='individual-class-average'>{grades.second.average}</h1>
                            </div>
                            <div className='other-average'>
                                {grades.second.Other.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Other</h1>
                                        <h1>{average(grades.second.Other)}</h1>
                                        <div className='other-color-average'></div>
                                    </div>
                                ):(<></>)}
                                
                            </div>
                            <div className='minor-average'>
                                {grades.second.Minor.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Minor</h1>
                                        <h1>{average(grades.second.Minor)}</h1>
                                        <div className='minor-color-average'></div>
                                    </div>
                                    
                                ):<></>}
                            </div>
                            
                            <div className='major-average'>
                                {grades.second.Major.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Major</h1>
                                        <h1>{average(grades.second.Major)}</h1>
                                        <div className='major-color-average'></div>
                                    </div>
                                ):(<></>)}
                            </div>

                           
                                <div className='grade-display'>
                                    {grades.second.Major.length > 0 ? (
                                        <ol className='major-container'>
                                            {secondMajorNames.map((item, index) => <li className='major-grades' key={index}>{item}<div className='major-color'></div><span>{secondMajorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.second.Minor.length > 0 ? (
                                        <ol className='minor-container'>
                                            {secondMinorNames.map((item, index) => <li className='minor-grades' key={index}>{item}<div className='minor-color'></div><span>{secondMinorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.second.Other.length > 0 ? (
                                        <ol className='other-container'>
                                            {secondOtherNames.map((item, index) => <li className='other-grades' key={index}>{item}<div className='other-color'></div><span>{secondOtherGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                </div>
                            
                        </>
                    }
                    {view === 'thirdGrades' &&
                        <>
                           <div className='grades-header'>
                                <button className='back-button' onClick={()=>setView('home')}></button>
                                <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                                <h1 className='title'>{grades.third.name}</h1>
                                <h1 className='individual-class-average'>{grades.third.average}</h1>
                            </div>
                            <div className='other-average'>
                                {grades.third.Other.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Other</h1>
                                        <h1>{average(grades.third.Other)}</h1>
                                        <div className='other-color-average'></div>
                                    </div>
                                ):(<></>)}
                                
                            </div>
                            <div className='minor-average'>
                                {grades.third.Minor.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Minor</h1>
                                        <h1>{average(grades.third.Minor)}</h1>
                                        <div className='minor-color-average'></div>
                                    </div>
                                    
                                ):<></>}
                            </div>
                            
                            <div className='major-average'>
                                {grades.third.Major.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Major</h1>
                                        <h1>{average(grades.third.Major)}</h1>
                                        <div className='major-color-average'></div>
                                    </div>
                                ):(<></>)}
                            </div>

                           
                                <div className='grade-display'>
                                    {grades.third.Major.length > 0 ? (
                                        <ol className='major-container'>
                                            {thirdMajorNames.map((item, index) => <li className='major-grades' key={index}>{item}<div className='major-color'></div><span>{thirdMajorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.third.Minor.length > 0 ? (
                                        <ol className='minor-container'>
                                            {thirdMinorNames.map((item, index) => <li className='minor-grades' key={index}>{item}<div className='minor-color'></div><span>{thirdMinorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.third.Other.length > 0 ? (
                                        <ol className='other-container'>
                                            {thirdOtherNames.map((item, index) => <li className='other-grades' key={index}>{item}<div className='other-color'></div><span>{thirdOtherGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                </div>
                            
                        </>
                    }
                    {view === 'fourthGrades' &&
                        <>
                            <div className='grades-header'>
                                <button className='back-button' onClick={()=>setView('home')}></button>
                                <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                                <h1 className='title'>{grades.fourth.name}</h1>
                                <h1 className='individual-class-average'>{grades.fourth.average}</h1>
                            </div>
                            <div className='other-average'>
                                {grades.fourth.Other.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Other</h1>
                                        <h1>{average(grades.fourth.Other)}</h1>
                                        <div className='other-color-average'></div>
                                    </div>
                                ):(<></>)}
                                
                            </div>
                            <div className='minor-average'>
                                {grades.fourth.Minor.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Minor</h1>
                                        <h1>{average(grades.fourth.Minor)}</h1>
                                        <div className='minor-color-average'></div>
                                    </div>
                                    
                                ):<></>}
                            </div>
                            
                            <div className='major-average'>
                                {grades.fourth.Major.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Major</h1>
                                        <h1>{average(grades.fourth.Major)}</h1>
                                        <div className='major-color-average'></div>
                                    </div>
                                ):(<></>)}
                            </div>

                           
                                <div className='grade-display'>
                                    {grades.fourth.Major.length > 0 ? (
                                        <ol className='major-container'>
                                            {fourthMajorNames.map((item, index) => <li className='major-grades' key={index}>{item}<div className='major-color'></div><span>{fourthMajorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.third.Minor.length > 0 ? (
                                        <ol className='minor-container'>
                                            {fourthMinorNames.map((item, index) => <li className='minor-grades' key={index}>{item}<div className='minor-color'></div><span>{fourthMinorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.fourth.Other.length > 0 ? (
                                        <ol className='other-container'>
                                            {fourthOtherNames.map((item, index) => <li className='other-grades' key={index}>{item}<div className='other-color'></div><span>{fourthOtherGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                </div>
                            
                        </>
                    }
                    {view === 'fifthGrades' &&
                        <>
                            <div className='grades-header'>
                                <button className='back-button' onClick={()=>setView('home')}></button>
                                <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                                <h1 className='title'>{grades.fifth.name}</h1>
                                <h1 className='individual-class-average'>{grades.fifth.average}</h1>
                            </div>
                            <div className='other-average'>
                                {grades.fifth.Other.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Other</h1>
                                        <h1>{average(grades.fifth.Other)}</h1>
                                        <div className='other-color-average'></div>
                                    </div>
                                ):(<></>)}
                                
                            </div>
                            <div className='minor-average'>
                                {grades.fifth.Minor.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Minor</h1>
                                        <h1>{average(grades.fifth.Minor)}</h1>
                                        <div className='minor-color-average'></div>
                                    </div>
                                    
                                ):<></>}
                            </div>
                            
                            <div className='major-average'>
                                {grades.fifth.Major.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Major</h1>
                                        <h1>{average(grades.fifth.Major)}</h1>
                                        <div className='major-color-average'></div>
                                    </div>
                                ):(<></>)}
                            </div>

                           
                                <div className='grade-display'>
                                    {grades.fifth.Major.length > 0 ? (
                                        <ol className='major-container'>
                                            {fifthMajorNames.map((item, index) => <li className='major-grades' key={index}>{item}<div className='major-color'></div><span>{fifthMajorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.fifth.Minor.length > 0 ? (
                                        <ol className='minor-container'>
                                            {fifthMinorNames.map((item, index) => <li className='minor-grades' key={index}>{item}<div className='minor-color'></div><span>{fifthMinorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.fourth.Other.length > 0 ? (
                                        <ol className='other-container'>
                                            {fifthOtherNames.map((item, index) => <li className='other-grades' key={index}>{item}<div className='other-color'></div><span>{fifthOtherGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                </div>
                            
                        </>
                    }
                    {view === 'sixthGrades' &&
                        <>
                            <div className='grades-header'>
                                <button className='back-button' onClick={()=>setView('home')}></button>
                                <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                                <h1 className='title'>{grades.sixth.name}</h1>
                                <h1 className='individual-class-average'>{grades.sixth.average}</h1>
                            </div>
                            <div className='other-average'>
                                {grades.sixth.Other.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Other</h1>
                                        <h1>{average(grades.sixth.Other)}</h1>
                                        <div className='other-color-average'></div>
                                    </div>
                                ):(<></>)}
                                
                            </div>
                            <div className='minor-average'>
                                {grades.sixth.Minor.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Minor</h1>
                                        <h1>{average(grades.sixth.Minor)}</h1>
                                        <div className='minor-color-average'></div>
                                    </div>
                                    
                                ):<></>}
                            </div>
                            
                            <div className='major-average'>
                                {grades.sixth.Major.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Major</h1>
                                        <h1>{average(grades.sixth.Major)}</h1>
                                        <div className='major-color-average'></div>
                                    </div>
                                ):(<></>)}
                            </div>

                           
                                <div className='grade-display'>
                                    {grades.sixth.Major.length > 0 ? (
                                        <ol className='major-container'>
                                            {sixthMajorNames.map((item, index) => <li className='major-grades' key={index}>{item}<div className='major-color'></div><span>{sixthMajorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.sixth.Minor.length > 0 ? (
                                        <ol className='minor-container'>
                                            {sixthMinorNames.map((item, index) => <li className='minor-grades' key={index}>{item}<div className='minor-color'></div><span>{sixthMinorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.sixth.Other.length > 0 ? (
                                        <ol className='other-container'>
                                            {sixthOtherNames.map((item, index) => <li className='other-grades' key={index}>{item}<div className='other-color'></div><span>{sixthOtherGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                </div>
                            
                        </>
                    }
                    {view === 'seventhGrades' &&
                        <>
                            <div className='grades-header'>
                                <button className='back-button' onClick={()=>setView('home')}></button>
                                <button className='what-if-calculator' onClick={()=>setWhatIf('yes')}>What If</button>
                                <h1 className='title'>{grades.seventh.name}</h1>
                                <h1 className='individual-class-average'>{grades.seventh.average}</h1>
                            </div>
                            <div className='other-average'>
                                {grades.seventh.Other.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Other</h1>
                                        <h1>{average(grades.seventh.Other)}</h1>
                                        <div className='other-color-average'></div>
                                    </div>
                                ):(<></>)}
                                
                            </div>
                            <div className='minor-average'>
                                {grades.seventh.Minor.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Minor</h1>
                                        <h1>{average(grades.seventh.Minor)}</h1>
                                        <div className='minor-color-average'></div>
                                    </div>
                                    
                                ):<></>}
                            </div>
                            
                            <div className='major-average'>
                                {grades.seventh.Major.length > 0 ? (
                                    <div className='average-display'>
                                        <h1>Major</h1>
                                        <h1>{average(grades.seventh.Major)}</h1>
                                        <div className='major-color-average'></div>
                                    </div>
                                ):(<></>)}
                            </div>

                           
                                <div className='grade-display'>
                                    {grades.seventh.Major.length > 0 ? (
                                        <ol className='major-container'>
                                            {seventhMajorNames.map((item, index) => <li className='major-grades' key={index}>{item}<div className='major-color'></div><span>{seventhMajorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.seventh.Minor.length > 0 ? (
                                        <ol className='minor-container'>
                                            {seventhMinorNames.map((item, index) => <li className='minor-grades' key={index}>{item}<div className='minor-color'></div><span>{seventhMinorGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
                                    {grades.seventh.Other.length > 0 ? (
                                        <ol className='other-container'>
                                            {seventhOtherNames.map((item, index) => <li className='other-grades' key={index}>{item}<div className='other-color'></div><span>{seventhOtherGrades[index]}</span></li>)}
                                        </ol>
                                    ):(<></>)}
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
                                    <button className='view-grades' onClick={()=>setView('firstGrades')}></button>
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
                                    <button className='view-grades' onClick={()=>setView('secondGrades')}></button>
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
                                    <button className='view-grades' onClick={()=>setView('thirdGrades')}></button>
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
                                    <button className='view-grades' onClick={()=>setView('fourthGrades')}></button>
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
                                    <button className='view-grades' onClick={()=>setView('fifthGrades')}></button>
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
                                    <button className='view-grades' onClick={()=>setView('sixthGrades')}></button>
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
                                    <button className='view-grades' onClick={()=>setView('seventhGrades')}></button>
                                    <h1 className='class-average'><span>{grades.seventh.average}</span></h1>
                                </>
                                
                            ) : (
                                <h1 className='no-class-average'><span>{grades.seventh.average}</span></h1>
                            )}
                        </div>
                        </>
                    }  
                    </div>
                </div>
        </Draggable>
    );
}
export default GradesApp