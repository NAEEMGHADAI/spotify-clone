console.log("Hello World");
//Intialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
	{
		songName: "Salam-e-Ishq",
		filePath: "songs/1.mp3",
		coverPath: "covers/1.jpg",
	},
];

//audioElement.play();

//Handling the play button
console.log(masterPlay);
masterPlay.addEventListener("click", () => {
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-play-circle");
		masterPlay.classList.add("fa-pause-circle");
	} else {
		masterPlay.classList.add("fa-play-circle");
		masterPlay.classList.remove("fa-pause-circle");
		audioElement.pause();
	}
});

//Listen to events
myProgressBar.addEventListener("timeupdate", () => {
	console.log("timeupdate");
});
