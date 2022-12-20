# Getting Started with Synonyms App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Use [run.sh](./run.sh) to start application.

### Usage
```
./run.sh [options] [action]
```

Options:
* `-e` environment where all backend calls will land. Could be: local, production. Default value: local
* `-p` port. Default value: 3003
* `-h` show help

Actions are defined in package.json. Some of the actions are:
* `start` - start in development mode. It sets NODE_ENV=development
* `build` - builds and minifies code. It sets NODE_ENV=production. It doesn't start any server.
* `test` - run all tests
* `prettier` - runs [prettier](https://prettier.io/) on all files in this folder

### Examples

* Start application in development mode (non minified), but let all xhr requests be made toward production environment:
 ```sh
./run.sh -e production start
 ```

* Start application in development mode (non minified) on port 3003 and let all xhr request be made toward local environment:
 ```sh
 ./run.sh -p 3003 start
 ```

* Run tests
 ```sh
 ./run.sh -p test
 ```
