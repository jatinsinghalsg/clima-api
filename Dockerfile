FROM node:12-buster

# Install global dependecies
RUN apt-get update
RUN apt-get install -y default-jre
RUN npm install --global serverless
RUN yarn --version

WORKDIR /var/app/clima-api
COPY . /var/app/clima-api/

RUN yarn install
