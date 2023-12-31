FROM node:19-alpine3.16

EXPOSE 3000

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json

run npm install

COPY . .

CMD ["node", "server.js"]