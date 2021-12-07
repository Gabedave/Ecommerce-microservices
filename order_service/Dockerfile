FROM node:14

RUN mkdir -p /home/node/order_service/node_modules && chown -R node:node /home/node/order_service

WORKDIR /home/node/order_service

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 5000

CMD [ "node", "src/server.js" ]