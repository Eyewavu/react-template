# Node.js Typescript template

<div align="center">
  <img src="https://pl.reactjs.org/favicon.ico" alt="react" width="32" height="32">
  <img src="https://www.typescriptlang.org/favicon-32x32.png" alt="TS" width="32" height="32">
  <img src="https://tailwindcss.com/favicons/favicon.ico" alt="tailwindcss" width="32" height="32">
  <img src="https://daisyui.com/favicon.ico" alt="daisyui" width="32" height="32">
  <img src="https://vitejs.dev/logo.svg" alt="vite" width="32" height="32">
  <img src="https://eslint.org/favicon.ico" alt="eslint" width="32" height="32">
  <img src="https://yarnpkg.com/favicon.svg" alt="Yarn" width="32" height="32">
</div>

Quick boilerplate setup for making React Single Page Applications with Typescript.

## Getting started
create fresh app
```sh
git clone https://github.com/Eyewavu/react-template.git my-app
cd my-app
yarn install && yarn dev
```
or add to existing directory
```sh
git clone https://github.com/Eyewavu/react-template.git .
yarn install && yarn dev
```

## Folder structure
```
my-app/
├── node_modules/
├── .gitignore
├── rollup.config.js
├── package.json
├── tsconfig.json
├── yarn.lock
├── README.md
│
└── src/
    └── components/
    └── context/
    └── hooks/
    └── pages/
    └── utils/
    └── main.tsx
    └── App.tsx
    └── index.css
    └── vite-env.d.ts
```


## Folder aliases
```
"@"  - src/
"@u" - src/utils/
"@p" - src/pages/
"@c" - src/components/
"@ctx" - src/context/
```