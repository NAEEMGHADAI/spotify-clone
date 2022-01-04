//Intialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
	{
		songName: "It's Always blue : Song from legion",
		songLength: "3:50",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Trap Cartel",
		songLength: "2:33",
		filePath: "songs/2.mp3",
		coverPath: "covers/2.jpg",
	},
	{
		songName: "They Mad",
		songLength: "4:33",
		filePath: "songs/3.mp3",
		coverPath: "covers/3.jpg",
	},
	{
		songName: "plug walk",
		songLength: "4:27",
		filePath: "songs/4.mp3",
		coverPath: "covers/4.jpg",
	},
	{
		songName: "song title",
		songLength: "3:28",
		filePath: "songs/5.mp3",
		coverPath: "covers/5.jpg",
	},
	{
		songName: "Sleeping at night",
		songLength: "3:28",
		filePath: "songs/6.mp3",
		coverPath: "covers/6.jpg",
	},
	{
		songName: "Back it up",
		songLength: "4:33",
		filePath: "songs/7.mp3",
		coverPath: "covers/7.jpg",
	},
	{
		songName: "Lady 1",
		songLength: "3:50",
		filePath: "songs/8.mp3",
		coverPath: "covers/8.jpg",
	},
	{
		songName: "Lady 2",
		songLength: "3:28",
		filePath: "songs/9.mp3",
		coverPath: "covers/9.jpg",
	},
	{
		songName: "True love",
		songLength: "4:27",
		filePath: "songs/10.mp3",
		coverPath: "covers/10.jpg",
	},
];

songItems.forEach((song, i) => {
	song.getElementsByTagName("img")[0].src = songs[i].coverPath;
	song.getElementsByTagName("span")[0].innerText = songs[i].songName.slice(
		0,
		9
	);
	song.getElementsByClassName("songLength")[0].innerText = songs[i].songLength;
});

//audioElement.play();

//Handling the play button

masterPlay.addEventListener("click", () => {
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-play-circle");
		masterPlay.classList.add("fa-pause-circle");
		gif.style.opacity = 1;
	} else {
		masterPlay.classList.add("fa-play-circle");
		masterPlay.classList.remove("fa-pause-circle");
		audioElement.pause();
		makeAllPlay();
		gif.style.opacity = 0;
	}
});

//Listen to events
audioElement.addEventListener("timeupdate", () => {
	//update seek bar
	progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
	myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
	audioElement.currentTime =
		(audioElement.duration * myProgressBar.value) / 100;
});

const makeAllPlay = () => {
	Array.from(document.getElementsByClassName("songItemPlay")).forEach(
		(element) => {
			element.classList.add("fa-play-circle");
		}
	);
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
	(element) => {
		element.addEventListener("click", (e) => {
			if (e.target.classList.contains("fa-pause-circle")) {
				e.target.classList.remove("fa-pause-circle");
				e.target.classList.add("fa-play-circle");
				masterPlay.classList.add("fa-play-circle");
				masterPlay.classList.remove("fa-pause-circle");
				audioElement.pause();
				gif.style.opacity = 0;
			} else {
				makeAllPlay();
				songIndex = parseInt(e.target.id);
				e.target.classList.remove("fa-play-circle");
				e.target.classList.add("fa-pause-circle");
				audioElement.src = `songs/${songIndex + 1}.mp3`;
				audioElement.play();
				audioElement.currentTime = 0;
				masterPlay.classList.remove("fa-play-circle");
				masterPlay.classList.add("fa-pause-circle");
				gif.style.opacity = 1;
				masterSongName.innerText = songs[songIndex].songName;
			}
		});
	}
);

document.getElementById("previous").addEventListener("click", () => {
	if (songIndex > 0) {
		songIndex--;
	} else {
		songIndex = songs.length - 1;
	}
	audioElement.src = `songs/${songIndex + 1}.mp3`;
	audioElement.play();
	audioElement.currentTime = 0;
	masterPlay.classList.remove("fa-play-circle");
	masterPlay.classList.add("fa-pause-circle");
	masterSongName.innerText = songs[songIndex].songName;
	gif.style.opacity = 1;
});

document.getElementById("next").addEventListener("click", () => {
	if (songIndex < songs.length - 1) {
		songIndex++;
	} else {
		songIndex = 0;
	}
	audioElement.src = `songs/${songIndex + 1}.mp3`;
	audioElement.play();
	audioElement.currentTime = 0;
	masterPlay.classList.remove("fa-play-circle");
	masterPlay.classList.add("fa-pause-circle");
	masterSongName.innerText = songs[songIndex].songName;
	gif.style.opacity = 1;
});
