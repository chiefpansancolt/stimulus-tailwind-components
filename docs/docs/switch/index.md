---
layout: content
title: Stimulus Tailwind Components - Switch
header: Switch
subheader: Switch Component (Toggle)
details: The Switch component enables you to show an on/off switch also known as a toggle, that work with the theme component and supports inputs.
permalink: /docs/switch
---

## Playground

Want to see them in action? Check out the examples [here]({{ site.links.playground.switch | relative_url }}) for the ability to play with theme.

## Attributes

### Targets

| Attribute | Type   | Required | Details                                                  | Syntax                           |
| --------- | ------ | -------- | -------------------------------------------------------- | -------------------------------- |
| toggle    | String | true     | Target for the toggle                                    | `data-switch-target="toggle"`    |
| onIcon    | String | false    | Target for the on icon                                   | `data-switch-target="onIcon"`    |
| offIcon   | String | false    | Target for the off icon                                  | `data-switch-target="offIcon"`   |
| container | String | true     | Target for the container of the toggle                   | `data-switch-target="container"` |
| input     | String | false    | Target for the input checkbox to set the value on change | `data-switch-target="input"`     |

### Classes

| Attribute     | Required | Type   | Details                                                      | Syntax                                               |
| ------------- | -------- | ------ | ------------------------------------------------------------ | ---------------------------------------------------- |
| onIcon        | false    | string | Detail class for defining visibility for an on icon          | `data-switch-on-icon-class="opacity-100"`            |
| offIcon       | false    | string | Detail class for defining visibility for an off icon         | `data-switch-off-icon-class="opacity-0"`             |
| onToggle      | true     | string | Detail class for defining the transition of the on toggle    | `data-switch-on-toggle-class="translate-x-5"`        |
| offToggle     | true     | string | Detail class for defining the tranision of the off toggle    | `data-switch-off-toggle-class="translate-x-0"`       |
| entering      | true     | array  | Detail class for defining the animation and duration classes | `data-switch-entering-class="ease-out duration-150"` |
| leaving       | true     | array  | Detail class for defining the animation and duration classes | `data-switch-leaving-class="ease-in duration-100"`   |
| onBackground  | true     | string | Detail class for defining background color for on            | `data-switch-on-background-class="bg-purple-700"`    |
| offBackground | true     | string | Detail class for defining background color for off           | `data-switch-off-background-class="bg-gray-200"`     |

### Values

| Attribute    | Type    | Default | Required | Details                                                                     | Syntax                                  |
| ------------ | ------- | ------- | -------- | --------------------------------------------------------------------------- | --------------------------------------- |
| enterTimeout | Number  | 100     | false    | Used to define how long to wait to remove the final classes when toggle on  | `data-switch-enter-timeout-value="100"` |
| leaveTimeout | Number  | 75      | false    | Used to define how long to wait to remove the final classes when toggle off | `data-switch-leave-timeout-value="75"`  |
| status       | Boolean | false   | false    | The value of the toggle true for on, false for off                          | `data-switch-status-value="false"`      |

## Methods

### Actions

| Function | Details                                                       | Syntax                        |
| -------- | ------------------------------------------------------------- | ----------------------------- |
| toggle() | This toggle action will toggle the value from its current set | `data-action="switch#toggle"` |

---

## Basic Usage

The Switch component if also known as a toggle, allows a user to click and toggle from one side to the other. This supports the ability to pair with the Theme component to create a switch for enabling and disabling Dark Mode. The Switch also support pairing with a input field to set the checked value when the toggle is clicked.

### Option #1

This option showcases being paired with the Theme Component for enabling and disabling in Dark Mode.

```html
<!DOCTYPE html>
<html lang="en" data-controller="theme" data-theme-target="body" data-theme-dark-class="dark">
  <head>
    <meta charset="utf-8" />
    <title>{{ page.title }}</title>
  </head>
  <body>
    <button
      type="button"
      data-controller="switch"
      data-action="click->switch#toggle click->theme#toggle"
      data-switch-target="container"
      data-theme-target="switch"
      data-switch-entering-class="ease-out duration-150"
      data-switch-leaving-class="ease-in duration-100"
      data-switch-enter-timeout-value="100"
      data-switch-leave-timeout-value="75"
      data-switch-on-icon-class="opacity-100"
      data-switch-off-icon-class="opacity-0"
      data-switch-on-toggle-class="translate-x-7"
      data-switch-off-toggle-class="translate-x-0"
      data-switch-on-background-class="bg-purple-700"
      data-switch-off-background-class="bg-gray-200"
      data-switch-status-value="false"
      class="relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
    >
      <span class="sr-only">Toggle Dark Mode On/Off</span>
      <span data-switch-target="toggle" class="relative inline-block h-6 w-6 transform rounded-full bg-gray-50 shadow ring-0 transition">
        <span data-switch-target="offIcon" class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span data-switch-target="onIcon" class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </span>
      </span>
    </button>
  </body>
</html>
```

### Option #2

This option is a basic implementation of the switch/toggle

```html
<button
  type="button"
  data-controller="switch"
  data-action="click->switch#toggle"
  data-switch-target="container"
  data-switch-entering-class="ease-out duration-150"
  data-switch-leaving-class="ease-in duration-100"
  data-switch-enter-timeout-value="100"
  data-switch-leave-timeout-value="75"
  data-switch-on-toggle-class="translate-x-5"
  data-switch-off-toggle-class="translate-x-0"
  data-switch-on-background-class="bg-purple-700"
  data-switch-off-background-class="bg-gray-200"
  data-switch-status-value="false"
  class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  role="switch"
  aria-checked="false"
>
  <span class="sr-only">On Off switch</span>
  <span
    data-switch-target="toggle"
    aria-hidden="true"
    class="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
  ></span>
</button>
```

### Option #3

This option showcases the usage of an input. This controller will trigger an onchange event on the input when the checked value changes from the switch change.

```html
<button
  type="button"
  data-controller="switch"
  data-action="click->switch#toggle"
  data-switch-target="container"
  data-switch-entering-class="ease-out duration-150"
  data-switch-leaving-class="ease-in duration-100"
  data-switch-enter-timeout-value="100"
  data-switch-leave-timeout-value="75"
  data-switch-on-toggle-class="translate-x-5"
  data-switch-off-toggle-class="translate-x-0"
  data-switch-on-background-class="bg-purple-700"
  data-switch-off-background-class="bg-gray-200"
  data-switch-status-value="false"
  class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  role="switch"
  aria-checked="false"
>
  <input type="checkbox" data-switch-target="input" class="sr-only" />
  <span class="sr-only">Checkbox switch</span>
  <span
    data-switch-target="toggle"
    aria-hidden="true"
    class="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
  ></span>
</button>
```
