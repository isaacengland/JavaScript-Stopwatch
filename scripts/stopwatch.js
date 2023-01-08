const minutesLabel = document.getElementsByClassName('minutes')[0];
const secondsLabel = document.getElementsByClassName('seconds')[0];
const millisecondsLabel = document.getElementsByClassName('milliseconds')[0];

let minutes = 00;
let seconds = 00;
let milliseconds = 00;

startBtn = document.getElementsByClassName('startBtn');
resetBtn = document.getElementsByClassName('resetBtn');
stopBtn = document.getElementsByClassName('stopBtn');

let timerRunning = false;
let interval;

function pad(n) {
	if (n < 10) {
		return '0' + n;
	} else {
		return n;
	}
}

function addMilliseconds() {
	milliseconds++;
	millisecondsLabel.innerHTML = pad(milliseconds);
}

function resetMilliseconds() {
	milliseconds = 00;
	millisecondsLabel.innerHTML = '00';
}

function addSeconds() {
	seconds++;
	secondsLabel.innerHTML = pad(seconds);
}

function resetSeconds() {
	seconds = 00;
	secondsLabel.innerHTML = '00';
}

function addMinutes() {
	minutes++;
	minutesLabel.innerHTML = pad(minutes);
}

function start() {
	clearInterval(interval);
	timerRunning = true;
	interval = setInterval(function () {
		if (timerRunning) {
			if (milliseconds != 99) {
				addMilliseconds();
			} else {
				resetMilliseconds();
				if (seconds != 59) {
					addSeconds();
				} else {
					resetSeconds();
					if (minutes != 59) {
						addMinutes();
					}
				}
			}
		}
	}, 1);
}

function stop() {
	timerRunning = false;
}

function reset() {
	milliseconds = 00;
	seconds = 00;
	minutes = 00;
	millisecondsLabel.innerHTML = '00';
	secondsLabel.innerHTML = '00';
	minutesLabel.innerHTML = '00';
}
