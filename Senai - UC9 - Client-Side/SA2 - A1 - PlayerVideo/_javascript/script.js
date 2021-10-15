var meuVideo = document.getElementById("playerCustomizado");

function PlayPause() {
    if (meuVideo.paused) {
        meuVideo.play();
    }else{
        meuVideo.pause();
    }
}

function Ampliar() {
    meuVideo.width = 900;
}

function Reduzir() {
    meuVideo.width = 300;
}

function TamanhoNormal() {
    meuVideo.width = 600;
}

function TelaCheia(){      

    meuVideo.requestFullscreen();  

}

function AumentarVolume() {
    meuVideo.volume += 0.1;
}

function DiminuirVolume() {
    meuVideo.volume -= 0.1;
}

function Mute() {
    if (meuVideo.muted) {
        meuVideo.muted = false;
    }else{
        meuVideo.muted = true;
    }
}  