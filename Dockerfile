FROM node:latest
WORKDIR /app
COPY ./package.json ./
RUN npm install
RUN npm install --legacy-peer-deps react-external-link
RUN npm install --legacy-peer-deps react-hooks-use-modal
COPY ./ .
EXPOSE 3000
CMD ["npm", "start"]