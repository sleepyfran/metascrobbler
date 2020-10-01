# 🎙 metascrobbler

A Spotify scrobbler that allows you to modify metadata

## 🛠 Building

The project is built in TypeScript and is separated in a bunch of packages, each
of them with a different concern. The most useful package to run the project
locally is the `local` package which you can run with:

```bash
npm run build
npm run local
```

This will automatically install all the dependencies and link all the necessary
packages and finally run the local package.

## 🧪 Testing

Similarly for testing just run:

```bash
npm run build
lerna run test
```
