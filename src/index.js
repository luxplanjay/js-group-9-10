const refs = {
  clockface: document.querySelector('.timer h1'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]')
};

const formatTime = time => {
  const date = new Date(time);

  const ms = String(date.getMilliseconds()).slice(0, 1);
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();

  return `${minutes}:${seconds}.${ms}`;
};

const timer = {
  id: null,
  startTime: null,
  active: false,
  start() {
    if (this.active) {
      return;
    }

    this.active = true;
    this.startTime = Date.now();

    this.id = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - this.startTime;
      const formattedTime = formatTime(deltaTime);

      refs.clockface.textContent = formattedTime;
    }, 100);
  },
  stop() {
    clearInterval(this.id);
    this.active = false;
  }
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
