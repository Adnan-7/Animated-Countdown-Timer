class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  tick = () => {
    if (this.durationInput.value <= 0) {
      this.pause;
    } else {
      const timeRemaining = parseFloat(this.durationInput.value);
      this.durationInput.value = timeRemaining - 1;
    }
  };
  pause = () => {
    clearInterval(this.interval);
  };
}
