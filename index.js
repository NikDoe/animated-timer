const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

class Timer {
	constructor(durationInput, startBtn, pauseBtn, callbacks) {
		this.d = durationInput;
		this.s = startBtn;
		this.p = pauseBtn;

		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		this.s.addEventListener('click', this.start);
		this.p.addEventListener('click', this.pause);
	}

	start = () => {
		if (this.onStart) this.onStart();
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) this.onComplete();
		} else {
			this.timeRemaining = this.timeRemaining - 1;
			if (this.onTick) this.onTick();
		}
	};

	get timeRemaining() {
		return parseFloat(this.d.value);
	}

	set timeRemaining(time) {
		this.d.value = time;
	}
}

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
