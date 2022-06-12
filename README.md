![Logo](https://github.com/chiefpansancolt/stimulus-tailwind-components/blob/main/.github/stimulus-tailwind-logo.png)

# StimulusJS Tailwind Components

This is pre built stimulus controllers for common [tailwindcss](https://tailwindcss.com) based components inspired by [TailwindUI](https://tailwindui.com)

Currently supports:

- [Notification(s)](https://github.com/chiefpansancolt/stimulus-tailwind-components/blob/main/docs/Notification.md)

## Installation

This assumses you have [@hotwired/stimulus](https://stimulus.hotwired.dev) already installed and setup.

```bash
yarn add stimulus-tailwind-components
```

or

```bash
npm install stimulus-tailwind-components
```

## Usage

You'll want to initialize StimulusJS and then you can import all the Tailwind components.

### Usage look inside common JS projects

```javascript
../application.js

import { Application } from "@hotwired/stimulus"

const application = Application.start();

// Import and register all TailwindCSS Components
import { Notification } from "tailwindcss-stimulus-components"
application.register('notification', Notification)
```

### Usage look inside a Rails App

```javascript
./app/javascript/controllers/application.js

import { Application } from '@hotwired/stimulus'

const application = Application.start()

// Import and register all TailwindCSS Components
import { Notification } from 'stimulus-tailwind-components'
application.register('notification', Notification)

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

export { application }
```
