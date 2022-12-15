FROM node:14.17.0-alpine

WORKDIR /react-web

COPY package*.json ./
RUN npm ci

EXPOSE 3000

CMD ["npm","start"]
