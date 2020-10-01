import { of, throwError } from "rxjs";
import { SecretLoader } from "@metascrobbler/core";

/**
 * Loads secrets from environment variables.
 */
export default {
  load: (name) => {
    const value = process.env[name];

    return value
      ? of(value)
      : throwError(
          `Env variable ${name} not available, please add it and re-run the program`
        );
  },
} as SecretLoader;
