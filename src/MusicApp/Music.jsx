import './Music.css';
import $ from 'jquery';
import React, {useState} from "react";

function Music(){
    let key = 'AIzaSyCNAybsPBVbppt-NubmHZ8CPyjjEpCDwjk';
    let playlistID = 'PL0EgyyX8wk72nyT47_2nAYVfUCM8FOWVD';
    let URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
    let options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistID
    }
    let timesShowButtonClicked = 0;

    window.addEventListener('load', load())

    function load(){
        $.getJSON(URL, options, function(data){
            changeVid();
        })
    }

    function changeVid(){
        timesShowButtonClicked++;
        if(timesShowButtonClicked == 2){
            $('#video-container').html(`
            <iframe id='video' width='560' 
            height='315' 
            src='https://www.youtube.com/embed/?list=${playlistID}&autoplay=1&enablejsapi=1&loop=1&playlist=PL0EgyyX8wk72nyT47_2nAYVfUCM8FOWVD' 
            frameborder='0' 
            allow='autoplay;' 
            allowfullscreen></iframe>
            `);
        }
        if(timesShowButtonClicked != 1){
            const button = document.getElementsByTagName('button')[0];
            button.id = 'show-songs';
            document.getElementById('show-songs').onclick = showVideoPlayer();
        }
       
        
    }

    

    function showVideoPlayer(){
        if(timesShowButtonClicked%2 == 0){
            document.getElementById('video-container').className = 'show-songs-animation';
        } else{
            document.getElementById('video-container').className = 'hide-songs-animation';
        }
        
    }
    return(
        <div id="music-wrapper">
            <button id='load-music' className='play-button' onClick={()=>changeVid()}>The Maybe Man</button>
            <div id='video-container'></div>     
        </div>
    );
}

export default Music