## load pkg chrome extension

Forked from [`webext-require`](https://github.com/kricsleo/webext-require/)

## Features
- Use manifest-version `3.0`
- Support javascript and CSS packages in npm, like `_pkg('lodash')` or `_pkg('animate.css')`
- Support npm package scope, like `_pkg('lodash@4.17.21')`  `_pkg('lodash@4')`
- Support subpath in npm packages, like `_pkg('lodash/lodash.min.js')`
- Support any CDN files, like `_pkg('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js')`

Javascript package needs to provide **UMD** or other browser format bundles so that they can be directly used in the browser.

## Usage

1. [Download](https://github.com/kricsleo/webext-require/releases) this extension and install it in the browser extension page(like `chrome://extensions/`).
2. Use `_pkg` in dev-tools to install packages from npm or CDN.

## Thanks

[jsDelivr](https://www.jsdelivr.com/) - All npm assets are provided by it.
