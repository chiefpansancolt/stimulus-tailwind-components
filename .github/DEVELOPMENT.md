# Developing for Stimulus tailwind Components

Looking to contribute here is a guide on how to setup your environment and guides for adding a new feature.

## Prerequisites

You will need to have ruby v3.1.2, node v22+ and pnpm 10 installed.

Once you download the repo and get into the base of the folder you will need to run the below command to setup your local environment.

`./bin/setup`

## New Controller

Adding a new Controller should follow the similarity of existing controllers.

All should be added in the src folder.

Be sure to add an import to the `src/index.js` file like other imports.

Once added be sure to run the bellow commands to compile.

```bash
pnpm build
```

## Adding To Existing

Similily find the file you would like to add to and do so. Once added to then run the below commands to re compile.

```bash
pnpm build
```

## Documentation

Documentation should include any classes, targets, values and actions available. Then detail example usages. You can also include implementation of a feature in another language like Ruby on Rails and such. See existing docs for examples.

A doc should be added to the `documentation/docs/features/<feature-name>.md` file

To Test the doc be sure to run the below commands

```bash
cd documentation
pnpm install
pnpm dev
```

Then navigate to your new doc, if you do not see your feature listed then be sure to enable or add it to the navigation and feature data files found in `src/pages/index.md` and/or `src/data/navigations.js`.

## Playground

The playground is a place to create examples and test to ensure the feature addition or change is working as expected.

To add be sure to create a new file to build in, in a folder as follows `playground/playground/<feature-name>/index.html` also if adding a new controller be sure to registar in the `docs/_layouts/default.html` file for the playground site. Next you will need to enable the feature in the features file in `_data/features.yml`. See other examples in the playground folder for features and how to build.

To view and play in the playground from the below in all seperate terminal windows.

```bash
cd playground
pnpm install
bundle install
pnpm tailwind:watch
pnpm docs:dev
pnpm docs:open
```

## Commiting your Changes

Before you can commit your changes and create a pull request be sure the follow checklist is completed and all are passed.

- [ ] Is documentation added and/or updated accordingly
- [ ] Feature findable in the Documentation site
- [ ] Playground examples created and added to playground site
- [ ] Compilation of output in both playground and dist folders
- [ ] Linters run `pnpm lint` and all must not have errors

## Conclusion

Thank you again for looking to contribute and help build this to suite all the needs of future users. If you see anything missing form these docs feel free to add away via a pull request to help the next person out!
