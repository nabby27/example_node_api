.PHONY: up down install migrate-backoffice-run migrate-backoffice-revert seed-backoffice-run seed-backoffice-revert run-dev run-start run-build run-test run-test-unit run-test-unit-coverage eslint-check eslint-fix

API_CONTAINER_NAME=api

up:
	@docker-compose up -d

down:
	@docker-compose down

install:
	@docker-compose exec $(API_CONTAINER_NAME) npm install $(ARGS)

build:
	@docker-compose exec $(API_CONTAINER_NAME) npm run build

migrate-backoffice-create: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run migrate:backoffice:create $(ARGS)

migrate-backoffice-run: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run migrate:backoffice:run

migrate-backoffice-revert: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run migrate:backoffice:revert

seed-backoffice-create: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run seed:backoffice:create $(ARGS)

seed-backoffice-run: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run seed:backoffice:run

seed-backoffice-revert: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run seed:backoffice:revert

run-dev: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run dev

run-start: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run start

run-build: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run build

run-test-all: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run test:all

run-test-unit: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run test:unit

run-test-unit-coverage: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run test:unit:coverage

run-test-e2e: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run test:e2e

eslint-check: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run eslint:check

eslint-fix: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run eslint:fix
