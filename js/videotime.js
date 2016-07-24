//Get Duration and Current Time To display
var myVideo = document.getElementById("myVideo");//The movie
var textduration = document.getElementById("duration");//Movie Duration Text
var textcurrenttime = document.getElementById("currenttime");//Movie Current Time Text
myVideo.addEventListener("loadedmetadata",
function(){textduration.innerHTML = "/ &nbsp;" + convertTime(myVideo.duration);},
false);
myVideo.addEventListener("timeupdate",
function(){textcurrenttime.innerHTML = convertTime(myVideo.currentTime);},
false);
function convertTime(org){
var minute = Math.floor(org/60) % 60;
var second = Math.floor(org%60);
return( minute + ' : ' + second);
}