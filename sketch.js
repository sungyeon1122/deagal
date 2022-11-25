let mySound;
function setup()
{
    soundFormats('mp3','ogg');
    mySound=loadSound('music');
    //mySound.play();
}

function loadMusic()
{
    mySound.play();
}