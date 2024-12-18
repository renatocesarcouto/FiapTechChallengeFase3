FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY tests ./tests

RUN npm install --only=dev

EXPOSE 3000

CMD ["npm", "start"]
