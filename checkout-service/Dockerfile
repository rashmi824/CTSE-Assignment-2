FROM node:22.9-bookworm-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5002

CMD ["node","index.js"]