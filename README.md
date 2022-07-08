# react-native-background-secure
Android Only

Allow you hide the screen when your app goes to background mode.
## Installation

```sh
npm install react-native-background-secure
or
yarn add react-native-background-secure
```

## Usage

```js
import { AppState } from 'react-native';
import { blockScreen, unblockScreen } from "react-native-background-secure";

// ...

const subscriptionFocus = AppState.addEventListener('focus', () => {
  unblockScreen();
});

const subscriptionBlur = AppState.addEventListener('blur', () => {
  blockScreen();
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
