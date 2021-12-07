FROM node:14

RUN mkdir -p /home/node/customer_service/node_modules && chown -R node:node /home/node/customer_service

WORKDIR /home/node/customer_service

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 5000

CMD [ "node", "src/server.js" ]