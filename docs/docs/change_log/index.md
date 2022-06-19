---
layout: content
permalink: /docs/change_log
title: Stimulus Tailwind Components - Change Log
header: Change Log
subheader: Version History of Stimulus Tailwind Components
details:
previousName: Installation
previousLink: /docs/installation
nextName: Notification
nextLink: /docs/notification
---

## Version [0.x.0](https://github.com/chiefpansancolt/stimulus-tailwind-components/releases/tag/0.x.0)

### New Features

- Add Switch (Toggle) Component
  - Ability to enable/disable
  - Ability to work with an icon
  - Ability to send value to checked value on linked input
    - Will trigger onchange event with value change
  - Compatability with theme component

### Adds

- Update for Theme Component
  - Added support to work with Switch/Toggle display

### Updates

- Updated default value for notification dismiss after value to `4000` from not set.
- Clean up on more documentation structures

## Version [0.1.1](https://github.com/chiefpansancolt/stimulus-tailwind-components/releases/tag/0.1.1)

### Fixes

- Fix Readme Missing Supported Features

## Version [0.1.0](https://github.com/chiefpansancolt/stimulus-tailwind-components/releases/tag/0.1.0)

### New Features

- Add Documentation Site https://chiefpansancolt.github.io/stimulus-tailwind-components
- Variaty of Repo based setups
- Add Theme Component (Dark Mode toggle)
  - Ability to set based on system preference (togglable)
  - Ability to set in localstorage to save preference on site load
  - Default to light mode if system pref is disabled

## Version [0.0.2](https://github.com/chiefpansancolt/stimulus-tailwind-components/releases/tag/0.0.2)

### New Features

- Notification(s) ([#2](https://github.com/chiefpansancolt/stimulus-tailwind-components/issues/2))
  - Ability to Auto Dismiss
  - Ability to Manually Dismiss
  - Removes notification from DOM when dismissed
