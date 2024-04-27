import './Music.css';
import $ from 'jquery';
import React, {useState, useEffect} from "react";

function Music({page}){
    let key = 'AIzaSyCNAybsPBVbppt-NubmHZ8CPyjjEpCDwjk';
    let playlistID = 'PL0EgyyX8wk72nyT47_2nAYVfUCM8FOWVD';
    let URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
    let options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistID
    }
    

    function changeVid(){
        if(localStorage.getItem('timesShowButtonClicked') !== null && page == 'home'){
            localStorage.setItem('timesShowButtonClicked', Number(localStorage.getItem('timesShowButtonClicked')) + 1)
        } else if(localStorage.getItem('timesShowButtonClicked') === null && page == 'home'){
            localStorage.setItem('timesShowButtonClicked', 0)
        }
        if(Number(localStorage.getItem('timesShowButtonClicked')) == 1 && page == 'home'){
            $('#video-container').html(`
            <iframe id='video' width='560' 
            height='315' 
            src='https://www.youtube.com/embed/?list=${playlistID}&autoplay=1&enablejsapi=1&loop=1&playlist=PL0EgyyX8wk72nyT47_2nAYVfUCM8FOWVD' 
            frameborder='0' 
            allow='autoplay;' 
            allowfullscreen></iframe>
            `);
        }
        if(localStorage.getItem('timesShowButtonClicked') > 1 && page == 'home'){
            const button = document.getElementsByName('music-button')[0];
            button.id = 'show-songs';
            document.getElementById('show-songs').onclick = showVideoPlayer();
        }
       
        
    }

    

    function showVideoPlayer(){
        if(localStorage.getItem('timesShowButtonClicked')%2 == 0 && localStorage.getItem('timesShowButtonClicked') != 0){
            document.getElementById('video-container').className = 'show-songs-animation';
        } else{
            document.getElementById('video-container').className = 'hide-songs-animation'; 
        }
        
    }
    return(
        <div id="music-wrapper">
            <button name='music-button' id='load-music' className='play-button' onClick={()=>changeVid()}>The Maybe Man</button>
            <div id='video-container'></div>     
        </div>
    );
}

export default Music