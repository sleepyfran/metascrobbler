import { init } from "@metascrobbler/core";

init().subscribe({
  next(res) {
    console.log(res);
  },
  error(error) {
    console.error(error);
  },
});
