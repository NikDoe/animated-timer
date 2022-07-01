const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

class Timer {
	constructor(durationInput, startBtn, pauseBtn) {
		this.d = durationInput;
		this.s = startBtn;
		this.p = pauseBtn;

		this.s.addEventListener('click', this.start);
		this.p.addEventListener('click', this.pause);
	}

	start = () => {
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		const timeRemaining = parseFloat(this.d.value);
		this.d.value = timeRemaining - 1;
	};
}

const timer = new Timer(durationInput, startBtn, pauseBtn);
