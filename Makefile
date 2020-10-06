.PHONY: up down install run-dev run-start run-build run-test run-test-unit

up:
	@docker-compose up -d

down:
	@docker-compose down

install:
	@docker-compose exec app npm install

migrate-up: up
	@docker-compose exec app npm run migrate:up

migrate-down: up
	@docker-compose exec app npm run migrate:down

run-dev: up
	@docker-compose exec app npm run dev

run-start: up
	@docker-compose exec app npm run start

run-build: up
	@docker-compose exec app npm run build

run-test: run-test-unit eslint-fix

run-test-unit: up
	@docker-compose exec app npm run test:unit

eslint-check: up
	@docker-compose exec app npm run eslint:check

eslint-fix: up
	@docker-compose exec app npm run eslint:fix