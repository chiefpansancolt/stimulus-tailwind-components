import { Controller } from '@hotwired/stimulus'

const CONSTANTS = {
  LIGHT: 'light',
  DARK: 'dark',
}

export default class extends Controller {
  static targets = ['body']
  static classes = ['dark']
  static values = {
    storageName: { type: String, default: 'color-theme' },
    useSystemPref: { type: Boolean, default: true },
  }

  initialize() {
    let theme = CONSTANTS.LIGHT
    if (this.useSystemPrefValue) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = CONSTANTS.DARK
      }
    }

    if (localStorage.getItem(this.storageNameValue) != null) {
      theme = localStorage.getItem(this.storageNameValue)
    }

    if (theme === CONSTANTS.DARK) {
      this.bodyTarget.classList.add(this.darkClass)
    }

    localStorage.setItem(this.storageNameValue, theme)
  }

  toggle() {
    if (localStorage.getItem(this.storageNameValue)) {
      if (localStorage.getItem(this.storageNameValue) === CONSTANTS.LIGHT) {
        this.bodyTarget.classList.add(this.darkClass)
        localStorage.setItem(this.storageNameValue, CONSTANTS.DARK)
      } else {
        this.bodyTarget.classList.remove(this.darkClass)
        localStorage.setItem(this.storageNameValue, CONSTANTS.LIGHT)
      }
    } else {
      if (this.bodyTarget.classList.contains(CONSTANTS.DARK)) {
        this.bodyTarget.classList.remove(this.darkClass)
        localStorage.setItem(this.storageNameValue, CONSTANTS.LIGHT)
      } else {
        this.bodyTarget.classList.add(this.darkClass)
        localStorage.setItem(this.storageNameValue, CONSTANTS.DARK)
      }
    }
  }
}
