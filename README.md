# Ikitai - Find your next destination

Ikitai (いきたい) is Japanese for expressing **the desire of going somewhere**. Don't know where you wanna go? Use this decision making tool and you'll be traveling soon ✈️

Check out the live project at [https://danielleklaasen.github.io/ikitai/](https://danielleklaasen.github.io/ikitai/)

## Getting started

```
git clone https://github.com/danielleklaasen/ikitai.git

cd ikitai

npm install

npm run dev
```

### CLI Commands overview

-   `npm install`: Installs dependencies

-   `npm run dev`: Run a development, HMR server

-   `npm run serve`: Run a production-like server

-   `npm run build`: Production-ready build

-   `npm run lint`: Pass TypeScript files using TSLint

-   `npm run test`: Run Jest and Enzyme with
    [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
    your tests

For detailed explanation on other Preact CLI commands, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## This project is build with:

-   ### [Preact](https://preactjs.com/) + TypeScript

    Less is more. Or actually not really, in this case _less_ is only 3kB.

-   ### [Rebass](https://rebassjs.org/)
    A lightweight UI toolkit, in combination with [emotion-theming](https://emotion.sh/docs/theming). It enables for great performance since it generates css classes on the fly. Just pass in your styles throught the `sx` prop and you're ready to go.
