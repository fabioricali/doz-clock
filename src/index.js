import Doz from "doz";

new Doz({
  root: "#app",
  props: {
    time: "--:--:--"
  },
  template() {
    return `
      <div>
        ${this.props.time}
      </div>
    `;
  },
  onCreate() {
    setInterval(() => {
      this.props.time = new Date().toLocaleTimeString();
    }, 1000);
  }
});
