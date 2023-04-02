import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggle", "onIcon", "offIcon", "container", "input"]
  static classes = [
    "onIcon",
    "offIcon",
    "onToggle",
    "offToggle",
    "entering",
    "leaving",
    "onBackground",
    "offBackground",
  ]
  static values = {
    enterTimeout: { type: Number, default: 100 },
    leaveTimeout: { type: Number, default: 75 },
    status: Boolean,
  }

  toggle() {
    this.statusValue = !this.statusValue
  }

  statusValueChanged() {
    if (this.statusValue) {
      this._on()
    } else {
      this._off()
    }
    if (this.hasInputTarget) {
      const e = new Event("change")
      this.inputTarget.checked = this.statusValue
      this.inputTarget.dispatchEvent(e)
    }
  }

  _on() {
    this.containerTarget.classList.remove(this.offBackgroundClass)
    this.containerTarget.classList.add(this.onBackgroundClass)
    this.toggleTarget.classList.remove(this.offToggleClass)
    this.toggleTarget.classList.add(this.onToggleClass)

    if (this.hasOnIconTarget && this.hasOffIconTarget) {
      this.onIconTarget.classList.remove(...this.leavingClasses)
      this.onIconTarget.classList.add(...this.enteringClasses)

      requestAnimationFrame(() => {
        this.onIconTarget.classList.remove(this.offIconClass)
        this.offIconTarget.classList.remove(this.onIconClass)
        this.onIconTarget.classList.add(this.onIconClass)
        this.offIconTarget.classList.add(this.offIconClass)

        setTimeout(() => {
          this.offIconTarget.classList.remove(...this.enteringClasses)
        }, this.enterTimeoutValue)
      })
    }
  }

  _off() {
    this.containerTarget.classList.remove(this.onBackgroundClass)
    this.containerTarget.classList.add(this.offBackgroundClass)
    this.toggleTarget.classList.remove(this.onToggleClass)
    this.toggleTarget.classList.add(this.offToggleClass)

    if (this.hasOnIconTarget && this.hasOffIconTarget) {
      this.offIconTarget.classList.remove(...this.leavingClasses)
      this.offIconTarget.classList.add(...this.enteringClasses)

      requestAnimationFrame(() => {
        this.onIconTarget.classList.remove(this.onIconClass)
        this.offIconTarget.classList.remove(this.offIconClass)
        this.onIconTarget.classList.add(this.offIconClass)
        this.offIconTarget.classList.add(this.onIconClass)

        setTimeout(() => {
          this.onIconTarget.classList.remove(...this.enteringClasses)
        }, this.leaveTimeoutValue)
      })
    }
  }
}
