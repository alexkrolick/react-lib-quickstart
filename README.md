# React Library Quickstart Boilerplate

Get started building React libraries, quickly.

- Clone or copy this repo 
  - `https://github.com/alexkrolick/react-lib-quickstart/archive/master.zip`
  - `git clone git@github.com:alexkrolick/react-lib-quickstart.git`
- Edit package.json
  - Change `name` to your library's NPM name
  - Update `author`, `license`, `description`, and `repository`

## What is included

### Basics
- Babel with React, Env, and Stage-2 presets
- Webpack configured for UMD "dist" builds suitable for AMD, CommonJS `require`, and `<script>` tag usage. The UMD module name is set to the camelCased version of the package name automatically by reading package.json.
- .gitignore and .npmignore configured for Webpack development

### Extras
- Babel-CLI configured to build a "lib" version of the library that isn't bundled and keeps ES2015 `import`/`export`s. Don't use this if you use webpack-specific loaders like css-loader. (In a library context this should be rare).
- Prettier configured to create minimal diffs (semicolons _no_, trailing commas _yes_). Remove the package if you don't need it.

Babel and Prettier are configured within package.json to minimize the number of files that need to be copied.

__*See [package.json](./package.json) for more details.*__