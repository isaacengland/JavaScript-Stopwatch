const minutes = document.getElementsByClassName('minutes')[0];
const seconds = document.getElementsByClassName('seconds')[0];
const milliseconds = document.getElementsByClassName('milliseconds')[0];

startBtn = document.getElementsByClassName('startBtn');
resetBtn = document.getElementsByClassName('resetBtn');
stopBtn = document.getElementsByClassName('stopBtn');

function addMilliseconds() {
	milliseconds.innerHTML++;
}

function resetMilliseconds() {
	milliseconds.innerHTML = '00';
}

function addSeconds() {
	seconds.innerHTML++;
}

function resetSeconds() {
	seconds.innerHTML = '00';
}

function addMinutes() {
	minutes.innerHTML++;
}

function start() {
	setInterval(function () {
		if (milliseconds.innerHTML != 100) {
			addMilliseconds();
		} else {
			resetMilliseconds();
			if (seconds.innerHTML != 60) {
				addSeconds();
			} else {
				resetSeconds();
				if (minutes.innerHTML != 60) {
					addMinutes();
				}
			}
		}
	}, 1);
}
