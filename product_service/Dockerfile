FROM node:14

RUN mkdir -p /home/node/product_service/node_modules && chown -R node:node /home/node/product_service

WORKDIR /home/node/product_service

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 5000

CMD [ "node", "src/server.js" ]