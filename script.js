console.log("Welcome to spotify");
// initialize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let mastersongs= document.getElementById('mastersongs');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "MAIN TENU RAHAT FATEH ALI", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Bulleya 128 Kbps", filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Meri Zaat Zar-e-Benishan ", filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Saaiyaan - Rahat Fateh Ali ", filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "dulhe ka shehra", filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Main Jahaan Rahoon - Rahat Fateh Ali", filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Mere Rashke Qamar - Rahat Fateh", filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Mere Bina Tu - Rahat Fateh Ali Khan", filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "Meri Ada Bhi (Ishq Ne Mere)", filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "Mujhko Teri Zaroorat Hai", filePath: "songs/10.mp3",coverPath: "covers/10.jpg"}
]

songItems.forEach((ele,i)=>{
    ele.getElementsByTagName("img")[0].src=songs[i].coverPath;
    ele.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})


audioElement.play();
// handle play/pause /click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate', ()=>{
// console.log('timeupdate');
// updating seekbar
 progress=((audioElement.currentTime/audioElement.duration)*100);
 myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value *audioElement.duration/100;

})

const  makeallplays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplays();
       
        songIndex =parseInt(e.target.id);
        console.log('index');
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= ` songs/${songIndex+1}.mp3 `;
        mastersongs.innerText = songs[songIndex].songName;

        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })

})
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=9){
    songIndex=0;
}
else{
    songIndex += 1;
}
audioElement.src= ` songs/${songIndex+1}.mp3 `;
mastersongs.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
if(songIndex<0){
    songIndex=0;
}
else{
    songIndex-=1;
}
audioElement.src= ` songs/${songIndex+1}.mp3 `;
mastersongs.innerText = songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})
var x = document. getElementById("myAudio"). duration;
