var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '635',
    width: '640',
    
    playerVars: {
      'listType': "playlist",
      "list": "PLsGH4IgLsAlg45rmFJk5O52fyIaOUIb7E",
      "rel": 0,
      "modestbranding" : 1,
      'autohide':1,
      'controls' : 0,
      'showinfo':0,
      
    },
    
    
  });
}


    var isVideoPlaying = false;
    var videoScreen = document.getElementById("screenOff"); 
  
    function toogleOnOff(){
      if (isVideoPlaying){
        pauseVideo();
      }else{
        playVideo();
        document.getElementById('screenGlitch').style.display='block';
        setTimeout(function(){
        document.getElementById('screenGlitch').style.opacity = '0';
      },1500);
      }
    }

    function playVideo(){
      player.playVideo();
      isVideoPlaying = true;
      videoScreen.style.display = "none";

      document.getElementById('screenGlitch').style.display='block';
      setTimeout(function(){
        document.getElementById('screenGlitch').style.opacity = '0';
      },1500);
    }

    function pauseVideo(){
      player.pauseVideo();
      isVideoPlaying = false;
      videoScreen.style.display="block";
    }

    var powerButton = document.getElementById("powerButton");
    var nextButton = document.getElementById('nextButton');
    var prevButton = document.getElementById('prevButton');
    
    powerButton.addEventListener("click",toogleOnOff);
    nextButton.addEventListener("click", playNextVideo);
    prevButton.addEventListener("click", playPreviousVideo);
   

    function playNextVideo(){
    if (isVideoPlaying=true){
      player.nextVideo();
      document.getElementById('screenGlitch').style.display='block';
      setTimeout(function(){
        document.getElementById('screenGlitch').style.opacity = '0';
      },1500);
    }else playNextVideo.disable=true;
    
    
    }
 
    function playPreviousVideo(){
    if (isVideoPlaying=true){
      player.previousVideo();

      document.getElementById('screenGlitch').style.display='block';
      setTimeout(function(){
        document.getElementById('screenGlitch').style.opacity = '0';
      },1500);
    }else playPreviousVideo.disable=true;  
    
    }



    
    
    