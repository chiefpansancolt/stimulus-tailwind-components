![Logo](https://github.com/chiefpansancolt/stimulus-tailwind-components/blob/main/.github/stimulus-tailwind-logo.png)

# StimulusJS Tailwind Components

![npm](https://img.shields.io/npm/v/stimulus-tailwind-components?logo=NPM&style=for-the-badge)
![npm](https://img.shields.io/npm/dm/stimulus-tailwind-components?logo=NPM&style=for-the-badge)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/chiefpansancolt/stimulus-tailwind-components?label=Release&logo=github&style=for-the-badge)
[![Discord](https://img.shields.io/discord/450095227185659905?color=yellow&label=Discord&logo=discord&style=for-the-badge)](https://discord.gg/pBxGpfrmD4)

This is pre built stimulus controllers for common [tailwindcss](https://tailwindcss.com) based components inspired by [TailwindUI](https://tailwindui.com)

Currently supports:

- [Notification(s)](https://github.com/chiefpansancolt/stimulus-tailwind-components/blob/main/docs/Notification.md)

## Roadmap

Check out the [roadmap](https://github.com/chiefpansancolt/stimulus-tailwind-components/projects/1) to see what other features are coming down the pipeline for this project!

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

## Change Log

Check out the [Change Log](https://github.com/chiefpansancolt/stimulus-tailwind-components/blob/main/CHANGELOG.md) for new breaking changes/features/bug fixes per release of a new version.

## Contributing

Bug Reports, Feature Requests, and Pull Requests are welcome on GitHub at https://github.com/chiefpansancolt/stimulus-tailwind-components. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://github.com/chiefpansancolt/stimulus-tailwind-components/blob/main/.github/CODE_OF_CONDUCT.md) code of conduct.

To see more about Contributing check out this [document](https://github.com/chiefpansancolt/stimulus-tailwind-components/blob/main/.github/CONTRIBUTING.md).

- Fork Repo and create new branch
- Once all is changed and committed create a pull request.

**Ensure all merge conflicts are fixed and CI is passing.**

## Development

After checking out the repo, run `yarn install` to install dependencies. Then, run `yarn test` to run the tests. You can also run `yarn build` to build the output to test on.

_**NOTE: Do not commit any changes made in dist folder from compiling as this will be performed by the owner before building of a release.**_

## License

Stimulus Tailwind Components is available as open source under the terms of the [MIT License](https://github.com/chiefpansancolt/stimulus-tailwind-components/blob/main/LICENSE).
