const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

const timer = new Timer(durationInput, startBtn, pauseBtn, {
	onStart() {
		console.log('Timer started');
	},
	onTick() {
		console.log('Timer is ticked down');
	},
	onComplete() {
		console.log('Timer is completed');
	},
});
