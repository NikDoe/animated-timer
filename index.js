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
		if (this.timeRemaining <= 0) this.pause();
		else this.timeRemaining = this.timeRemaining - 1;
	};

	get timeRemaining() {
		return parseFloat(this.d.value);
	}

	set timeRemaining(time) {
		this.d.value = time;
	}
}

const timer = new Timer(durationInput, startBtn, pauseBtn);
