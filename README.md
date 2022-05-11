# Gnome Extension Skeleton/Starter in TypeScript

This starter serves as a reference for a base new extension written in typescript

It contributes to the proposal of [GNOME Shell's JS/extensions transition to TypeScript](https://discourse.gnome.org/t/proposal-transition-gnome-shell-js-extensions-to-typescript-guide-for-extensions-today/4270)

## Requirements

- GNU Make
- Yarn
- Node (Preferably > 12.x.x)

## Usage

Outside of actual development of the extension (on which you can find a guide [here](https://gjs.guide/extensions/development/creating.html#a-working-extension)), every action is supposed to be used using the **Makefile** :

Install the project/dependencies
```
make install
```

Build the project's JS files (in target folder)
```
make build
```

Deploy the target files to local user's GNOME Extensions folder (Tested in Ubuntu 22.04, be careful as this folder can change depending on your configuration)
(**NOTE: the deploy action does not reload GNOME Shell for stability purpose, this action has to be done manually by the user to take changes in effect using Alt + F2 => `r` => Enter**)
```
make deploy
```

Every of those actions (install, build, deploy) are run by default using only `make` without any recipe

## Why TypeScript ?

TypeScript is now a worldwide known and used language that aims to fix some of javascript's major problems, including lack of type-safety, security, code structure etc.

It allows the code to be :

- More readable

- Easily maintainable 

- More Stable

- Easier to scale

It also gives IDE support and tightier integration for an enhanced development experience

Read more about TypeScript and its advantages [here](https://www.typescriptlang.org/)


