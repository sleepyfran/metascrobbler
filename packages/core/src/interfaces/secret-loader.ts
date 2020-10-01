import { Observable } from "rxjs";

/**
 * Defines a loader capable of retrieving API and secret keys needed to interact
 * with the different set of APIs that the app can handle.
 */
export interface SecretLoader {
  /**
   * Loads a variable with the given name.
   * @param name name of the variable to load.
   */
  load(name: string): Observable<string>;
}
