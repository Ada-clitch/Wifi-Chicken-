//setup and utils 
const game = document.getElementById("game");
game.focus();

function w(){ return game.clientWidth;}
function H(){ return game.clientHeight;}
function clamp(v,a,b){
    return Math.max(a,Math.min(b,v));
}
//rand(0,5) ==>3,4
function rand(min,max){
    return Math.random()*(max-min)+min;
}

//choose([1,3,5]) ==>5
function choose(arr){
    return arr[ Math.floor(Math.random*arr.length)]
}

function now(){
    return performance.now();
}
const AudioEngine =(()=>{
    const sounds ={
        music: new Audio('asset/music.mp3')
    };
    function playSounds (){
        if(!sounds)
            return;
    }
})