# Node DDD API Example

## Commands

### Start docker services
```shell
docker-compose up -d
```

This will start the Node and PostgreSQL docker services.

> If haver error be sure that your local services are stopped.

### Down docker services
```shell
docker-compose down
```

### Run project
```shell
docker-compose exec app npm run dev
```
This will run nodemon with typescript in dev environment.

### Run project compile
```shell
docker-compose exec app npm run start
```
This will compile typescript in `./dist` folder and run nodemon with js transpiled.

### Build project
```shell
docker-compose exec app npm run build
```
This will only compile the typscript

### Run tslint
```shell
docker-compose exec app npm run tslint
```
This will execute tslint to standard code.

### Run unit test
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
## To see how works
First of all, create the .`env` file (you have the example of the `.env.example` file).

After starting the docker services and the application node make sure to run the migration up to have the database structure and two users record.

---
## Endpoints

### Get all users

#### Request

> Method: `GET`

> URL: [http://localhsot:8080/users](http://localhsot:8080/users)

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
    },
]
```

### Get one users

#### Request

> Method: `GET`

> URL: [http://localhsot:8080/users/32547dd7-617a-4985-a59a-91a176e55b83](http://localhsot:8080/users/32547dd7-617a-4985-a59a-91a176e55b83)

#### Response 
```json
{
    "id": "32547dd7-617a-4985-a59a-91a176e55b83",
    "name": "Iván"
}
```

### Create user

#### Request

> Method: `POST`

> URL: [http://localhsot:8080/users/32547dd7-617a-4985-a59a-91a176e55b83](http://localhsot:8080/users/32547dd7-617a-4985-a59a-91a176e55b83)

> Body:
```json
{
    "name": "Iván"
}
```
#### Response 

> No response

### Update user

#### Request

> Method: `PUT`

> URL: [http://localhsot:8080/users/32547dd7-617a-4985-a59a-91a176e55b83](http://localhsot:8080/users/32547dd7-617a-4985-a59a-91a176e55b83)

> Body:
```json
{
    "name": "Other"
}
```
#### Response 

> No response

### Delete user

#### Request

> Method: `DELETE`

> URL: [http://localhsot:8080/users/32547dd7-617a-4985-a59a-91a176e55b83](http://localhsot:8080/users/32547dd7-617a-4985-a59a-91a176e55b83)

#### Response 

> No response