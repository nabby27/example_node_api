.PHONY: up down run-dev run-start run-build run-test run-test-unit

up:
	@docker-compose up -d

down:
	@docker-composer down

run-dev: up
	@docker-compose exec app npm run dev

run-start: up
	@docker-compose exec app npm run start

run-build: up
	@docker-compose exec app npm run build

run-test: run-test-unit

run-test-unit: up
	@docker-compose exec app npm run test:unit
