# React Native Boilerplate

## TODO LIST

- Setup detox with simple navigation tests
- Setup react native config
  - Production
  - Demo
  - Develop
- Setup iOS certificates
- Setup windows app center and codepush


## Environments

To manage our environments we will use [React Native Config](https://github.com/luggit/react-native-config).

- Production (Binary + codepush)
  - Production apps on the app stores
- Demo (Binary + codepush)
  - Should be a copy of what is on production
    - For final tests with codepush / api’s etc
- Develop (Binary only)
  - Development work including features, bugs, master branch etc

## Branching

To trigger different types of builds and releases we will use the following branching naming convention:

- production/X.X
  - Branch off demo branch and build production app binary for iOS and Android and upload to Google Play and Apple stores
  - An admin/manager can then release on itunes connect / Google play console
- demo/X.X
  - Branch off master branch and build demo app binary and distribute through windows app center to demo testers
- codepush/X.X.X
  - Branch off master branch and codepush to demo app
    - Only JS changes, binary changes will break the app
  - If happy with codepush release on demo app promote to production app through windows app center
- master
  - Each time code is merged into master branch it should build the develop app and distribute through windows app center to develop app testers
- Dev branches
  - Branch off master to create any of the following dev branches:
    - feature/new-thing
    - fix/change-this
    - spike/test-that
    - task/do-that
  - Each time code is pushed to any of these dev branches it should build the develop app and distribute through windows app center to develop testers with the branch name / details in the release notes.

## Continuous Integration

To manage our binary and [Codepush](https://github.com/Microsoft/react-native-code-push) releases we will use [Windows App Center](https://docs.microsoft.com/en-us/appcenter/build/react-native/).

As an alternative we could use [Fastlane](https://carloscuesta.me/blog/shipping-react-native-apps-with-fastlane/).

## Navigation

For navigation we will use [React Navigation](https://reactnavigation.org/).

## Testing

To reduce the change of shipping bugs we will run unit unit, component and end-to-end tests:

- [Jest](https://jestjs.io/) for unit tests.
- Component testing using [react-test-renderer](https://reactjs.org/docs/test-renderer.html) and [Jest](https://jestjs.io/).
- [Detox](https://github.com/wix/Detox) for end-to-end ui testing.

## Code Quality

We will use [TypeScript](https://www.typescriptlang.org/) so we can statically type our code. 

For linting we will use [ESLint](https://github.com/typescript-eslint/typescript-eslint).

To enforce a consistent code format we will use [Prettier](https://prettier.io/).

## Managing iOS Certificates

[Fastlane Match](https://docs.fastlane.tools/actions/match/) allows us to easily sync developer certificates and profiles across the team.