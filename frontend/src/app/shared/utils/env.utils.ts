import {environment} from '@@env/environment';
import {implDependencies} from '@@env/impl-dependencies';

export class EnvUtils {

  static getImpl(implKey: string) {
    const implementations = implDependencies[implKey];
    const envKey = ['mock', 'dpd', 'prod'].find(e => environment[e]);
    const impl = implementations[envKey];
    return impl ? impl : implementations[implementations.default];
  }
}
