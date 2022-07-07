import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  blockScreen(): void;
  unblockScreen(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('BackgroundSecure');
