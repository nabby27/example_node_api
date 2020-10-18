.PHONY: up down install migrate-backoffice-run migrate-backoffice-revert seed-backoffice-run seed-backoffice-revert run-dev run-start run-build run-test run-test-unit run-test-unit-coverage eslint-check eslint-fix

up:
	@docker-compose up -d

down:
	@docker-compose down

install:
	@docker-compose exec api npm install

migrate-backoffice-run: up
	@docker-compose exec api npm run migrate:backoffice:run

migrate-backoffice-revert: up
	@docker-compose exec api npm run migrate:backoffice:revert

seed-backoffice-run: up
	@docker-compose exec api npm run seed:backoffice:run

seed-backoffice-revert: up
	@docker-compose exec api npm run seed:backoffice:revert

run-dev: up
	@docker-compose exec api npm run dev

run-start: up
	@docker-compose exec api npm run start

run-build: up
	@docker-compose exec api npm run build

run-test: run-test-unit eslint-fix

run-test-unit: up
	@docker-compose exec api npm run test:unit

run-test-unit-coverage: up
	@docker-compose exec api npm run test:unit:coverage

eslint-check: up
	@docker-compose exec api npm run eslint:check

eslint-fix: up
	@docker-compose exec api npm run eslint:fix
