# Project Dashboard APIs

Project Dashboard serverless APIs

## Prerequisites

You will need the following packages installed locally,

- x-code tools (to run make commands)
- Docker (Docker version 20.10.5, build 55c4c88) 
- Docker Compose (docker-compose version 1.28.5, build c4eb3a1f)
If you are using Mac, follow this [link](https://docs.docker.com/docker-for-mac/install/) to install

## Local Development

`make init` will start serverless offline. `make logs` will starts logs in terminal. While in development, the APIs will restart every time code changes are done.

The project is TS based, so please always use types while declaring a variable or method. The project will be accessible on `3000` port but if you wish to change it please change in `docker-compose.yml` file. 


## List of make commands

| Command        | Action        
| ------------- |:-------------:| 
| init      | Start the project the very first time. | 
| down      | Stop the project      |   
| run| Start project again      |
| logs | Get logs of project    | 
| restart | Completely restart the project    | 
| dev | Run project in dev mode (run+logs)    | 

