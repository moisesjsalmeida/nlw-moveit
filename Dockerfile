FROM node:15.13

ENV port=3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app
RUN yarn install

COPY . /usr/src/app

RUN yarn build
EXPOSE 3000

CMD "yarn" "dev"

