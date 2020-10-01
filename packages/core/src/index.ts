import { from } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { SecretLoader } from "./interfaces/secret-loader";

export const init = (secretLoader: SecretLoader) =>
  checkEnvVariables(secretLoader);

const checkEnvVariables = (secretLoader: SecretLoader) => {
  const mandatoryVariables = ["spotifyApiKey", "spotifySecretKey"];
  return from(mandatoryVariables).pipe(mergeMap(secretLoader.load));
};

export * from "./interfaces/secret-loader";
