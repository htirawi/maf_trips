# MAF Trips [![version](https://img.shields.io/badge/version-1.0.1-yellow.svg)](https://semver.org)

<img src="https://i.ibb.co/tbkLqwy/maf-group-png-logo.png" align="right"
     alt="Night Trips" width="120" height="178">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

-   [Folder Structure](#folder-structure)
-   [Available Scripts](#available-scripts)
    -   [npm install](#npm-install)
    -   [npm start](#npm-start)
    -   [npm run build](#npm-run-build)
    -   [npm test](#npm-test)
-   [Something Missing?](#something-missing)

## Folder Structure

After creating an app, it should look something like the following:

```
maf-frontend-assessment
├── README.md
├── build
├── node_modules
├── package.json
├── .gitignore
├── craco.config.js
├── tailwind.config.js
├── workbox-config.js
├── public
│   ├── nt.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
└── src
    ├── assets
    ├── components
    ├── data
    ├── App.js
    ├── index.js
    ├── reportWebVitals.js
    └── service-worker.js
    └── serviceWorkerRegistration.js
    └── setupTests.js
```

## Available Scripts

Its required to get access to npm repository and set proper token in `~/.npmrc` to run `npm install` successfully.
In the project directory, you can run:

### `npm install`

Install required dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Runs the test watcher in an interactive mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Development

### Serve

To serve the site in dev mode, run `serve -s build`, This will compile all the views
into the `build/` directory and start a web server to serve that
content.

```text
$ serve -s build
```

The output will include the address where the server is running
(http://localhost:5000 by default).

## Something Missing?

If you have ideas for how we could improve this readme or the project in general, [let me know]
