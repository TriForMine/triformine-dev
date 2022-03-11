FROM node:17-alpine
WORKDIR /usr/server/app
COPY ./package.json ./
RUN yarn install
COPY ./ .
RUN yarn build
ENV NODE_ENV=production
CMD ["yarn", "start"]
