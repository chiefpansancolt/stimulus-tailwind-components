---
layout: content
title: Stimulus Tailwind Components - Modal
header: Modal
subheader: Modal Component
details: The modal component is based on a item to show overtop of all other components in a site. This is styled based on TailwindUI. This supports the ability to be manually cleared and/or auto dismissed based on a given wait time.
permalink: /docs/modal
---

## Playground

Want to see them in action? Check out the examples [here]({{ site.links.playground.modal | relative_url }}) for the ability to play with notifications.

## Attributes

### Targets

| Attribute  | Type   | Required | Details                                             | Syntax                           |
| ---------- | ------ | -------- | --------------------------------------------------- | -------------------------------- |
| container  | String | true     | Target for the container of the Modal instance      | `data-modal-target="container"`  |
| background | String | true     | Target for the container of the background instance | `data-modal-target="background"` |
| view       | String | true     | Target for the container of the view instance       | `data-modal-target="view"`       |

### Classes

| Attribute      | Required | Type   | Details                                                      | Syntax                                                                                 |
| -------------- | -------- | ------ | ------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| hide           | true     | Array  | Detail classes for hidding the modal entirely                | `data-modal-hide-class="hidden"`                                                       |
| entering       | true     | Array  | Detail class for defining the animation and duration classes | `data-modal-entering-class="ease-out duration-300"`                                    |
| leaving        | true     | Array  | Detail class for defining the animation and duration classes | `data-modal-leaving-class="ease-in duration-200"`                                      |
| toBackground   | true     | String | Detail classes for visibility of background entering         | `data-modal-to-background-class="opacity-100"`                                         |
| fromBackground | true     | String | Detail classes for visibility of background leaving          | `data-modal-from-background-class="opacity-0"`                                         |
| toView         | true     | Array  | Detail classes for visibility of view entering               | `data-modal-leaving-from-class="opacity-100 translate-y-0 sm:scale-100"`               |
| fromView       | true     | Array  | Detail classes for visibility of view leaving                | `data-modal-leaving-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"` |

### Values

| Attribute  | Type    | Default | Required | Details                                                                | Syntax                                |
| ---------- | ------- | ------- | -------- | ---------------------------------------------------------------------- | ------------------------------------- |
| allowClose | Boolean | true    | false    | Indicates if a modal can be closed when the background close is active | `data-modal-allow-close-value="true"` |

## Methods

### Actions

| Function            | Details                                                                                                            | Syntax                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| open()              | This open button will show the modal in the data-controller frame                                                  | `data-action="modal#open"`                            |
| close()             | This close button will dismiss the modal in the data-controller frame                                              | `data-action="modal#close"`                           |
| closeBackground()   | This button will allow a user to click outside the view to close a modal when present on the same target=container | `data-action="click->modal#closeBackground"`          |
| closeWithKeyboard() | This button will allow a user to click esc key to close a modal when present on the same target=container          | `data-action="keyup@window->modal#closeWithKeyboard"` |

---

## Basic Usage

The Notification Component supports the ability to define the entering and exiting affect that the element goes trough showing and hiding. This also supports the ability to auto dismiss the notification after x amount of milliseconds and the ability to click a button to dismiss the notification. When a notification is dismissed via Manual or Auto it will remove the notification from the DOM.

### Option #1

This option is without a close ability on the modal.

```html
<div
  data-controller="modal"
  data-modal-hide-class="hidden"
  data-modal-entering-class="ease-out duration-300"
  data-modal-leaving-class="ease-in duration-200"
  data-modal-to-background-class="opacity-100"
  data-modal-from-background-class="opacity-0"
  data-modal-to-view-class="opacity-100 translate-y-0 sm:scale-100"
  data-modal-from-view-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
>
  <button data-action="click->modal#open" type="button" class="mt-auto inline-flex rounded-xl bg-emerald-500 py-2 px-4 text-slate-900"> Show Advanced Modal </button>
  <div data-modal-target="container" class="fixed inset-0 z-20 hidden overflow-y-auto">
    <div class="flex h-2/3 items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div data-modal-target="background" class="fixed inset-0 opacity-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="inline-block align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
        data-modal-target="view"
        class="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="absolute top-0 right-0 pt-4 pr-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50" data-ignore="true"> Header Title </h3>
            <div class="mt-6"> Im all the data that shows </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Option #2

This option is everything available with the modal.

- Ability to close with a button
- Ability to close with the background click
- Ability to close with keyup ESC

```html
<div
  data-controller="modal"
  data-modal-allow-close-value="true"
  data-modal-hide-class="hidden"
  data-modal-entering-class="ease-out duration-300"
  data-modal-leaving-class="ease-in duration-200"
  data-modal-to-background-class="opacity-100"
  data-modal-from-background-class="opacity-0"
  data-modal-to-view-class="opacity-100 translate-y-0 sm:scale-100"
  data-modal-from-view-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
>
  <button data-action="click->modal#open" type="button" class="mt-auto inline-flex rounded-xl bg-emerald-500 py-2 px-4 text-slate-900"> Show Modal </button>
  <div data-modal-target="container" data-action="click->modal#closeBackground keyup@window->modal#closeWithKeyboard" class="fixed inset-0 z-20 hidden overflow-y-auto">
    <div class="flex h-2/3 items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div data-modal-target="background" class="fixed inset-0 opacity-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="inline-block align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
        data-modal-target="view"
        class="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="absolute top-0 right-0 pt-4 pr-4">
          <button
            data-action="click->modal#close"
            type="button"
            class="rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:text-gray-50 dark:hover:text-gray-200"
          >
            <span class="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50" data-ignore="true"> Header Title </h3>
            <div class="mt-6"> Im all the data that shows </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```
