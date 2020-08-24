FROM node

COPY . nest-graphql-heroku

WORKDIR nest-graphql-heroku

RUN npm i

EXPOSE 3000

CMD npm run start
