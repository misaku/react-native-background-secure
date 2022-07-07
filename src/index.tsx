import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-background-secure' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const BackgroundSecureModule = isTurboModuleEnabled
  ? require('./NativeBackgroundSecure').default
  : NativeModules.BackgroundSecure;

const BackgroundSecure = BackgroundSecureModule
  ? BackgroundSecureModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function blockScreen() {
  return BackgroundSecure.blockScreen();
}

export function unblockScreen() {
  return BackgroundSecure.unblockScreen();
}
