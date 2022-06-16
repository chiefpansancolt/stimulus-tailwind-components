---
layout: installation
permalink: docs/installation
title: Stimulus Tailwind Components - Installation
header: Installation
subheader: Get started with Stimulus Tailwind Components
details: A package built from tailwind, in stimulus to bring JS required Tailwind driven components to life in frameworkless languages, like Ruby on Rails or static sites.
---

## Installation

### Adding to Project

This assumses you have [@hotwired/stimulus](https://stimulus.hotwired.dev) already installed and setup.

```bash
yarn add stimulus-tailwind-components
```

or

```bash
npm install stimulus-tailwind-components
```

---

## Basic Usage

### Prerequisite

You'll want to initialize StimulusJS and then you can import all the Tailwind components.

### Common JS projects

```javascript
../application.js

import { Application } from "@hotwired/stimulus"

const application = Application.start();

// Import and register all TailwindCSS Components
import { Notification, Theme } from "tailwindcss-stimulus-components"
application.register('notification', Notification)
application.register('theme', Theme)
```

### Rails Application (v7+)

```javascript
./app/javascript/controllers/application.js

import { Application } from '@hotwired/stimulus'

const application = Application.start()

// Import and register all TailwindCSS Components
import { Notification, Theme } from 'stimulus-tailwind-components'
application.register('notification', Notification)
application.register('theme', Theme)

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

export { application }
```
