import { of, from, throwError } from "rxjs";
import { mergeMap } from "rxjs/operators";

export const init = () => checkEnvVariables();

const checkEnvVariables = () => {
  const mandatoryVariables = ["spotifyApiKey", "spotifySecretKey"];

  return from(mandatoryVariables).pipe(mergeMap(checkEnvVariable));
};

const checkEnvVariable = (name: string) => {
  const value = process.env[name];

  return value
    ? of(value)
    : throwError(
        `Env variable ${name} not available, please add it and re-run the program`
      );
};
