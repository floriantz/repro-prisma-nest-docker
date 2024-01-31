FROM node:18.16.1-bookworm as builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npm run prisma:generate

COPY . .

RUN npm run build

FROM node:18.16.1-bookworm

WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./

RUN npm ci --production --ignore-scripts
RUN npm cache clean --force

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma

ENV PORT 4000
EXPOSE $PORT

CMD ["node", "dist/main"]
