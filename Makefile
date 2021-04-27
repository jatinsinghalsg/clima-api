delete-image: 
	docker image rm project-dashboard-serverless

delete-container:
	docker rm project-dashboard-serverless-cnt || true

run-intreactive: delete-container
	docker run --name=project-dashboard-serverless-cnt -p 0.0.0.0:3003:3000 -v "$(pwd)":/var/app/pd,/var/app/pd/node_modules  --env-file=.env project-dashboard-serverless

down:
	docker-compose down --remove-orphans

run:
	docker-compose up -d

logs:
	docker-compose logs -f

dev: run logs

build:
	docker-compose build

restart: down build run

reload: down dev

init:
	build run