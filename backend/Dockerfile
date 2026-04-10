# Sets the Node version to the current one in my project
ARG NODE_VERSION=24.11.1
FROM node:${NODE_VERSION} AS dev

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
