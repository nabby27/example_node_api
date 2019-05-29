# Node API Example

## To Start
```shell
docker-compose up -d
```

This will start the node and mysql docker machines.

> if show error be sure that your local mysql service is stoped.

## Run project
```shell
docker-compose exec app npm run dev
```
This will run nodemon with typescript in dev environment.

## Run project compile
```shell
docker-compose exec app npm run start
```
This will compile typescript in `./dist` folder and run nodemon with js compiled.

## Build project
```shell
npm run build
```
This will only compile the typscript

## Run tslint
```shell
npm run tslint
```
This will execute tslint to standard code.

## Run unit test
```shell
npm run jasmine
```
This will execute unit tests
