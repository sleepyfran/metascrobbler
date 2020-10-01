import { init } from "@metascrobbler/core";
import envSecretLoader from "./loaders/secret-loader";

init(envSecretLoader).subscribe({
  next(res) {
    console.log(res);
  },
  error(error) {
    console.error(error);
  },
});
