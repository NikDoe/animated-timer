const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

class Timer {
	constructor(durationInput, startBtn, pauseBtn) {
		this.d = durationInput;
		this.s = startBtn;
		this.p = pauseBtn;

		this.s.addEventListener('click', this.start);
	}

	start = () => {
		console.log('Hi there');
	};
}

const timer = new Timer(durationInput, startBtn, pauseBtn);
