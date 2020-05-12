FROM node:14.1-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD node server.js

EXPOSE 3000
