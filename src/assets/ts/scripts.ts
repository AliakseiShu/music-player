import { data } from "./data.js";

const AudioController = {

  init() {
    this.initVariables()
    this.renderAudios()
  },

  initVariables() {
    this.audioList = document.querySelector(".items")
  },

  renderAudios() {
    data.forEach((item) => {
      const audio = new Audio(`./assets/audio/${item.link}`)
      audio.addEventListener("loadeddata", () => {
        console.log(audio.duration)
      })
    })
  }
}
AudioController.init()


