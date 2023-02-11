export default class TimeClock {
  config = {
    duration: 100,
    handler: () => {},
  };

  timer;

  context;

  constructor(config, context) {
    this.config = {
      ...this.config,
      config,
    };
    this.context = context;
    this.timer = setInterval(this.config.handler, this.config.duration);
  }

  stop() {
    clearInterval(this.timer);
  }
}
