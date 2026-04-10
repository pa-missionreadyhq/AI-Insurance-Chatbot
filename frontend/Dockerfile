ARG NODE_VERSION=24.11.1
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html