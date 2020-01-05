import {environment} from '../../../environments/environment';
import {implDependencies} from '../../../environments/impl-dependencies';

export class EnvUtils {

  static getImpl(implKey: string) {
    const implementations = implDependencies[implKey];
    const envKey = ['mock', 'dpd', 'prod'].find(e => environment[e]);
    const impl = implementations[envKey];
    return impl ? impl : implementations[implementations.default];
  }
}
