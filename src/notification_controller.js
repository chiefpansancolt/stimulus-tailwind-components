import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
	static targets = ['container'];
	static classes = ['entering', 'enteringTo', 'enteringFrom', 'leaving', 'leavingTo', 'leavingFrom'];
	static values = {
		autoDismiss: { type: Boolean, default: false },
		dismissAfter: Number,
		enterTimeout: { type: Number, default: 1000 },
		leaveTimeout: { type: Number, default: 1000 },
	};

	initialize() {
		if (this.autoDismissValue) {
			setTimeout(() => {
				this._hide();
			}, this.dismissAfterValue);
		}
	}

	connected() {
		setTimeout(() => {
			this._show();
		}, 1000);
	}

	close() {
		this._hide();
	}

	_show() {
		this.containerTarget.classList.add(...this.enteringClasses);

		requestAnimationFrame(() => {
			this.containerTarget.classList.add(...this.enteringToClasses);
			this.containerTarget.classList.remove(...this.enteringFromClasses);
			setTimeout(() => {
				this.containerTarget.classList.remove(...this.enteringClasses);
			}, this.enterTimeoutValue);
		});
	}

	_hide() {
		this.containerTarget.classList.add(...this.leavingToClasses);
		this.containerTarget.classList.remove(...this.leavingFromClasses);
		this.containerTarget.classList.add(...this.leavingClasses);

		setTimeout(() => {
			this.containerTarget.classList.remove(...this.leavingClasses);
		}, this.leaveTimeoutValue);
	}
}
