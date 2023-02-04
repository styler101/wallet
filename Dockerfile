FROM node:18.14-alpine3.17

ENV LC_ALL = UTF-8

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm run dev"]
