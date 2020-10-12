# Node DDD API Example

## To see how works

First of all, create the .`env` file (you have the example of the `.env.example` file).

After starting the docker services, be sure to install the dependencies and if you want, you can run the migration to have the database structure and two registered users.

---

## Commands

### Start docker services

```shell
make up
```

or

```shell
docker-compose up -d
```

This will start the Node and PostgreSQL docker services.

> If haver error be sure that your local services are stopped.

### Down docker services

```shell
make down
```

or

```shell
docker-compose down
```

### Run project

```shell
make run-dev
```

or

```shell
docker-compose exec app npm run dev
```

This will run nodemon with typescript in dev environment.

### Run project compile

```shell
make run-start
```

or

```shell
docker-compose exec app npm run start
```

This will compile typescript in `./dist` folder and run nodemon with js transpiled.

### Build project

```shell
make run-build
```

or

```shell
docker-compose exec app npm run build
```

This will only compile the typscript

### Install dependencies

```shell
make install
```

or

```shell
docker-compose exec app npm install
```

### Run eslint

```shell
make eslint-check
make eslint-fix
```

or

```shell
docker-compose exec app npm run eslint:check
docker-compose exec app npm run eslint:fix
```

This will execute eslint to standard code.

### Run unit test

```shell
make run-test-unit
```

or

```shell
docker-compose exec app npm run test:unit
```

This will execute unit tests

---

## Migrations

### Run migrations up

```shell
docker-compose exec app npm run migrate:up
```

### Run migrations down

```shell
docker-compose exec app npm run migrate:down
```

### Create migrations

```shell
docker-compose exec app npx db-migrate create {name_of_migration}
```

---

## Endpoints

### Get all users on backoffice

#### Request

> Method: `GET`

> URL: [http://localhost:8080/backoffice/users](http://localhost:8080/backoffice/users)

#### Response

```json
[
  {
    "id": "32547dd7-617a-4985-a59a-91a176e55b83",
    "name": "Iván"
  },
  {
    "id": "43ba0b24-4d0b-40f7-aa7f-1b2a3058f484",
    "name": "Nabby"
  }
]
```

### Get one user on backoffice

#### Request

> Method: `GET`

> URL: [http://localhost:8080/backoffice/users/32547dd7-617a-4985-a59a-91a176e55b83](http://localhost:8080/backoffice/users/32547dd7-617a-4985-a59a-91a176e55b83)

#### Response

```json
{
  "id": "32547dd7-617a-4985-a59a-91a176e55b83",
  "name": "Iván"
}
```

### Create user on backoffice

#### Request

> Method: `POST`

> URL: [http://localhost:8080/backoffice/users/32547dd7-617a-4985-a59a-91a176e55b83](http://localhost:8080/backoffice/users/32547dd7-617a-4985-a59a-91a176e55b83)

> Body:

```json
{
  "name": "Iván"
}
```

#### Response

> No response

### Update user on backoffice

#### Request

> Method: `PUT`

> URL: [http://localhost:8080/backoffice/users/32547dd7-617a-4985-a59a-91a176e55b83](http://localhost:8080/backoffice/users/32547dd7-617a-4985-a59a-91a176e55b83)

> Body:

```json
{
  "name": "Other"
}
```

#### Response

> No response

### Delete user on backoffice

#### Request

> Method: `DELETE`

> URL: [http://localhost:8080/backoffice/users/32547dd7-617a-4985-a59a-91a176e55b83](http://localhost:8080/backoffice/users/32547dd7-617a-4985-a59a-91a176e55b83)

#### Response

> No response
