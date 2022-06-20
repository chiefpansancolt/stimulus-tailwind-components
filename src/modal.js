import { Controller } from '@hotwired/stimulus'

const CONSTANTS = {
  SCROLL: ['fixed', 'inset-x-0', 'overflow-hidden'],
}

export default class extends Controller {
  static targets = ['container', 'background', 'view']
  static classes = ['hide', 'entering', 'leaving', 'toBackground', 'fromBackground', 'toView', 'fromView']
  static values = {
    allowClose: { type: Boolean, default: true },
  }

  disconnect() {
    this.close()
  }

  open(e) {
    e.target.blur()
    this._lockScroll()
    this.containerTarget.classList.remove(this.hideClass)

    requestAnimationFrame(() => {
      this.backgroundTarget.classList.add(...this.enteringClasses)
      this.backgroundTarget.classList.add(this.toBackgroundClass)
      this.viewTarget.classList.add(...this.enteringClasses)
      this.viewTarget.classList.add(...this.toViewClasses)
      setTimeout(() => {
        this.backgroundTarget.classList.remove(...this.leavingClasses)
        this.backgroundTarget.classList.remove(this.fromBackgroundClass)
        this.viewTarget.classList.remove(...this.leavingClasses)
        this.viewTarget.classList.remove(...this.toViewClasses)
      }, 100)
    })
  }

  close() {
    this._unlockScroll()

    requestAnimationFrame(() => {
      this.backgroundTarget.classList.remove(...this.enteringClasses)
      this.backgroundTarget.classList.remove(this.toBackgroundClass)
      this.viewTarget.classList.remove(...this.enteringClasses)
      this.viewTarget.classList.remove(...this.toViewClasses)
      this.backgroundTarget.classList.add(...this.leavingClasses)
      this.backgroundTarget.classList.add(this.fromBackgroundClass)
      this.viewTarget.classList.add(...this.leavingClasses)
      this.viewTarget.classList.add(...this.toViewClasses)
      setTimeout(() => {
        this.containerTarget.classList.add(this.hideClass)
      }, 100)
    })
  }

  closeBackground(e) {
    if (this.allowCloseValue && e.target === this.backgroundTarget.children[0]) {
      this.close()
    }
  }

  closeWithKeyboard(e) {
    if (e.keyCode === 27 && !this.containerTarget.classList.contains(this.hideClass)) {
      this.close()
    }
  }

  _lockScroll() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = `${scrollbarWidth}px`

    this._saveScrollPosition()

    document.body.classList.add(...CONSTANTS.SCROLL)
    document.body.style.top = `-${this.scrollPosition}px`
  }

  _unlockScroll() {
    document.body.style.paddingRight = null
    document.body.classList.remove(...CONSTANTS.SCROLL)

    this._restoreScrollPosition()

    document.body.style.top = null
  }

  _saveScrollPosition() {
    this.scrollPosition = window.pageYOffset || document.body.scrollTop
  }

  _restoreScrollPosition() {
    document.documentElement.scrollTop = this.scrollPosition
  }
}
